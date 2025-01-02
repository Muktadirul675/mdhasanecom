'use client'

import { useState } from "react"
import useError from "./error"

interface Color {
    name: string,
    hex: string,
    stocks: number
}

const PROP_ERROR = 'Please provide name, stocks and select the color'
const DUPLICATE_ERROR = 'Color already added'
const INVALID_HEX = "Invalid Hex Code"

export default function useColor() {
    const [hex, setHex] = useState<string | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [stocks, setStocks] = useState<number | null>(null)
    const [colors, setColors] = useState<Color[]>([]) 
    const errors = useError()

    function addColor() {
        if (hex && name && stocks) {
            for (const i of colors) {
                if (i.hex === hex) {
                    errors.addError({error:DUPLICATE_ERROR})
                    return
                }
            }
            if(!(hex.startsWith("#"))){
                errors.addError({error:INVALID_HEX})
                return
            }
            setColors((prev)=>[...prev, {hex:hex,name:name,stocks:stocks}])
            setHex(null)
            setName(null)
            setStocks(null)
        } else {
            errors.addError({error:PROP_ERROR})
        }
    }

    function removeColor({hex}:{hex:string}){
        if(colors.length){
            setColors((prev)=>prev.filter((c)=>c.hex !== hex))
        }
    }

    return { name, hex, stocks, colors, addColor, removeColor, errors, setName, setHex, setStocks }
}