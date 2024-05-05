"use client"

import { TASKS } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import TaskTile from "@/components/Tile/Task";
import TaskStruct from "@/common/types/data-sctructures/task";

export default function Page({ params }: { params: { userId: string }}) {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: TaskStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    const [search, setSearch] = useState<string>("")

    const tasks = TASKS.filter(e => e.creatorId == Number(params.userId)).slice((page - 1) * 8, (page - 1) * 8 + 8)
    const data = tasks.filter(e => e.title.includes(search))
    
    return ( <> 
        <ContentContainer searchState={[search, setSearch]} data={data} Component={TaskTile} onClick={onClick}/>
        {data.length > 0 && <Pagination page={page} lastPage={Math.floor(data.length / 8)} onPageChange={(page) => setPage(page)}/>}
    </>
    )
}