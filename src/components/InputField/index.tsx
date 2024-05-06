import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    light?: boolean
}

const InputField: FC<InputFieldProps> = ({
    light = false,
    ...props
}) => {
    return (
        <input {...props} className={`transition-all required:after:content-[" asdihj"] hover:bg-main-dark outline-offset-[-2px] search-field rounded-[16px] text-[14px] p-[16px] h-[41px] w-full grid place-items-center bg-transparent outline ${light ? "outline-tile-gray focus:outline-main-dark text-main-dark" : "outline-main-dark focus:outline-tile-gray focus:bg-main-dark text-tile-gray"} outline-[2px]`} type="text"></input>
    )
}

export default InputField