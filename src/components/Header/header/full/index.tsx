"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import HeaderTab from "../../bones/Tab"
import { sourceCodePro } from "@/common/fonts"
import Link from "next/link"

const Header: FC = () => {
    // const light = PATH_WITH_DARK_THEME.includes(usePathname())
    const light = false

    return <div className={`${sourceCodePro.className} h-[44px] w-full bg-main-blue text-main-dark flex justify-center`}>
        <div className="flex justify-between items-center w-[858px]">
            <div className="flex gap-0 h-full">
                <HeaderTab light={light} href="/tasks/solved" representedPaths={["/tasks/solved", "/tasks/created", "/tasks/favorites"]}>Задания</HeaderTab>
                <HeaderTab light={light} href="/channels/subscribed" representedPaths={["/channels/subscribed", "/channels/created"]}>Каналы</HeaderTab>
            </div>
            <Link className="font-bold text-[24px] tracking-[0.25em] cursor-pointer select-none" href="/home">TASK</Link>
            <div className="flex gap-0 h-full">
                <HeaderTab light={light} href="/discover/tasks" representedPaths={["/discover/tasks", "/discover/channels", "/discover/users"]}>Найти</HeaderTab>
                <HeaderTab light={light} href="/profile" representedPaths={["/profile", "/profile/subscribtions"]}>Профиль</HeaderTab>
            </div>
        </div>
    </div>
}

export default Header