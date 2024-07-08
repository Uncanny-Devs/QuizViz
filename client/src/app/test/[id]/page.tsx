'use client'

import { useParams } from "next/navigation"

export default function Test() {
    const { id } = useParams();
    return (
        <>
            <h1 className="text-4xl font-bold bg-blue-400">{id}</h1>
        </>
    )
}