import { Error } from "@/types";
import { BiError } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function ErrorList({ errorInstance }:{ errorInstance : {
    addError: ({ error }: {
        error: string;
    }) => void;
    removeError: ({ id }: {
        id: number;
    }) => void;
    errors: Error[];
}}) {
    return <>
        {errorInstance.errors.map((error) =>
            <div key={error.id} className="alert-error flex items-center transition-all my-1">
                <BiError className="text-lg text-red-500" /> <div className="mx-1"></div>
                {error.error}
                <CgClose className="text-lg ms-auto cursor-pointer" onClick={() => errorInstance.removeError({ id: error.id })} />
            </div>
        )
        }
    </>
}