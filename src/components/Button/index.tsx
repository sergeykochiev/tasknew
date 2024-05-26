"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import { ButtonHTMLAttributes, FC, useEffect, useId } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    square?: boolean
    stretch?: boolean
    inactive?: boolean
}

const Button: FC<ButtonProps> = ({
    square = false,
    stretch = false,
    inactive = false,
    ...props
}) => {
    return (
        <button className={`transition-all ${!inactive && "hover-default"} ${square ? "aspect-square" : "px-6"} ${stretch && "w-full"} whitespace-nowrap text-sm relative grid place-items-center h-[42px] all-default`} {...props}/>
    )
}

export default Button