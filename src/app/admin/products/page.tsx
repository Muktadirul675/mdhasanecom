import { prisma } from "@/prisma"
import Link from "next/link"

export default async function ProductPage() {
    const products = await prisma.product.findMany()
        return(
            <>
                This page is still under developing <br />
                Added products name will be shown here <br />
                <div className="my-1">
                    {products.map((product)=>{
                        return <div key={product.id} className="font-bold">{product.name}</div>
                    })}
                </div>
                <Link className="btn" href='/admin/products/add'>Add Product</Link>
            </>
        )
}