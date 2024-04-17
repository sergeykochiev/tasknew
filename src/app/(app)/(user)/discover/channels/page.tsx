"use client"

import TempDB from "@/common/helpers/local-db";
import { CHANNELS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import ChannelTile from "@/components/Tile/Channel";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<Array<ChannelStruct>>([])
    useEffect(() => {
        console.log("dupa")
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            setData(channels.filter(e => e.label.includes(search)))
        }
        if (search.length == 0) return
        fetchChannels()
    }, [search])
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} searchableInitially={true}/>
    )   
}