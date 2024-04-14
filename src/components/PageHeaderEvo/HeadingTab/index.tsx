"use client"

import { usePathname, useRouter } from "next/navigation";
import { FC, InputHTMLAttributes } from "react";

interface HeadingTabProps extends InputHTMLAttributes<HTMLInputElement> {
    children: string
    redirectTo?: string,
    light?: boolean
}

const HeadingTab: FC<HeadingTabProps> = ({ children, redirectTo, light = false, className, ...props }) => {
    const router = useRouter()
    const currentPath = usePathname()
    const isCurrent = redirectTo ? currentPath == redirectTo : true

    return (
        <label className={`[&:not(:has(input:checked))]:hover:outline-tile-gray transition-all outline-transparent outline outline-[2px] grid place-items-center px-[32px] h-[41px] text-[16px] rounded-[16px] text-tile-gray bg-transparent has-[input:checked]:bg-tile-gray has-[input:checked]:text-bg-dark font-bold ${className}`}>
            {children}
            <input {...props} type="radio" name="page-header" checked={isCurrent} onChange={() => redirectTo && router.push(redirectTo)} className="hidden absolute"/>
        </label>
    )
}

export default HeadingTab