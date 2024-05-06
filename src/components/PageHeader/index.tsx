import { FC, HTMLAttributes } from "react"
import Bar from "../Bar"
import HeadingTabGroup from "./HeadingTabGroup"
import ButtonGroup from "../ButtonGroup"

interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
    headings?: React.ReactElement[]
    tabs?: React.ReactElement[]
    buttons?: React.ReactElement[]
    children?: never
}

const PageHeader: FC<PageHeaderProps> = (p) => {
    return (
        <div className={`flex pt-[64px] mt-[44px] z-10 flex-col gap-[16px] ${!p.buttons && "items-center"}`}>
            {p.headings && <HeadingTabGroup>{p.headings}</HeadingTabGroup>}
            {p.tabs && <Bar evenly={p.buttons == undefined}>
                {p.buttons ? <>
                    <ButtonGroup>
                        {p.tabs}
                    </ButtonGroup>
                    <ButtonGroup>
                        {p.buttons}
                    </ButtonGroup>
                </> : p.tabs}
            </Bar>}
        </div>
    )
}

export default PageHeader