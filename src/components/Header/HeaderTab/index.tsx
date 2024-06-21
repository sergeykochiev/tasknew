"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderTabProps {
    href: string
    label: string
    representedPaths?: string[]
}

export default function HeaderTab(p: HeaderTabProps) {
    const pathname = usePathname()
    const isCurrentRoute = pathname == p.href
    return <label className="group">
        <Link href={p.href} className="transition-all flex cursor-pointer outline-def outline-transparent group-hover:outline-tt-gray py-[8px] px-[16px] text-tt-black text-button group-hover:font-medium group-has-[input:checked]:font-semibold group-has-[input:checked]:text-tt-white group-has-[input:checked]:bg-tt-blue">{p.label}</Link>
        <input type="radio" className="hidden" readOnly checked={isCurrentRoute}/>
    </label>
}