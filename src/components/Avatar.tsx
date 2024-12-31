import Image from "next/image";

export default function Avatar({ name, imgUrl }: { name: string, imgUrl: string }) {
    if (imgUrl) {
        return (
            <>
                <Image src={imgUrl} alt={name} height={35} width={35} className="rounded-full hidden md:inline-block" />
                <Image src={imgUrl} alt={name} height={30} width={30} className="rounded-full inline-block md:hidden" />
            </>
        )
    }
}