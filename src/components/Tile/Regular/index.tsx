"use client"

import React, { FC } from "react";
import { TileAlign, TileKind, TileSize } from "../common/types";
import { ComponentColors } from "@/common/types/colors";

const Tile: FC<{
    name?: string
    children?: React.ReactNode
    size?: TileSize
    color?: ComponentColors
    align?: TileAlign
    kind?: TileKind
    onClick?: () => void
}> = ({
    name,
    children,
    size = "1x1",
    color = "gray",
    align = "top",
    kind,
    onClick = () => {}
}) => {
    return ( <div className={`tile z-20 ${"tile-"+size} bg-bg-dark`}>
        <div onClick={onClick} className={`overflow-scroll tile-content z-20 h-full w-full ${"tile-"+size} ${color} ${"tile-"+align} ${kind == "bigtext" ? "text-[40px] font-black tile-bigtext" : ""} flex gap-[8px] group-has-[div.tile]:grid group-has-[div.tile]:grid-columns-subgrid group-has-[div.tile]:grid-rows-subgrid group`}>
            <div className={`block ${kind == "button" ? "text-[14px] text-black tile-button" : "text-[12px] text-main-dark"} font-bold`}>
                {name!}  
            </div>
            {children}
        </div>
    </div> )
}

export default Tile