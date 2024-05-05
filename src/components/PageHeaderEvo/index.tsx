import { sourceCodePro } from "@/common/fonts"
import { FC, HTMLAttributes } from "react"
import Bar from "../Bar"
import PageHeading from "../PageHeading"

interface PageHeaderEvoProps extends HTMLAttributes<HTMLElement> {
    children?: Array<React.ReactElement> | React.ReactElement
    light?: boolean
    heading?: string
    centered?: boolean
}

const PageHeaderEvo: FC<PageHeaderEvoProps> = ({
    children,
    centered = false,
    light = false,
    heading
}) => {
    return (
        <div className="flex pt-[64px] pb-[32px] z-10 flex-col gap-[16px]">
            {heading && <PageHeading centered={centered}>{heading}</PageHeading>}
            {children && <Bar light={light} evenly={centered}>{children}</Bar>}
        </div>
    )
}

export default PageHeaderEvo