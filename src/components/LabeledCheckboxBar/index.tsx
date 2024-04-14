"use client"

import { Dispatch, FC, InputHTMLAttributes, SetStateAction, useState } from "react";

interface LabeledCheckboxBarProps extends InputHTMLAttributes<HTMLInputElement> {
    // checkedState?: boolean
    // setChecked?: Dispatch<SetStateAction<boolean>>
    checkboxLabels?: [string, string]
    label: string
}

const LabeledCheckboxBar: FC<LabeledCheckboxBarProps> = ({
    checkboxLabels = ["Да", "Нет"], label, ...props
}) => {
    const [checkedState, setChecked] = useState<boolean>(false)
    return (
        <div className="w-full flex items-center justify-between p-[2px] bg-main-dark rounded-[14px]">
            <div className="px-[16px] text-tile-gray">
                {label}
            </div>
            <label className="button text-[14px] h-[41px] px-[24px] grid place-items-center rounded-[16px] bg-tile-gray text-bg-dark select-none">
                {checkedState ? checkboxLabels[0] : checkboxLabels[1]}
                <input className="hidden absolute" type="checkbox" checked={checkedState} onClick={() => setChecked(!checkedState!)} {...props}></input>
            </label>
        </div>
    )
}

export default LabeledCheckboxBar