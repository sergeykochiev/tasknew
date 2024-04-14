"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import ChannelTile from "@/components/Tile/Channel";
import ChannelStruct from "@/common/types/data-sctructures/channel";

export default function Page() {
    const created: Array<ChannelStruct> = CHANNELS.filter(e => e.creatorId == CURRENT_USER.id)
    const [search, setSearch] = useState<string>("")
    const data = created.filter(e => e.label.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile}/>
    )
}