'use client'

import { Key, useState } from "react"
import { BiCloudUpload, BiTrash } from "react-icons/bi"

interface Size {
    name: string,
    stock: number
}

interface ImagePreview {
    file: File,
    url: string
}

export default function ProductAddPage() {
    const [sizes, setSizes] = useState<Size[]>([])
    const [inputSizeName, setInputSizeName] = useState<string>('')
    const [inputSizeStock, setInputSizeStock] = useState<number>(1)
    const [images, setImages] = useState<ImagePreview[]>([])

    function addSize() {
        for (const i of sizes) {
            if (i.name === inputSizeName) {
                setInputSizeName('')
                setInputSizeStock(1)
                return
            }
        }
        setSizes((prev) => [...prev, { name: inputSizeName, stock: inputSizeStock }])
        setInputSizeName('')
        setInputSizeStock(1)
    }

    function removeSize({ size }: { size: Size }) {
        setSizes(sizes.filter((s) => s.name !== size.name))
    }

    return <div className="">
        <h3 className="text-lg font-bold p-3">Add Product</h3>
        <form action="" className="flex flex-wrap">
            <button type="submit" hidden></button>
            <div className="flex flex-col p-3 w-full md:w-1/2">
                <label className="my-1 font-bold" htmlFor="name">Name</label>
                <input type="text" className="form-input" name="name" id="" required />
                <label className="my-1 font-bold" htmlFor="description">Description</label>
                <textarea name="description" id="" className="form-input" rows={5} required></textarea>
                <div className="flex flex-wrap">
                    <div className="flex p-1 w-full md:w-1/3 flex-col">
                        <label className="my-1 font-bold" htmlFor="stock">Stock</label>
                        <input type="number" className="form-input" name="stock" id="" required />
                    </div>
                    <div className="flex p-1 w-full md:w-1/3 flex-col">
                        <label className="my-1 font-bold" htmlFor="price">Price</label>
                        <input type="number" className="form-input" name="price" id="" required />
                    </div>
                    <div className="flex p-1 w-full md:w-1/3 flex-col">
                        <label className="my-1 font-bold" htmlFor="discounted_price">Discounted Price</label>
                        <input type="number" className="form-input" name="discounted_price" id="" required />
                    </div>
                </div>
            </div>
            <div className="p-3 w-full md:w-1/2">
                <div className="text-lg font-bold">Sizes (Optional)</div>
                <div>
                    {sizes.map((size) => <div key={size.name as Key} className="rounded bg-slate-100 flex fkex-row flex-wrap items-center p-2 my-2">
                        <div className="w-1/3">
                            {size.name}
                        </div>
                        <div className="w-1/3 text-center">
                            {size.stock}
                        </div>
                        <div className="ms-auto">
                            <BiTrash className="text-2xl cursor-pointer hover:text-red-500" onClick={() => removeSize({ size: size })} />
                        </div>
                    </div>)}
                </div>
                <div className="flex flex-col md:flex-row flex-wrap max-w-[100%]">
                    <input value={inputSizeName} onChange={(e) => setInputSizeName(e.target.value)} type="text" placeholder="Name" className="form-input flex-grow my-1" />
                    <div className="mx-1"></div>
                    <input value={inputSizeStock} type="number" onChange={(e) => setInputSizeStock(parseInt(e.target.value))} placeholder="Stock" className="form-input flex-grow my-1" /> <br />
                    <button type="button" onClick={addSize} className="btn">Add</button>
                </div>
                <br />
                <h3 className="text-lg font-bold">Add Image</h3>
                <div className="my-1">
                    {images.map((img) => <img key={img.url} src={img.url} alt="Image" className="mb-1 rounded w-full aspect-auto" />)}
                </div>
                <input onChange={(e) => {
                    if (e.target.files) {
                        const files = Array.from(e.target.files)
                        setImages(files.map((file) => {
                            return {
                                file: file, url: URL.createObjectURL(file)
                            }
                        }))
                    }
                }} type="file" name="image" id="image" accept="image/*" className="hidden" />
                <label htmlFor="image" className="border-2 border-dashed rounded w-full p-3 flex h-[50px] justify-center items-center"> <BiCloudUpload /> Upload Images</label>
            </div>
        </form>
    </div>
}