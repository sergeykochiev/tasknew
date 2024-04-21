import { FC, HTMLAttributes } from "react";
import BlankTile from "../../Tile/Blank";
import { uid } from "uid";

interface BackgroundGridProps extends HTMLAttributes<HTMLElement> {
    light?: boolean
}

const BackgroundGridSmall: FC<BackgroundGridProps> = ({
    light = false,
    className
}) => {
    const numberOfTiles = 4 * 6
    const mappedArray = Array()
    for (let i = 0; i < numberOfTiles; i++) {
        mappedArray[i] = Math.random() > 0.333
    }
    const renderBlankTiles = mappedArray.map(e => <BlankTile light={light} defaultChecked={e} key={uid()}></BlankTile>)
    return (
        <div className={`mt-[-140px] flex justify-center relative z-0 overflow-hidden ${className}`}>
            <div className={`grid auto-rows-[128px] gap-[16px] grid-cols-6x128 z-10`}>
                {renderBlankTiles}
            </div>
            <div className={`absolute w-[984px] mt-[-50%] aspect-square bg-gradient-to-b ${light ? "from-tile-gray to-white " : "from-[#3e3e3e] to-bg-dark"} z-0`}></div>
        </div>
    )
}

export default BackgroundGridSmall