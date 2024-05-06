"use client"

import { CURRENT_USER, QUESTIONS, TASKS } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string }}) {
    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return <NoDataPlaceholder/>

    return (<div className="flex justify-center relative">
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{task.avatar}</Tile>
            <Tile size="3x2" name="Описание">{task.detailed_description}</Tile>
            <Tile name="Создатель"><Link href={`/profile/${CURRENT_USER.id}`}>{CURRENT_USER.nickname}</Link></Tile>
            <Tile big name="Количество вопросов">{QUESTIONS.length}</Tile>
        </div>
    </div>)
}