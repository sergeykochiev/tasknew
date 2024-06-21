"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface NestedTabProps {
    href: string
    label: string
    caption?: string
    name: string
    children?: ReactNode
}

export default function NestedTab(p: NestedTabProps) {
    const pathname = usePathname()
    return <div className="flex flex-col w-full items-start group/outer select-none">
        <div className="peer flex items-center w-full bg-tt-white border-b border-solid last:border-none has-[input[type='radio']:checked]:cursor-default cursor-pointer has-[input[type='radio']:checked]:text-tt-white border-tt-gray has-[input[type='radio']:checked]:font-semibold has-[input[type='radio']:checked]:bg-tt-blue">
            <label className="w-full">
                <Link href={p.href} className="flex gap-def items-center justify-between px-[24px] h-[67px] font-medium">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">{p.label}</div>
                    <div className="text-tt-darkgray text-caption group-has-[input:checked]/inner:text-tt-lightgray">{p.caption}</div>
                </Link>
                <input type="radio" className="hidden" name={p.name} checked={pathname == p.href} readOnly/>
            </label>
            {p.children && <label className="p-[16px] cursor-pointer group/arrow">
                <SlArrowDown className="group-has-[input:checked]/arrow:hidden block" size={20}/>
                <SlArrowUp className="group-has-[input:checked]/arrow:block hidden" size={20}/>
                <input type="checkbox" className="hidden"/>
            </label>}
        </div>
        <div className="w-full peer-has-[input[type='checkbox']:checked]:flex pl-[20px] flex-col hidden">
            {p.children}
        </div>
    </div>
}