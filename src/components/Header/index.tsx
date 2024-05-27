"use client"

import { FC } from "react"
import { sourceCodePro } from "@/common/fonts"
import Link from "next/link"

const Header: FC = () => {
    return <header className={`${sourceCodePro.className} h-[50px] w-full bg-accent text-dark flex justify-center`}>
        <div className="flex justify-between items-center w-[950px]">
            <div className="flex gap-10 tracking-[0.1em] text-sm">
                <Link href="/tasks">Задания</Link>
                <Link href="/channels">Каналы</Link>
            </div>
            <Link className="font-bold text-[24px] tracking-[0.25em] cursor-pointer select-none" href="/">TASK TYCOON</Link>
            <div className="flex gap-10 tracking-[0.1em] text-sm">
                <Link href="/discover/tasks">Найти</Link>
                <Link href="/profile">Профиль</Link>
            </div>
        </div>
    </header>
}

export default Header