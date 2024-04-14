import { FC, HTMLAttributes } from "react"

interface PageHeaderEvoProps extends HTMLAttributes<HTMLElement> {
    children: Array<React.ReactElement> | React.ReactElement
    light?: boolean
}

const PageHeaderEvo: FC<PageHeaderEvoProps> = ({
    children,
    className,
    light = false
}) => {
    return (
        <div className={`flex pt-[64px] pb-[32px] ${className} z-10`}>
            <div className={`${light ? "bg-tile-gray" : "bg-main-dark"} w-[848px] flex justify-between gap-[8px] rounded-[18px] p-[2px]`}>
                {children}
            </div>
        </div>
    )
}

export default PageHeaderEvo