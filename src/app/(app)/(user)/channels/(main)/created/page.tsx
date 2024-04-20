"use client"

import { CURRENT_USER } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useEffect, useState } from "react";
import ChannelTile from "@/components/Tile/Channel";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import { TempDB } from "@/common/helpers";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            const currentUser = CURRENT_USER
            const createdChannels = channels.filter(e => e.creatorId == currentUser.id).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (createdChannels.length > 0) setChannels(createdChannels)
        }
        fetchChannels()
    }, [page])
    const [channels, setChannels] = useState<Array<ChannelStruct>>()
    const [search, setSearch] = useState<string>("")
    if (!channels) return <NoDataPlaceholder/>
    const data = channels.filter(e => e.label.includes(search))
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} onClick={onClick}/>
        <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>
    </>
    )
}