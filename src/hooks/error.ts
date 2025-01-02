'use client'

import { Error } from "@/types"
import { useState } from "react"

export default function useError() {
    const [errors, setErrors] = useState<Error[]>([])
    const [errorLastId, setErrorLastId] = useState<number>(0)

    function addError({ error }: { error: string }) {
        setErrors((prev) => {
            const newError = { error: error, id: errorLastId }
            setErrorLastId((prev) => prev + 1)
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