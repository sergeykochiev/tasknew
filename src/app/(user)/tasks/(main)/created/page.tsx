"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";

export default function Page() {
    const createdTasks: Array<TaskStruct> = TASKS.filter(e => e.creatorId == CURRENT_USER.id)
    const [search, setSearch] = useState<string>("")
    const data = createdTasks.filter(e => e.title.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile}/>
    )
}