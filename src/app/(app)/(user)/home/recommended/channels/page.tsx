"use client"

import { CHANNELS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ContentContainer from "@/components/ContentContainer";
import Pagination from "@/components/Pagination";
import ChannelTile from "@/components/Tile/Channel";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
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
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={CHANNELS.slice((page - 1) * 8, (page - 1) * 8 + 8)} Component={ChannelTile} onClick={onClick}/>
        <Pagination lastPage={Math.floor(CHANNELS.length / 8)} page={page} onPageChange={(page) => setPage(page)}/>
    </> )
}