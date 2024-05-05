"use client"

import { CHANNELS, TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { slug: string }}) {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1

    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const [search, setSearch] = useState<string>("")
    const router = useRouter()

    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) return <NoDataPlaceholder/>
    const data = TASKS.filter(e => e.title.includes(search)).slice((page - 1) * 8, (page - 1) * 8 + 8)
    const onClick = async (data: TaskStruct) => {
        router.push(`/channels/${params.slug}/tasks`)
    }
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} onClick={onClick}/>
        <Pagination page={page} lastPage={Math.floor(data.length / 8)} onPageChange={(page) => setPage(page)}/>
    </>
    )
}