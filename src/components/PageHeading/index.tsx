import { sourceCodePro } from "@/common/fonts";
import { FC } from "react";

interface PageHeadingProps {
    children: string
}

const PageHeading: FC<PageHeadingProps> = ({ children }) => {
    return (
        <div className={`${sourceCodePro.className} w-full text-[48px] font-bold text-tile-gray`}>{children}</div>
    )
}

export default PageHeading