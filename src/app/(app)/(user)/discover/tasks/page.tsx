"use client"

import { TempDB } from "@/common/helpers";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import TaskTile from "@/components/Tile/Task";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<Array<TaskStruct>>([])
    const router = useRouter()
    useEffect(() => {
        console.log("dupa")
        const fetchTasks = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            setData(tasks.filter(e => e.title.includes(search) && e.visibile))
        }
        if (search.length == 0) return
        fetchTasks()
    }, [search])
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} searchableInitially={true} onClick={onClick}/>
    )   
}