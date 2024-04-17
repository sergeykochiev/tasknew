"use client"

import TempDB from "@/common/helpers/local-db"
import { CURRENT_USER, TASKS } from "@/common/temp-data"
import TaskStruct from "@/common/types/data-sctructures/task"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            setCurrentTask(tasks.find(e => e.slug == params.slug))
        }
        fetchChannels()
    }, [])
    const [currentTask, setCurrentTask] = useState<TaskStruct>()
    const currentUser = CURRENT_USER
    if (!currentTask) return <NoDataPlaceholder/>
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