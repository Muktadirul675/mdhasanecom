import { Provider } from "@/components/ui/provider"

export default function Providers({children}:{children: React.ReactNode}){
    return(
        <>
            <Provider>
                {children}
            </Provider>
        </>
    )
}
