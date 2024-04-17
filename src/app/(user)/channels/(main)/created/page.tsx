"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useEffect, useState } from "react";
import ChannelTile from "@/components/Tile/Channel";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import TempDB from "@/common/helpers/local-db";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";

export default function Page() {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            const currentUser = CURRENT_USER
            setChannels(channels.filter(e => e.creatorId == currentUser.id))
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