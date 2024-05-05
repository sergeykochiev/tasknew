import { FC } from "react";

import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react"

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    valueState?: [string, Dispatch<SetStateAction<string>>]
    light?: boolean
    small?: boolean
}

const TextArea: FC<TextAreaProps> = ({
    small = false,
    valueState = [undefined, undefined],
    required,
    placeholder,
    light,
    ...props
}) => {
    const [value, setValue] = valueState
    return (
        <textarea {...props} required={required} placeholder={!required ? placeholder : placeholder + " *"} className={
            `resize-none
            outline-offset-[-2px]
            search-field
            rounded-[16px]
            text-[14px]
            p-[16px]
            ${small ? "min-h-[41px]" : "min-h-[128px]"}
            w-full
            grid
            place-items-center
            outline
            transition-all
            ${light ?
                "outline-tile-gray focus:outline-main-blue focus:bg-main-blue text-bg-dark bg-tile-gray placeholder:text-main-dark"
            :
                "outline-main-dark focus:outline-tile-gray focus:bg-main-dark text-tile-gray hover:bg-main-dark bg-bg-dark"
            }
            outline-[2px]`
        } value={value!} onChange={e => setValue && setValue(e.target.value)}></textarea>
    )
}

export default TextArea