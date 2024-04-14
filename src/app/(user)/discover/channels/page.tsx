"use client"

import { CHANNELS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import ChannelTile from "@/components/Tile/Channel";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    let data: Array<ChannelStruct> = []
    if (search.length > 0) {
        data = CHANNELS.filter(e => e.label.includes(search))
    }
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} searchableInitially={true}/>
    )   
}