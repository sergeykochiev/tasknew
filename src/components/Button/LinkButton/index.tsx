"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import Link, { LinkProps } from "next/link";
import { FC, useEffect, useId } from "react";

interface LinkButtonProps extends LinkProps {
    color?: ComponentColors,
    className?: string,
    children: React.ReactNode
}

const LinkButton: FC<LinkButtonProps> = ({
    color = "gray",
    children,
    className,
    ...props
}) => {
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <Link {...props} id={id} className={`whitespace-nowrap group relative overflow-hidden m-0 transition-all button text-[14px] h-[41px] px-[24px] flex items-center justify-center rounded-[16px] ${color} text-bg-dark z-10 ${className!}`}>{children}</Link>
    )
}

export default LinkButton