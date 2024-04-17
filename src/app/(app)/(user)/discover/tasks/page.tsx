"use client"

import TempDB from "@/common/helpers/local-db";
import { TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import TaskTile from "@/components/Tile/Task";
import { useEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<Array<TaskStruct>>([])
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
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} searchableInitially={true}/>
    )   
}