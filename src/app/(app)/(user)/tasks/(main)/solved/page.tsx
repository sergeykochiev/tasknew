"use client"

import { TempDB } from "@/common/helpers";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import TaskTile from "@/components/Tile/Task";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            const solvedTasks = tasks.filter(e => e).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (solvedTasks.length > 0) setTasks(solvedTasks)
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