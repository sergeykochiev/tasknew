import { sourceCodePro } from "@/common/fonts";
import { FC } from "react";

interface PageHeadingProps {
    children: string
    centered?: boolean
}

const PageHeading: FC<PageHeadingProps> = ({ children, centered = false }) => {
    return (
        <div className={`${sourceCodePro.className} w-full text-[48px] font-bold text-tile-gray ${centered ? "text-center" : "text-left"}`}>{children}</div>
    )
}

export default PageHeading