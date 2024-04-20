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

export default function Page() {
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            const currentUser = CURRENT_USER
            const createdTasks = tasks.filter(e => e.creatorId == currentUser.id).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (createdTasks.length > 0) setTasks(createdTasks)
        }
        fetchChannels()
    }, [page])
    const [tasks, setTasks] = useState<Array<TaskStruct>>()
    const [search, setSearch] = useState<string>("")
    if (!tasks) return <NoDataPlaceholder/>
    const data = tasks.filter(e => e.title.includes(search))
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} onClick={onClick}/>
        <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>
    </>
    )
}