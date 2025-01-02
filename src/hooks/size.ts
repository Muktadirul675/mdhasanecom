'use client'

import { useState } from "react"
import useError from "./error"

interface Size{
    name: string,
    stocks: number
}

const PROP_ERROR = "Please provide size name and stocks"
const DUPLICATE_ERROR = "Given size name is already added"

export default function useSize(){
    const [name, setName] = useState<string | null>(null)
    const [stocks, setStocks] = useState<number | null>(null)
    const [sizes, setSizes] = useState<Size[]>([])
    const errors = useError()

    function addSize(){
        if(name && stocks){
            for(const i of sizes){
                if(i.name === name){
                    errors.addError({error:DUPLICATE_ERROR})
                    return
                }
            }
            setSizes((prev)=>[...prev,{name:name, stocks:stocks}])
            setName(null)
            setStocks(null)
        }else{
            errors.addError({error:PROP_ERROR})
        }
    }

    function removeSize({name}:{name:string}){
        if(sizes.length){
            setSizes((prev)=>prev.filter((s)=>s.name !== name))
        }
    }

    return {sizes, name, stocks, errors, setName, setStocks, removeSize, addSize}
}