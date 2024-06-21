import { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function SelectField(p: SelectFieldProps) {
    return <select {...p} className="px-[12px] h-def outline-def outline-tt-darkgray focus:shadow focus:bg-white focus:outline-tt-black hover:outline-tt-black hover:bg-white bg-tt-white"/>
}