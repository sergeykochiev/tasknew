"use client"

import { InputHTMLAttributes } from "react";
import { IoIosSearch } from "react-icons/io";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    visibleName?: string
    errorMessage?: string
}

export default function InputField(p: InputFieldProps) {
    return <label className="transition-all gap-small flex-grow flex items-center justify-between cursor-text outline-def h-def px-[16px] bg-tt-white outline-tt-gray group has-[input:focus]:outline-tt-darkgray has-[input:focus]:bg-white has-[input:focus]:shadow has-[input:user-invalid]:outline-tt-red hover:outline-tt-darkgray hover:bg-white">
        <div className="flex gap-small flex-grow">
            <IoIosSearch className="transition-all group-has-[input:focus]:hidden group-hover:text-tt-darkgray text-tt-gray" size={20}/>
            <div className="flex flex-col flex-grow">
                <div className="group-has-[input:focus]:block hidden font-medium text-tiny text-tt-darkgray">{p.visibleName || p.placeholder}</div>
                <input {...p} type="text" className="whitespace-nowrap flex placeholder:text-tt-gray bg-inherit my-[-2px] text-tt-darkgray focus:text-tt-black text-body outline-none border-none"/>
            </div>
        </div>
        <div className="cursor-pointer group-has-[input:user-invalid]:grid hidden bg-tt-red place-items-center relative text-button font-semibold rounded-full h-[20px] aspect-square text-tt-white hover:after:scale-100 after:scale-0 after:transition-all after:absolute after:top-[24px] after:py-[4px] after:px-[8px] after:rounded-full after:content-['Неверныйформат'] after:bg-tt-darkgray after:font-medium after:text-tt-white after:text-caption">!</div>
    </label>
}