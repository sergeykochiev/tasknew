"use client"

import { CURRENT_USER } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import ContentContainer from "@/components/ContentContainer";
import { useEffect, useState } from "react";
import { TempDB } from "@/common/helpers";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import ChannelStruct from "@/common/types/data-sctructures/channel";

export default function Page({ params }: { params: { slug: string }}) {
    const db = new TempDB()
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    const [currentChannel, setCurrent] = useState<ChannelStruct>()
    useEffect(() => {
        const fetchChannels = async () => {
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            const currentUser = CURRENT_USER
            const currentChannel = ((await db.get("channels")) as ChannelStruct[]).find(e => e.slug == params.slug)
            if (!currentChannel) return <NoDataPlaceholder placeholder="Канала не существует"/>
            setCurrent(currentChannel)
            const createdTasks = tasks.filter(e => e.creatorId == currentUser.id && !e.channelId).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (createdTasks.length > 0) setTasks(createdTasks)
        }
        fetchChannels()
    }, [page])
    const [tasks, setTasks] = useState<Array<TaskStruct>>()
    const [search, setSearch] = useState<string>("")
    const router = useRouter()
    if (!tasks) return <NoDataPlaceholder/>
    const data = tasks.filter(e => e.title.includes(search))
    const onClick = async (data: TaskStruct) => {
        const tasks = (await db.get("tasks")) as Array<TaskStruct>
        const currentTaskIdx = tasks.findIndex(e => e.id == data.id)
        if (currentTaskIdx < 0) {alert("Задания не существует"); return}
        if (!currentChannel) {alert("Канала не существует"); return}
        tasks[currentTaskIdx].channelId = currentChannel.id
        await db.put("tasks", tasks)
        router.push(`/channels/${params.slug}/tasks`)
    }
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} onClick={onClick}/>
        <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>
    </>
    )
}