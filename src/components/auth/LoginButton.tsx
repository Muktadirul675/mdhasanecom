import { auth } from "@/auth";
import Link from "next/link";
import Avatar from "../Avatar";

export default async function LoginButton(){
    const session = await auth()

    if(session){
        return(
            <Link href='/profile'>
                <Avatar name={session.user?.name as string} imgUrl={session.user?.image as string}/>
            </Link>
        )
    }else{
        return(
            <Link className="hover:text-base-theme" href="/login">Login</Link>
        )
    }
}