import { CgProductHunt } from "react-icons/cg"

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="w-fit relative">
                <div className="sidebar h-[100vh] w-full sticky top-0 left-0 bg-base-theme-dark p-5 text-white">
                    <div className="flex">
                        <CgProductHunt /> <p className="hidden md:products"></p>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    )
}