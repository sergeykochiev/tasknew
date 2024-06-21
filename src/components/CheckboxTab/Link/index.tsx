"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface TabProps {
    href: string
    name: string
    children: ReactNode
}

export default function Tab(p: TabProps) {
    const pathname = usePathname()
    return <label className="group w-full">
        <Link href={p.href} className="cursor-pointer group-has-[input:checked]:cursor-default transition-all outline-def outline-tt-darkgray h-def grid place-items-center whitespace-nowrap group-has-[input:checked]:bg-tt-darkgray flex-grow group-has-[input:checked]:text-tt-white font-normal group-has-[input:checked]:font-medium">{p.children}</Link>
        <input className="hidden absolute" type="radio" readOnly checked={pathname == p.href} name={p.name}/>
    </label>
}