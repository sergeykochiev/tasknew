"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string }}) {
    const currentTask = TASKS.find(e => e.slug == params.slug)
    const currentUser = CURRENT_USER
    if (!currentTask) {
        return <NoDataPlaceholder/>
    }
    return (<>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{currentTask.avatar}</Tile>
            <Tile size="3x2" name="Описание">{currentTask.detailed_description}</Tile>
            {/* {currentTask.visibile ? <Tile kind="bigtext" name="Публичный">ДА</Tile> : <Tile kind="bigtext" name="Цена">{currentTask.price}</Tile>} */}
            <Tile name="Создатель"><Link href={`/profile/${currentUser.id}`}>{currentUser.nickname}</Link></Tile>
            <Tile kind="bigtext" name="Количество вопросов">{currentTask.questionCount}</Tile>
        </div>
    </>)
}