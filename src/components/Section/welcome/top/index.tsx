import { sourceCodePro } from "@/common/fonts";
import { FC } from "react";

const TopPageSection: FC<{
    heading: string
    children: [string, React.ReactElement, React.ReactElement]
}> = ({
    heading,
    children
}) => {
    const desc = children[0]
    const buttons = children.slice(1,)

    return ( 
        <div className="w-full min-h-smscreen flex flex-col p-[536px] gap-[32px] justify-center items-center">
            <div className={`${sourceCodePro.className} font-bold text-[48px] text-center`}>
                {heading}
            </div>
            <div className="text-[16px] text-center">
                {desc}
            </div>
            <div className="flex gap-[16px]">
                {buttons}
            </div>
        </div>
    )
}

export default TopPageSection