import Link from "next/link"
import { BiHome } from "react-icons/bi"
import { FaBoxesStacked, FaUserGroup } from "react-icons/fa6"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start">
            <div className="sticky top-[55px] h-dvh bg-red-500 flex flex-col text-white p-1 md:p-3">
                <Link href='/' className="mb-2 flex items-center p-3 rounded hover:bg-red-600 transition-all">
                    <BiHome />
                    <div className="hidden mx-2 md:block">
                        Home
                    </div>
                </Link>
                <Link href='/' className="mb-2 flex items-center p-3 rounded hover:bg-red-600 transition-all">
                    <FaUserGroup />
                    <div className="hidden mx-2 md:block">
                        Users
                    </div>
                </Link>
                <Link href='/admin/products' className="mb-2 flex items-center p-3 rounded hover:bg-red-600 transition-all">
                    <FaBoxesStacked />
                    <div className="hidden mx-2 md:block">
                        Products
                    </div>
                </Link>
            </div>
            <div className="flex-grow flex justify-center">
                <div className="w-full md:w-1/2 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}