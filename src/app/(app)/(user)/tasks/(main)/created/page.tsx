"use client"

import { CURRENT_USER } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import ContentContainer from "@/components/ContentContainer";
import { useEffect, useState } from "react";
import TempDB from "@/common/helpers/local-db";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";

export default function Page() {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            const currentUser = CURRENT_USER
            const createdTasks = tasks.filter(e => e.creatorId == currentUser.id)
            if (createdTasks.length > 0) setTasks(createdTasks)
        }
        fetchChannels()
    }, [])
    const [tasks, setTasks] = useState<Array<TaskStruct>>()
    const [search, setSearch] = useState<string>("")
    if (!tasks) return <NoDataPlaceholder/>
    const data = tasks.filter(e => e.title.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile}/>
    )
}