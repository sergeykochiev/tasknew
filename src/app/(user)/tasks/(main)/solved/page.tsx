"use client"

import { TASKS } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import TaskTile from "@/components/Tile/Task";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const data = TASKS.filter(e => e.title.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile}/>
    )
}