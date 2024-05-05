"use client"

import { FC } from "react"

const SolveVariant: FC<{ children: string }> = ({ children }) => {
    return (
        <label className="cursor-pointer rounded-[16px] col-span-3 items-center row-span-1 transition-all flex p-[16px] h-[56px] w-full justify-start text-[20px] bg-tile-gray text-bg-dark font-bold has-[input:checked]:bg-main-blue">
            {children}
            <input className="absolute hidden" type="checkbox"/>
        </label>
    )
}

export default SolveVariant