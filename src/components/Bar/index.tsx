import { FC } from "react";

interface BarProps {
    light?: boolean
    children: React.ReactNode
    evenly?: boolean
}

const Bar: FC<BarProps> = ({ children, light = false, evenly = false }) => {
    return (
        <div className={`${light ? "bg-tile-gray" : "bg-main-dark"} w-[848px] flex ${evenly ? "justify-around" : "justify-between"} gap-[8px] relative items-center rounded-[18px] p-[2px]`}>
            {children}
        </div>
    )
}

export default Bar