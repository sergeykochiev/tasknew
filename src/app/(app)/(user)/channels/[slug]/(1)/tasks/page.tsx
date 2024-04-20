"use client"

import { TempDB } from "@/common/helpers";
import ChannelStruct from "@/common/types/data-sctructures/channel"
import TaskStruct from "@/common/types/data-sctructures/task"
import ContentContainer from "@/components/ContentContainer"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import TaskTile from "@/components/Tile/Task"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            const currentChannel = channels.find(e => e.slug == params.slug)
            if (!currentChannel) return null
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            setTasks(tasks.filter(e => e.channelId == currentChannel.id))
        }
        fetchChannels()
    }, [])
    const [tasks, setTasks] = useState<Array<TaskStruct>>()
    const router = useRouter()
    if (!tasks) return <NoDataPlaceholder/>
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }
    return (
        <ContentContainer searchable={false} data={tasks} Component={TaskTile} onClick={onClick}/> 
    )
}