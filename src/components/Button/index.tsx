"use client"

import apply2pxHover from "@/common/helpers/2px-hover";
import { ComponentColors } from "@/common/types/colors";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FC, useEffect, useId } from "react";

interface DefButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ComponentColors,
    redirectTo?: string,
    className?: string
}

const DefButton: FC<DefButtonProps> = ({
    color = "gray",
    children,
    redirectTo,
    className,
    ...props
}) => {
    const router = useRouter()
    const buttonId = useId()
    useEffect(() => {
        apply2pxHover(buttonId )
    }, [])
    return (
        <button id={buttonId} className={`whitespace-nowrap group relative overflow-hidden m-0 transition-all button text-[14px] h-[41px] px-[24px] flex items-center justify-center rounded-[16px] ${color} text-bg-dark z-10 ${className!}`} onClick={() => redirectTo && router.push(redirectTo)} {...props}>
            {children}
        </button>
    )
}

export default DefButton