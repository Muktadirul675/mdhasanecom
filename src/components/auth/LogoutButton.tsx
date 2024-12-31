'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton(){
    return(
        <button onClick={()=> signOut({
            callbackUrl: '/'
        })} className="rounded px-2 py-1.5 text-white bg-red-500">
            Logout
        </button>
    )
}