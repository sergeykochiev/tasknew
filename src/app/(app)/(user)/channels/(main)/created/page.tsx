"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import ChannelTile from "@/components/Tile/Channel";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    const [search, setSearch] = useState<string>("")

    const channels = CHANNELS.filter(e => e.creatorId == CURRENT_USER.id).slice((page - 1) * 8, (page - 1) * 8 + 8)
    const data = channels.filter(e => e.label.includes(search))
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={ChannelTile} onClick={onClick}/>
        {data.length > 0 && <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>}
    </>
    )
}