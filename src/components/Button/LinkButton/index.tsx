"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import Link, { LinkProps } from "next/link";
import { FC, useEffect, useId } from "react";

interface LinkButtonProps extends LinkProps {
    color?: ComponentColors,
    children: React.ReactNode,
    square?: boolean
    stretched?: boolean
}

const LinkButton: FC<LinkButtonProps> = ({
    color = "gray",
    children,
    square = false,
    stretched = false,
    ...props
}) => {
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <Link {...props} id={id} className={`whitespace-nowrap overflow-hidden m-0 transition-all text-[14px] ${stretched && "w-full"} h-[41px] ${square ? "aspect-square" : "px-[24px]"} flex items-center justify-center rounded-[16px] ${color} z-10`}>{children}</Link>
    )
}

export default LinkButton