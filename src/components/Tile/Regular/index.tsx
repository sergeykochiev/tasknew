"use client"

import React, { FC, HTMLAttributes } from "react";
import { TileAlign, TileSize } from "../common/types";
import { ComponentColors } from "@/common/types/colors";

interface TileProps extends HTMLAttributes<HTMLElement> {
    name?: string
    children?: React.ReactNode
    size?: TileSize
    color?: ComponentColors
    align?: TileAlign
    big?: boolean
}

const Tile: FC<TileProps> = ({
    name,
    children,
    size = "1x1",
    color = "gray",
    align = "top",
    big = false
}) => {
    return ( 
        <div className={`p-[16px] rounded-[16px] regular-tile overflow-scroll z-20 h-full w-full ${"tile-"+size} bg-tile-gray text-bg-dark ${"tile-"+align} ${big && "text-[40px] font-black text-main-blue"} flex gap-[8px]`}>
            <div className="block text-[12px] text-main-dark font-bold">
                {name!}  
            </div>
            {children}
        </div>
    )
}

export default Tile