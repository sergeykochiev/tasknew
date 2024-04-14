"use client"

import { CHANNELS, TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import TaskTile from "@/components/Tile/Task";
import { useState } from "react";

export async function generateStaticParams() {
    return CHANNELS.map((channel) => ({
      slug: channel.slug,
    }))
  }


export default function Page() {
    // const [search, setSearch] = useState<string>("")
    const channelTasks: Array<TaskStruct> = TASKS.slice(0,4)
    return (
        <ContentContainer data={channelTasks} Component={TaskTile}/>
    )   
}