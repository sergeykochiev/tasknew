import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
}

const InputField: FC<InputFieldProps> = (p) => {
    return (
        <input className={`${!p.readOnly && "focus:bg-dark focus:text-white focus:rounded-lg hover:rounded-lg"} color-default transition-all outline-default rounded-default text-sm px-4 h-[42px] w-full grid place-items-center bg-white group-hover:bg-dark group-hover:text-white group-hover:outline-white`} type="text" {...p}></input>
    )
}

export default InputField