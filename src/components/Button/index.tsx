"use client"

import { ComponentColors } from "@/common/types/colors";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FC } from "react";

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

    return (
        <button className={`button text-[14px] h-[41px] px-[24px] grid place-items-center rounded-[16px] ${color} text-bg-dark z-10 ${className!}`} onClick={() => redirectTo && router.push(redirectTo)} {...props}>{children}</button>
    )
}

export default DefButton