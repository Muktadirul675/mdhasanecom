import { BsBag } from "react-icons/bs";

export default function CartShow(){
    return(
        <div className="font-bold flex flex-row items-center ms-2 md:ms-5">
            <BsBag className="text-2xl"/>
            <div className="mx-1"></div>
            <b>
                0
            </b>
        </div>
    )
}