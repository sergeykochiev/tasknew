"use client"

import React, { FC, useState } from "react";

const BlankTile: FC<{
    size?: "1x1" | "2x2" | "3x1" | "2x1",
    visible?: boolean
    light: boolean
}> = ({
    size = "1x1",
    visible = true,
    light
}) => {
    const [v, setV] = useState<boolean>(visible)

    return <div className={`flex flex-col gap-[8px] ${"tile-"+size} ${light ? "outline-white" : 'outline-bg-dark'} ${v ? "bg-transparent" : `${light ? "bg-white" : "bg-bg-dark"}`} z-30 outline-[9px] outline transition-all`} onMouseEnter={() => setV(!v)} />
}

export default BlankTile