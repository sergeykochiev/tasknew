"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import Pagination from "@/components/Pagination";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    const [search, setSearch] = useState<string>("")

    const channels = CHANNELS.slice((page - 1) * 8, (page - 1) * 8 + 8)
    const data = channels.filter(e => e.label.includes(search))
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={search ? data : []} Component={ChannelTile} searchableInitially={true} onClick={onClick}/>
        {search && data.length > 0 && <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>}
    </> )   
}