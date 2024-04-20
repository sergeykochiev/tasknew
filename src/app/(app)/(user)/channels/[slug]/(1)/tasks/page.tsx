"use client"

import { CHANNELS, TASKS } from "@/common/temp-data"
import TaskStruct from "@/common/types/data-sctructures/task"
import ContentContainer from "@/components/ContentContainer"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Pagination from "@/components/Pagination"
import TaskTile from "@/components/Tile/Task"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }

    const router = useRouter()
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())

    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) return <NoDataPlaceholder/>
    const tasks = TASKS.filter(e => e.channelId == channel.id).slice((page - 1) * 8, (page - 1) * 8 + 8)

    return ( <>
        <ContentContainer searchable={false} data={tasks} Component={TaskTile} onClick={onClick}/>
        {tasks.length > 0 && <Pagination page={page} lastPage={tasks.length < 8} onPageChange={(page) => setPage(page)}/>}
    </>
    )
}