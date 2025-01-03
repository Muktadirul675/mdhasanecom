import { Color } from "@/hooks/color";
import { Size } from "@/hooks/size";
import { prisma } from "@/prisma";
import fs from 'fs';
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import slugify from "slugify";

export async function POST(req: NextRequest){
    try{
        const formData = await req.formData()
        const name = formData.get('name')?.toString()
        const description = formData.get('description')?.toString()
        const price = parseInt(formData.get('price')?.toString() ?? '0')
        const d_price = parseInt(formData.get('d_price')?.toString() ?? '0')
        const stocks = parseInt(formData.get('stocks')?.toString() ?? '0')
        const sizes : Size[] = JSON.parse(formData.get('sizes')?.toString() ?? '[]')
        const colors : Color[] = JSON.parse(formData.get('colors')?.toString() ?? '[]')

        console.log(name, description, price, d_price, stocks, sizes, colors)

        const errors = []
        if(!name || name === ''){
            errors.push("Name can't be empty")
        }
        if(!description || description === ''){
            errors.push("Description can't be empty")
        }
        if(!price || price <= 0){
            errors.push("Price should be higher than 0")
        }
        if(!stocks || stocks <= 0){
            errors.push("Stocks should be higher than 0")
        }
        
        if(errors.length){
            return NextResponse.json({error: errors.join(',')})
        }

        const product = await prisma.product.create({
            data:{
                name: name as string,
                description : description as string,
                price: price,
                discounted_price: d_price,
                slug: slugify(name as string, {remove: /[*+~.()'"!:@]/g}),
                stocks: stocks,
                sizes:{
                    create: sizes
                },
                colors:{
                    create: colors
                }
            }
        })

        const images = formData.getAll('images[]')
        const uploadDir = path.resolve('./public/uploads')
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive:true})
        }
        const imgArr = []
        for(const i of images){
            const image = i as File
            const buffer = Buffer.from(await image.arrayBuffer())
            const fileName = `product-image-${Date.now()}-${image.name}`
            const filePath = path.join(uploadDir, fileName)
            fs.writeFileSync(filePath, buffer)
            imgArr.push(filePath)
        }
        await prisma.image.createMany({
            data : imgArr.map((img)=>{
                return {url: img, productId: product.id}
            }),
            // skipDuplicates: true
        })
        console.log(images)
        return NextResponse.json({"hello":"world"})
    }catch(e){
        return NextResponse.json({"error":"top level error\n"+e})
    }
}