"use client"

import TempDB from "@/common/helpers/local-db"
import { CHANNELS, CURRENT_USER, QUESTIONS, TASKS } from "@/common/temp-data"
import ChannelStruct from "@/common/types/data-sctructures/channel"
import QuestionStruct from "@/common/types/data-sctructures/question"
import TaskStruct from "@/common/types/data-sctructures/task"
import DefButton from "@/components/Button"
import ContentContainer from "@/components/ContentContainer"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import QuestionTIle from "@/components/Tile/Question"
import TaskTile from "@/components/Tile/Task"
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
    if (!tasks) return <NoDataPlaceholder/>
    return (
        <ContentContainer searchable={false} data={tasks} Component={TaskTile}/> 
    )
}