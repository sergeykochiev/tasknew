"use client"

import { sourceCodePro } from "@/common/fonts";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface LinkPageHeadingProps extends LinkProps {
    children: string
    stretch?: boolean
    name: string
    paths?: string[]
}

const LinkPageHeading: FC<LinkPageHeadingProps> = ({ children, stretch = false, href, name, paths = [], ...props }) => {
    return (
        <Link {...props} href={href} className={`${sourceCodePro.className} transition-all text-[48px] [&:not(:has(input:checked))]:hover:underline text-main-dark font-bold has-[input:checked]:text-tile-gray has-[input:checked]:cursor-default ${stretch && "w-full"}`}>
            {children}
            <input type="radio" name={name} checked={[href.toString(), ...paths].includes(usePathname())} readOnly className="hidden absolute"/>
        </Link>
    )
}

export default LinkPageHeading