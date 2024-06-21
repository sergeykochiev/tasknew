import Link from "next/link";
import { ReactNode } from "react";

interface ListTabProps {
    href: string
    visibleName: string
    name: string
    children?: ReactNode
}

export default function ListTab(p: ListTabProps) {
    return <label className="peer w-full px-[24px] py-[20px] font-medium border-b border-solid bg-tt-white has-[input:checked]:cursor-default cursor-pointer has-[input:checked]:text-tt-white group-last:border-none border-tt-gray has-[input:checked]:font-semibold has-[input:checked]:bg-tt-blue">
            <div>{p.visibleName}</div>
            <input type="radio" className="hidden" name={p.name}/>
        </label>
}