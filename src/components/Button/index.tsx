"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FC, useEffect, useId } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ComponentColors,
}

const Button: FC<ButtonProps> = ({
    color = "gray",
    children,
    onClick,
    className,
    ...props
}) => {
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <button id={id} className={`whitespace-nowrap group relative overflow-hidden m-0 transition-all button text-[14px] h-[41px] px-[24px] flex items-center justify-center rounded-[16px] ${color} text-bg-dark z-10 ${className!}`} onClick={() => onClick && onClick} {...props}>
            {children}
        </button>
    )
}

export default Button