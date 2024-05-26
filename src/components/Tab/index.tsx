"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface TabProps extends LinkProps {
    children: React.ReactNode
    name: string
    stretch?: boolean
    square?: boolean
    overlap?: boolean
}

const Tab: FC<TabProps> = ({ children, href, name, stretch = false, overlap = false, square, ...props }) => {
    const path = usePathname()
    return (
        <Link href={href} className={`${square ? "aspect-square" : "px-8"} whitespace-nowrap font-normal [&:not(:has(input:checked))]:hover:rounded-lg rounded-md [&:not(:has(input:checked))]:cursor-pointer color-default transition-all outline-default has-[input:checked]:bg-dark has-[input:checked]:text-white grid place-items-center h-[42px] text-base has-[input:checked]:rounded-lg has-[input:checked]:font-bold ${stretch && "flex-1"}`} {...props}>
            {children}
            <input type="radio" name={name && name} checked={overlap ? path == href : path == href || path.includes(href.toString())} readOnly className="hidden absolute"/>
        </Link>
    )
}

export default Tab