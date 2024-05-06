"use client"

import React, { useState, FC, InputHTMLAttributes, useId } from "react";

interface BlankTileProps extends InputHTMLAttributes<HTMLInputElement> {
    span?: "1x1" | "2x2" | "3x1" | "2x1",
    defaultChecked?: boolean
} 

const BlankTile: FC<BlankTileProps> = ({
    span = "1x1",
    defaultChecked = true
}) => {
    const [checked, setChecked] = useState<boolean>(defaultChecked)
    const id = useId()
    
    return <label onMouseEnter={() => setChecked(!checked)} id={id} className={`h-[128px] aspect-square bg-bg-dark has-[input:checked]:bg-transparent blanktile flex flex-col gap-[8px] ${"tile-"+span} z-30 outline-[9px] outline outline-bg-dark transition-all`}>
        <input type="checkbox" className="hidden absolute" checked={checked} readOnly/>
    </label>
}

export default BlankTile