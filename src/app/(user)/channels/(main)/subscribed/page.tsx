"use client"

import TempDB from "@/common/helpers/local-db";
import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import ChannelTile from "@/components/Tile/Channel";
import { useEffect, useState } from "react";

export default function Page() {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            const currentUser = CURRENT_USER
            setChannels(channels)
        }
        fetchChannels()
    }, [])
    const [channels, setChannels] = useState<Array<ChannelStruct>>([])
    const [search, setSearch] = useState<string>("")
    if (!channels) return <NoDataPlaceholder/>
    const data = channels.filter(e => e.label.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile}/>
    )
}