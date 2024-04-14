import { FC, HTMLAttributes } from "react";
import BlankTile from "../../Tile/Blank";
import { uid } from "uid";

interface BackgroundGridProps extends HTMLAttributes<HTMLElement> {
    light?: boolean
}

const BackgroundGridBig: FC<BackgroundGridProps> = ({
    light = false,
    className
}) => {
    const numberOfTiles = 12 * 6
    const mappedArray = Array()
    for (let i = 0; i < numberOfTiles; i++) {
        mappedArray[i] = Math.random() > 0.35
    }
    const renderBlankTiles = mappedArray.map(e => <BlankTile light={light} visible={e} key={uid()}></BlankTile>)
    return (
        <div className={`mt-[140px] flex justify-center absolute z-0 overflow-hidden ${className}`}>
            <div className={`grid auto-rows-[128px] gap-[16px] grid-cols-12x128 z-10`}>
                {renderBlankTiles}
            </div>
            <div className={`absolute w-[2350px] mt-[-1175px] aspect-square bg-gradient-radial ${light ? "from-tile-gray via-white to-white " : "from-[#3e3e3e] via-bg-dark to-bg-dark"} z-0`}></div>
        </div>
    )
}

export default BackgroundGridBig