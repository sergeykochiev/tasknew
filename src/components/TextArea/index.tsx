import { FC } from "react";

import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react"

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string
    setValue?: Dispatch<SetStateAction<string>>
    light: boolean
    small?: boolean
}

const TextArea: FC<TextAreaProps> = ({
    small = false,
    value,
    setValue,
    light = false,
    ...props
}) => {
    return (
        <textarea {...props} className={
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
            bg-transparent
            outline
            ${light ?
                "outline-tile-gray focus:outline-main-dark text-main-dark"
            :
                "outline-main-dark focus:outline-tile-gray focus:bg-main-dark text-tile-gray"
            }
            outline-[2px]`
        } value={value!} onChange={e => setValue && setValue(e.target.value)}></textarea>
    )
}

export default TextArea