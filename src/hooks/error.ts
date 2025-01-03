'use client'

import { Error } from "@/types"
import { useState } from "react"

interface DecayingError extends Error{
    time: number
}

let lastErrorId = 1;

export default function useError() {
    const [errors, setErrors] = useState<DecayingError[]>([])

    function addError({ error }: { error: string }) {
        setErrors((prev) => {
            const newError = { error: error, id: lastErrorId, time: 5}
            lastErrorId += 1
            return [...prev, newError]
        })
    }

    function removeError({ id }: { id:number }) {
        if (errors.length) {
            setErrors((prev) => prev.filter((e) => e.id !== id))
        }
    }

    return {addError, removeError, errors}
}