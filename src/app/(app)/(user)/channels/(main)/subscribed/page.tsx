"use client"

import { TempDB } from "@/common/helpers";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            const subdChannels = channels.filter(e => e).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (subdChannels.length > 0) setChannels(subdChannels)
        }
        fetchChannels()
    }, [page])
    const [channels, setChannels] = useState<Array<ChannelStruct>>([])
    const [search, setSearch] = useState<string>("")
    const router = useRouter()
    if (!channels) return <NoDataPlaceholder/>
    const data = channels.filter(e => e.label.includes(search))
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    return (<>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} onClick={onClick}/>
        <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>
    </>
    )
}