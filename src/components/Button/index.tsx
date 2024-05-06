"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import { ButtonHTMLAttributes, FC, useEffect, useId } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ComponentColors,
    square?: boolean
    stretched?: boolean
    inactive?: boolean
}

const Button: FC<ButtonProps> = ({
    color = "gray",
    children,
    onClick,
    square = false,
    stretched = false,
    inactive = false,
    ...props
}) => {
    const id = useId()
    !inactive && useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <button id={id} className={`${inactive && "opacity-[0.2] cursor-default"} ${square ? "aspect-square" : "px-[24px]"} ${stretched && "w-full"} relative ${color} grid place-items-center button rounded-[16px] h-[41px] z-20`} onClick={onClick} {...props}>{children}</button>
    )
}

export default Button