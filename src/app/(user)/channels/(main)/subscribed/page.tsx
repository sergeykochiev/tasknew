"use client"

import { CHANNELS } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import ChannelTile from "@/components/Tile/Channel";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const data = CHANNELS.filter(e => e.label.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile}/>
    )
}