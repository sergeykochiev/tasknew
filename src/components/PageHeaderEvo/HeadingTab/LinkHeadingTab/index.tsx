"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface LinkHeadingTabProps extends LinkProps {
    children: React.ReactNode
    redirectTo?: string,
    light?: boolean,
    name: string,
    representedPaths?: string[]
    stretch?: boolean
    determineIfActive?: (path: string) => boolean
}

const LinkHeadingTab: FC<LinkHeadingTabProps> = ({ children, href, light = false, name, representedPaths, stretch, determineIfActive, ...props }) => {
    const currentPath = usePathname()
    const isCurrent = !determineIfActive ? (representedPaths ? representedPaths.includes(currentPath) : currentPath == href) : determineIfActive(currentPath)

    return (
        <Link href={href} className={`whitespace-nowrap heading-tab [&:not(:has(input:checked))]:hover:outline-tile-gray [&:not(:has(input:checked))]:hover:outline-offset-0 [&:not(:has(input:checked))]:cursor-pointer transition-all outline-transparent outline outline-[2px] outline-offset-[-2px] grid place-items-center px-[32px] h-[41px] text-[16px] rounded-[16px] text-tile-gray bg-transparent has-[input:checked]:bg-tile-gray has-[input:checked]:text-bg-dark font-bold ${stretch ? "w-full" : ""}`} {...props}>
            {children}
            <input type="radio" name={name && name} checked={isCurrent} readOnly className="hidden absolute"/>
        </Link>
    )
}

export default LinkHeadingTab