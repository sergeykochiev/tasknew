"use client"

import { TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import Pagination from "@/components/Pagination";
import TaskTile from "@/components/Tile/Task";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    const [search, setSearch] = useState<string>("")

    const channels = TASKS.slice((page - 1) * 8, (page - 1) * 8 + 8)
    const data = channels.filter(e => e.title.includes(search))
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={search ? data : []} Component={TaskTile} searchableInitially={true} onClick={onClick}/>
        {search && data.length > 0 && <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>}
    </> )
}