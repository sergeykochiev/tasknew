"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }

    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()

    const [search, setSearch] = useState<string>("")
    const data = TASKS.filter(e => e.creatorId == CURRENT_USER.id).slice((page - 1) * 8, (page - 1) * 8 + 8).filter(e => e.title.includes(search))
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} onClick={onClick}/>
        {data.length > 0 && <Pagination page={page} lastPage={Math.floor(data.length / 8)} onPageChange={(page) => setPage(page)}/>}
    </>
    )
}