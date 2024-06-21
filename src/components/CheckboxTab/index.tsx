"use client"

import { IoMdCheckmark } from "react-icons/io";
import { FC, InputHTMLAttributes, useState } from "react";

interface CheckboxTabProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function CheckboxTab(p: CheckboxTabProps) {
    return <label className="cursor-pointer has-[input:checked]:cursor-default transition-all outline-def outline-tt-darkgray h-def grid place-items-center whitespace-nowrap has-[input:checked]:bg-tt-darkgray flex-grow has-[input:checked]:text-tt-white font-normal has-[input:checked]:font-medium">
        {p.label}
        <input className="hidden absolute" type="radio" {...p}/>
    </label>
}