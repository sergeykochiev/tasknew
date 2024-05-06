import { FC } from "react";

interface BarProps {
    children: React.ReactNode
    evenly?: boolean
}

const Bar: FC<BarProps> = ({ children, evenly = false }) => {
    return (
        <div className={`bg-main-dark w-[848px] flex ${evenly ? "justify-around" : "justify-between"} gap-[8px] relative items-center rounded-[18px] p-[2px]`}>
            {children}
        </div>
    )
}

export default Bar