import { auth } from "@/auth"
import LogoutButton from "@/components/auth/LogoutButton";
import Image from "next/image"
import { redirect } from "next/navigation";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default async () => {
    const session = await auth();
    if (session) {
        return (
            <div className="flex justify-center p-3">
                <div className="w-full md:w-1/4 bg-slate-50 p-3 flex flex-col">
                    <div className="w-full flex justify-center">
                        <Image src={session.user?.image as string} alt={session.user?.name as string} width={100} height={100} className="rounded-full" />
                    </div>
                    <div className="flex items-center my-2">
                        <BiUser className="text-xl"/>
                        <div className="mx-1"></div>
                        {session.user?.name}
                    </div>
                    <div className="flex items-center my-2">
                        <MdEmail className="text-xl"/>
                        <div className="mx-1"></div>
                        {session.user?.email}
                    </div>
                    <LogoutButton/>
                </div>
            </div>
        )
    } else {
        redirect('/login')
    }
}