"use client"

import { TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import ContentContainer from "@/components/ContentContainer";
import Pagination from "@/components/Pagination";
import TaskTile from "@/components/Tile/Task";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
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
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={TASKS.slice((page - 1) * 8, (page - 1) * 8 + 8)} Component={TaskTile} onClick={onClick}/>
        <Pagination lastPage={Math.floor(TASKS.length / 8)} page={page} onPageChange={(page) => setPage(page)}/>
    </> )
}