import { FC } from "react";

import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react"

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    valueState?: [string, Dispatch<SetStateAction<string>>]
    small?: boolean
}

const TextArea: FC<TextAreaProps> = ({
    small = false,
    valueState = [undefined, undefined],
    ...props
}) => {
    const [value, setValue] = valueState
    return (
        <textarea {...props} className={
            `resize-none
            outline-offset-[-2px]
            search-field
            rounded-[16px]
            text-[14px]
            required:after:content-[' *']
            p-[16px]
            ${small ? "min-h-[41px]" : "min-h-[128px]"}
            w-full
            grid
            place-items-center
            outline
            transition-all
            outline-main-dark focus:outline-tile-gray focus:bg-main-dark text-tile-gray hover:bg-main-dark bg-bg-dark
            outline-[2px]`
        } value={value!} onChange={e => setValue && setValue(e.target.value)}></textarea>
    )
}

export default TextArea