import { FC, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <label className="outline transition-all rounded-[4px] outline-main-dark aspect-square h-[20px] outline-[2px] outline-offset-[-2px] bg-transparent has-[input:checked]:bg-main-dark">
            <input className="hidden absolute" type="checkbox" {...props}/>
        </label>
    )
}

export default Checkbox