"use client"

import { TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import TaskTile from "@/components/Tile/Task";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    let data: Array<TaskStruct> = []
    if (search.length > 0) {
        data = TASKS.filter(e => e.title.includes(search))
    }
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} searchableInitially={true}/>
    )   
}