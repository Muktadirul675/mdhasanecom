import CartShow from "./CartShow";
import CategoryList from "./CategoryList";
import Hotline from "./Hotline";
import Notice from "./Notice";
import SearchButton from "./SearchButton";
// import SideBar from "./Sidebar";

export default function Navbar() {
    return (
        <>
            <Notice />
            <div className="w-[100vw] px-2 border-b-2 border-base-theme sm:shadow md:shadow-none">
                <div className="w-full md:w-1/2 mx-auto py-2 flex flex-row items-center relative">
                    {/* <div className="block mx-3 md:hidden">
                        <SideBar/>
                    </div> */}
                    <a href="/">
                        <img src="https://ajkerhaatbazar.com/uploads/info/logo.png?c=1" className="h-[50px]" alt="" />
                    </a>
                    <form className="hidden md:flex h-[100%] justify-center flex-grow items-center flex-row ms-auto relative px-5">
                        <input className="border-2 text-lg w-1/2 border-base-theme h-[40px] mx-0 focus:outline-none focus:border-base-theme" type="text" name="" id="" required />
                        <button className="bg-base-theme text-white h-[40px] px-2 rounded-tr-sm rounded-br-sm">
                            Search
                        </button>
                    </form>
                    <div className="hidden md:block ms-auto">
                        <Hotline />
                    </div>
                    <div className="block md:hidden ms-auto">
                        <SearchButton />
                    </div>
                    <div className="">
                        <CartShow />
                    </div>
                </div>
            </div>
            <CategoryList />
        </>
    )
}