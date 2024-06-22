"use client"

import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    stretch?: boolean
    href?: string
}

export default function Button({ onClick, className, ...p }: ButtonProps) {
    const router = useRouter()
    return <button {...p} onClick={(e) => p.href ? router.push(p.href) : onClick && onClick(e)} className={`${p.stretch && "w-full z-20 flex-grow"} bg-tt-white whitespace-nowrap transition-all h-def font-medium outline-def outline-tt-darkgray px-[32px] text-button text-tt-black hover:outline-transparent hover:bg-tt-blue hover:font-semibold hover:text-tt-white hover:shadow ${className}`}/>
}