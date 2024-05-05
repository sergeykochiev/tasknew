"use client"

import { apply2pxHover } from "@/common/helpers";
import { ComponentColors } from "@/common/types/colors";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FC, useEffect, useId } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ComponentColors,
    square?: boolean
}

const Button: FC<ButtonProps> = ({
    color = "gray",
    children,
    onClick,
    className,
    square = false,
    ...props
}) => {
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    // return (
    //     <button id={id} className={`whitespace-nowrap group relative overflow-hidden m-0 transition-all button text-[14px] h-[41px] px-[24px] flex items-center justify-center rounded-[16px] ${color} text-bg-dark z-10 ${className!}`} onClick={onClick} {...props}>
    //         {children}
    //     </button>
    // )
    return (
        <div id={id}className={`whitespace-nowrap group relative m-0 text-[14px] h-[41px] text-bg-dark z-10 ${className!}`}>
            <div className={`transition-all absolute w-full h-full ${color} rounded-[16px] z-10`}></div>
            <button className={`${square ? "aspect-square" : "px-[24px]"} relative ${color} grid place-items-center button rounded-[16px] w-full h-full z-20`} onClick={onClick} {...props}>{children}</button>
        </div>
    )
}

export default Button