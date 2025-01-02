'use client'

import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
    function openSidebar() {
        document.querySelector("#sidebar")?.classList.add("translate-x-[300px]")
        document.querySelector("#overlay")?.classList.remove("hidden")
    }
    function closeSidebar() {
        document.querySelector("#sidebar")?.classList.remove("translate-x-[300px]")
        document.querySelector("#overlay")?.classList.add("hidden")
    }
    return (
        <>
            <div>
                <GiHamburgerMenu className="text-2xl" onClick={openSidebar} />
            </div>
            <div id="overlay" onClick={closeSidebar} className="fixed inset-0 bg-black opacity-50 z-9 transition-all duration-700 hidden"></div>
            <div id="sidebar" className="fixed top-0 left-[-300px] p-5 w-[300px] h-[100vh] bg-slate-100 transition-all z-10">
                <CgClose className="text-2xl" onClick={closeSidebar} />
            </div>
        </>
    )
}