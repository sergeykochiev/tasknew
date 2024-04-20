"use client"

import { TempDB } from "@/common/helpers";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<Array<ChannelStruct>>([])
    const router = useRouter()
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
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} searchableInitially={true} onClick={onClick}/>
    )   
}