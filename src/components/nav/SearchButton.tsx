'use client'

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export default function SearchButton() {
    let [fixedSearchBarDisplay, setFixedSearchBarDisplay] = useState<string>('hidden')
    return (
        <>
            <div className="hidden md:flex" hidden></div>
            <div className={`fixedSearchBar w-[100vw] fixed ${fixedSearchBarDisplay} flex-row top-0 left-0 h-[50px] bg-white overflow-hidden`}>
                <form className="flex h-[100%] justify-center items-center flex-row mx-auto relative px-5">
                    <input className="border-2 text-lg flex-grow border-base-theme h-[40px] mx-0 focus:outline-none focus:border-base-theme" type="text" name="" id="" required />
                    <button className="bg-base-theme text-white h-[40px] px-2 rounded-tr-sm rounded-br-sm">
                        Search
                    </button>
                    <div className="">
                        <MdClose onClick={()=>setFixedSearchBarDisplay('hidden')}/>
                    </div>
                </form>
            </div>
            <div onClick={()=>setFixedSearchBarDisplay(fixedSearchBarDisplay == 'hidden' ? 'flex' : 'hidden')} className="mx-2">
                <BiSearch className="text-2xl" />
            </div>
        </>
    )
}