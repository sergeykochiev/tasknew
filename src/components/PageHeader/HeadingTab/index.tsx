import { FC, HTMLAttributes } from "react";

interface HeadingTabProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const HeadingTab: FC<HeadingTabProps> = ({ children }) => {
    return (
        <div className={`whitespace-nowrap heading-tab grid place-items-center px-[32px] h-[41px] text-[16px] rounded-[16px] bg-tile-gray text-bg-dark font-bold`}>
            {children}
        </div>
    )
}

export default HeadingTab