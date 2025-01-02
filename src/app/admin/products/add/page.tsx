'use client';

import ErrorList from "@/components/ErrorList";
import Spinner from "@/components/Spinner";
import useColor from "@/hooks/color";
import useImageUpload from "@/hooks/imageUpload";
import useSize from "@/hooks/size";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { HexColorPicker } from "react-colorful";
import { BiBold, BiTrash } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { CiBoxList } from "react-icons/ci";
import { FaListOl } from 'react-icons/fa'
import { FiUploadCloud } from "react-icons/fi";

export default function AddProductPage() {
    const colors = useColor()
    const sizes = useSize()
    const images = useImageUpload()

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            // BulletList.configure({
            //     HTMLAttributes: {
            //         class: "list-disc ml-2",
            //     },
            // }),
            // OrderedList.configure({
            //     HTMLAttributes: {
            //         class: "list-decimal ml-2",
            //     },
            // }),
        ],
        content: '',
    })

    return (
        <>
            <h3 className="text-[50px] m-1">
                Add Product
            </h3>
            <div className="flex flex-wrap m-1 p-2">
                <div className="w-full md:w-1/2 flex flex-wrap flex-col p-1">
                    <label className="text-lg font-bold" htmlFor="name">Product Name</label>
                    <input type="text" placeholder="Name" name="" id="" className="form-input my-1" />
                    <div className="my-1"></div>
                    <label className="text-lg font-bold" htmlFor="description">Description</label>
                    {editor ? <>
                        <div className="editor-controls flex justify-around rounded border transition-all">
                            <div onClick={() => editor?.chain().focus().toggleBold().run()} className={`flex-grow text-center cursor-pointer hover:bg-slate-100 p-1 text-md transition-all ${editor?.isActive('bold') ? 'active' : ''}`}>
                                <BiBold className="inline" />
                            </div>
                            <div onClick={() => editor?.chain().focus().toggleBulletList().run()} className={`flex-grow text-center cursor-pointer hover:bg-slate-100 p-1 text-md transition-all ${editor?.isActive('bulletList') ? 'active' : ''}`}>
                                <CiBoxList className="inline" />
                            </div>
                            <div onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={`flex-grow text-center cursor-pointer hover:bg-slate-100 p-1 text-md transition-all ${editor?.isActive('orderedlist') ? 'active' : ''}`}>
                                <FaListOl className="inline" />
                            </div>
                        </div>
                        <EditorContent editor={editor} className="my-1" />
                    </> : <div className="flex justify-center p-3 items-center">
                        <Spinner />
                    </div>}
                    <label className="text-lg font-bold" htmlFor="price">Price</label>
                    <input className="form-input my-1" type="number" name="" placeholder="Price" id="" min={1} />
                    <label className="text-lg font-bold" htmlFor="discounted_price">Discounted Price</label>
                    <input className="form-input my-1" type="number" name="" placeholder="Discounted Price" id="" min={1} />
                    <div className="my-2"></div>
                    <h3 className="text-lg font-bold">Add Image</h3>
                    <div className="p-2 flex flex-wrap">
                        {images.images.map((image) => <div key={image.id} className="my-1 rounded border relative transition-all">
                            {/* {image.id} */}
                            <img src={image.preview} alt="" />
                            <div onClick={() => images.removeImage({ id: image.id })} className="absolute top-2 right-2 p-1 rounded opacity-30 hover:opacity-100 bg-red-500 text-white cursor-pointer">
                                <CgClose />
                            </div>
                        </div>)}
                    </div>
                    <input onChange={(e) => {
                        if (e.target.files) {
                            const files = Array.from(e.target.files)
                            images.addImage({files:files})
                        }
                    }} type="file" name="images" accept="image/*" className="hidden" id="images" multiple />
                    <label htmlFor="images" className="text-lg font-bold p-3 cursor-pointer h-[50px] flex justify-center items-center flex-wrap border-2 border-dashed">
                        <FiUploadCloud className="text-2xl text-blue-500" />
                        <div className="mx-1"></div>
                        Upload Image
                    </label>
                </div>
                <div className="w-full md:w-1/2 p-1">
                    <div>
                        <h3 className="font-bold">Add Color(Optional)</h3>
                        {colors.colors && <div className="my-1 flex flex-wrap transition-all">
                            {colors.colors.map((c) => <div key={c.hex} className="m-2 text-center transition-all">
                                <div className={`rounded-full h-10 w-10 inline-block`} style={{ backgroundColor: c.hex ?? '' }}></div>
                                <h6 className="text-md flex items-center">
                                    {c.name}
                                    <div className="mx-1"></div>
                                    <CgClose className="cursor-pointer hover:bg-slate-100 rounded" onClick={() => colors.removeColor({ hex: c.hex })} />
                                </h6>
                            </div>)}
                        </div>}
                        {/* <div className=""> */}
                        <div className="flex flex-wrap flex-row">
                            <input value={colors.name ?? ''} onChange={(e) => colors.setName(e.target.value)} type="text" name="" id="" className="flex-grow m-1 form-input" placeholder="Color Name" />
                            <input value={colors.stocks ?? ''} onChange={(e) => colors.setStocks(parseInt(e.target.value))} type="number" min={1} name="" id="" className="flex-grow m-1 form-input" placeholder="Stocks" />
                        </div>
                        <div className="flex flex-wrap items-start">
                            <HexColorPicker color={colors.hex ?? ''} onChange={colors.setHex} className="flex-grow h-[50px] m-1" />
                            <input value={colors.hex ?? ''} onChange={(e) => colors.setHex(e.target.value)} type="text" min={1} name="" id="" className="m-1 form-input flex-grow" placeholder="Hex Code" /> <br />
                        </div>
                        {/* </div> */}
                        {colors.errors.errors && <div className="my-1">
                            <ErrorList errorInstance={colors.errors} />
                        </div>}
                        <button onClick={() => colors.addColor()} className="btn my-1">Add Color</button>
                    </div>
                    <br />
                    <div>
                        <h3 className="font-bold">Add Sizes(Optional)</h3>
                        {sizes.sizes && <div className="my-1">
                            {sizes.sizes.map((size) => {
                                return <div key={size.name} className="flex items-center rounded bg-slate-100 p-2 py-1 my-1">
                                    <div className="w-1/3">{size.name}</div>
                                    <div className="w-1/3 text-center">{size.stocks}</div>
                                    <div className="ms-auto">
                                        <BiTrash className="text-xl text-red-500 hover:text-red-600 cursor-pointer" onClick={() => sizes.removeSize({ name: size.name })} />
                                    </div>
                                </div>
                            })}
                        </div>}
                        <div className="flex flex-wrap flex-row">
                            <input value={sizes.name ?? ''} onChange={(e) => sizes.setName(e.target.value)} type="text" name="" id="" className="flex-grow m-1 form-input" placeholder="Color Name" />
                            <input value={sizes.stocks ?? ''} onChange={(e) => sizes.setStocks(parseInt(e.target.value))} type="number" min={1} name="" id="" className="flex-grow m-1 form-input" placeholder="Stocks" />
                        </div>
                        {sizes.errors.errors && <div className="my-1">
                            <ErrorList errorInstance={sizes.errors} />
                        </div>}
                        <button onClick={() => sizes.addSize()} className="btn my-1">Add Size</button>
                    </div>
                </div>
            </div>
        </>
    )
}