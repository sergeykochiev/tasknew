import { FC, HTMLAttributes } from "react";
import BlankTile from "../../Tile/Blank";
import { uid } from "uid";

interface BackgroundGridProps extends HTMLAttributes<HTMLElement> {
}

const BackgroundGridBig: FC<BackgroundGridProps> = ({
    className
}) => {
    const numberOfTiles = 12 * 6
    const mappedArray = Array()
    for (let i = 0; i < numberOfTiles; i++) {
        mappedArray[i] = Math.random() > 0.35
    }
    const renderBlankTiles = mappedArray.map(e => <BlankTile defaultChecked={e} key={uid()}></BlankTile>)
    return (
        <div className={`flex justify-center absolute z-0 overflow-hidden ${className}`}>
            <div className={`grid auto-rows-[128px] gap-[16px] grid-cols-12x128 z-10`}>
                {renderBlankTiles}
            </div>
            <div className={`absolute w-[2350px] mt-[-1175px] aspect-square bg-gradient-radial from-blanktile via-bg-dark to-bg-dark z-0`}></div>
        </div>
    )
}

export default BackgroundGridBig