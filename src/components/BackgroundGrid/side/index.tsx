"use client"

import { FC, HTMLAttributes } from "react";
import BlankTile from "../../Tile/Blank";
import { uid } from "uid";

interface BackgroundGridSideProps extends HTMLAttributes<HTMLElement> {
    light?: boolean
    chance: number
    toRight?: boolean
}

const BackgroundGridSide: FC<BackgroundGridSideProps> = ({
    light = false,
    className,
    chance,
    toRight = true
}) => {
    const numberOfTiles = 3 * 4
    const mappedArray = Array()
    for (let i = 0; i < numberOfTiles; i++) {
        mappedArray[i] = Math.random() < chance * 0.9
    }
    const renderBlankTiles = mappedArray.map(e => <BlankTile light={light} defaultChecked={e} key={uid()}></BlankTile>)
    return (
        <div className={`flex justify-center relative z-0 overflow-hidden ${className}`}>
            <div className={`grid auto-rows-[128px] gap-[16px] grid-cols-3x128 z-10`}>
                {renderBlankTiles}
            </div>
            <div className={`absolute w-[416px] h-full ${toRight ? "bg-gradient-to-r" : "bg-gradient-to-l"} ${light ? "from-tile-gray via-white to-white " : "from-blanktile to-bg-dark"} z-0`}></div>
        </div>
    )
}

export default BackgroundGridSide