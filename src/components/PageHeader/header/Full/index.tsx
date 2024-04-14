"use client"

import { FC } from "react"
import MenuFieldTab from "../../../InputField"
import MenuButtonTab from "../../../Button"
import MenuToggleTab from "../../../Tab"
import { usePathname, useRouter } from "next/navigation"
import MenuDummyTab from "../../bones/Tab/dummy"
import PATH_WITH_DARK_THEME from "@/common/const/light-paths"
import DefTab from "../../../Tab"

const FullPageHeader: FC<{
    children: string | React.ReactNode
    tab1: { name: string, redirect: string }
    tab2: { name: string, redirect: string }
}> = ({
    children,
    tab1,
    tab2
}) => {
    const router = useRouter()
    const light = PATH_WITH_DARK_THEME.includes(usePathname())

    return <div className={`flex items-center justify-center pt-[64px] p-[16px] text-[20px] ${light ? "text-bg-dark bg-white" : "text-white bg-bg-dark"} w-full`}>
        <div className="w-[848px] flex justify-end h-[41px]">
            <div className="h-full w-full grid place-items-center z-10 font-bold">{children}</div>
            <div className="self-end absolute flex gap-[16px] w-[272px]">
                <DefTab light={light} router={router} redirectTo={tab1.redirect}>{tab1.name}</DefTab>
                <DefTab light={light} router={router} redirectTo={tab2.redirect}>{tab2.name}</DefTab>
            </div>
        </div>
    </div>
}

export default FullPageHeader