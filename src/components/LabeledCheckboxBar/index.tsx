"use client"

import { FC, InputHTMLAttributes } from "react";

interface LabeledCheckboxBarProps extends InputHTMLAttributes<HTMLInputElement> {
    checkboxLabels?: [string, string]
    label: string
}

const LabeledCheckboxBar: FC<LabeledCheckboxBarProps> = ({
    checkboxLabels = ["Да", "Нет"],
    label,
    ...props
}) => {
    return (
        <div className="w-full flex items-center justify-between p-[2px] bg-main-dark rounded-[14px]">
            <div className="px-[16px] text-tile-gray">
                {label}
            </div>
            <label className="group button text-[14px] h-[41px] px-[24px] grid place-items-center rounded-[16px] bg-tile-gray text-bg-dark select-none">
                <div className="hidden group-has-[input:checked]:block">{checkboxLabels[0]}</div>
                <div className="block group-has-[input:checked]:hidden">{checkboxLabels[1]}</div>
                <input className="hidden absolute" type="checkbox" {...props}></input>
            </label>
        </div>
    )
}

export default LabeledCheckboxBar