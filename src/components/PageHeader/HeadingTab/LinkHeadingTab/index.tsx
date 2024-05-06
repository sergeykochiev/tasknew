"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface LinkHeadingTabProps extends LinkProps {
    children: React.ReactNode
    name: string,
    stretch?: boolean
    paths?: string[]
    square?: boolean
}

const LinkHeadingTab: FC<LinkHeadingTabProps> = ({ children, href, name, stretch = false, paths = [], square, ...props }) => {
    return (
        <Link href={href} className={`${square ? "aspect-square" : "px-[32px]"} whitespace-nowrap heading-tab [&:not(:has(input:checked))]:hover:outline-tile-gray [&:not(:has(input:checked))]:hover:outline-offset-0 [&:not(:has(input:checked))]:cursor-pointer transition-all outline-transparent outline outline-[2px] outline-offset-[-2px] grid place-items-center h-[41px] text-[16px] rounded-[16px] text-tile-gray bg-transparent has-[input:checked]:bg-tile-gray has-[input:checked]:text-bg-dark font-bold ${stretch && "w-full"}`} {...props}>
            {children}
            <input type="radio" name={name && name} checked={[href, ...paths].includes(usePathname())} readOnly className="hidden absolute"/>
        </Link>
    )
}

export default LinkHeadingTab