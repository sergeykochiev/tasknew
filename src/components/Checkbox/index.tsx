"use client"

import { IoMdCheckmark } from "react-icons/io";
import { FC, InputHTMLAttributes, useState } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = (props) => {
    const [checked, setChecked] = useState<boolean>()
    return (
        <label className="outline transition-all cursor-pointer rounded-default grid place-items-center outline-default aspect-square h-[20px] bg-white has-[input:checked]:bg-black has-[input:checked]:text-white">
            {checked && <IoMdCheckmark size={14}/>}
            <input className="hidden absolute" type="checkbox" checked={checked} readOnly onChange={() => setChecked(!checked)} {...props}/>
        </label>
    )
}

export default Checkbox