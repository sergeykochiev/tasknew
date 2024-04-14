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


export default function Page({ params }: { params: { slug: string }}) {
    const currentChannel = CHANNELS.find(e => e.slug == params.slug)
    if (!currentChannel) {
        return <NoDataPlaceholder/>
    }
    // const [search, setSearch] = useState<string>("")
    const channelTasks: Array<TaskStruct> = TASKS.filter(e => e.channelId == currentChannel.id)
    return (
        <ContentContainer data={channelTasks} Component={TaskTile}/>
    )   
}