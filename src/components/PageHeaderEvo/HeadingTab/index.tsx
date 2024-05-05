import { FC, HTMLAttributes } from "react";

interface HeadingTabProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    light?: boolean
}

const HeadingTab: FC<HeadingTabProps> = ({ children, light = false, className, ...props }) => {
    return (
        <div className={`whitespace-nowrap heading-tab grid place-items-center px-[32px] h-[41px] text-[16px] rounded-[16px] bg-tile-gray text-bg-dark font-bold ${className}`}>
            {children}
        </div>
    )
}

export default HeadingTab