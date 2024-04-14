import { sourceCodePro } from "@/common/fonts";
import { ComponentColors } from "@/common/types/colors";
import { FC } from "react";

const HomePageSection: FC<{
    heading: string
    children: [string, React.ReactElement, React.ReactElement?]
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
            <div className={`w-[848px] h-[272px] flex flex-col justify-center gap-[32px] ${"section-"+align}`}>
                <div className="flex flex-col gap-[32px]">
                    <div className={`${sourceCodePro.className} font-bold text-[20px]`}>
                        {heading}
                    </div>
                    <div className="text-[16px]">
                        {desc}
                    </div>
                </div>
                <div className="flex gap-[16px]">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default HomePageSection