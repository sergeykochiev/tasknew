"use client"

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { IoIosSearch } from "react-icons/io";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string
}

export default function TextareaField(p: TextareaFieldProps) {
    return <label className="transition-all flex gap-regular items-top py-[16px] cursor-text outline-def h-[128px] px-[16px] bg-tt-white outline-tt-gray group has-[textarea:focus]:outline-tt-darkgray has-[textarea:focus]:bg-white has-[textarea:focus]:shadow has-[textarea:user-invalid]:outline-tt-red">
        <IoIosSearch color="#BABABA" className="group-has-[textarea:focus]:hidden" size={20}/>
        <textarea {...p} className="resize-none flex placeholder:text-tt-gray bg-inherit my-[-2px] text-tt-darkgray focus:text-tt-black text-body outline-none border-none"/>
        <div className="cursor-pointer group-has-[textarea:user-invalid]:grid hidden bg-tt-red place-items-center relative text-button font-semibold rounded-full h-[20px] aspect-square text-tt-white hover:after:scale-100 after:scale-0 after:transition-all after:absolute after:top-[24px] after:py-[4px] after:px-[8px] after:rounded-full after:content-['Неверныйформат'] after:bg-tt-darkgray after:font-medium after:text-tt-white after:text-caption">!</div>
    </label>
}