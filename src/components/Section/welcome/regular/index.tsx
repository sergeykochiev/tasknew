import { sourceCodePro } from "@/common/fonts";
import { ComponentColors } from "@/common/types/colors";
import { FC } from "react";

const StartPageSection: FC<{
    heading: string
    children: [string, React.ReactElement]
    color: ComponentColors
    align: "left" | "right" | "center"
}> = ({
    heading,
    children,
    color,
    align
}) => {
    const desc = children[0]
    const buttons = children.slice(1,)

    return ( 
        <div className={`w-full flex justify-center ${color}`}>
            <div className={`w-[848px] h-[384px] flex flex-col justify-center gap-[32px] ${"section-"+align}`}>
                <div className={`${sourceCodePro.className} font-bold text-[24px]`}>
                    {heading}
                </div>
                <div className="w-[66%] text-[16px]">
                    {desc}
                </div>
                <div className="flex gap-[16px]">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default StartPageSection