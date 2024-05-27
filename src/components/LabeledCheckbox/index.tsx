import React, { InputHTMLAttributes } from 'react'
import Checkbox from '../Checkbox'

interface LabeledCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const LabeledCheckbox = ({ label, ...p }: LabeledCheckboxProps) => {
    return (
        <label className='flex justify-between items-center cursor-pointer h-[42px]'>
            {label}
            <Checkbox {...p}/>
        </label>
    )
}

export default LabeledCheckbox