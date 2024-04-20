"use client"

import { USERS } from "@/common/temp-data";
import UserStruct from "@/common/types/data-sctructures/user";
import ContentContainer from "@/components/ContentContainer";
import Pagination from "@/components/Pagination";
import UserTile from "@/components/Tile/User";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const onClick = (data: UserStruct) => {
        router.push(`/users/${data.id}`)
    }
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    const [search, setSearch] = useState<string>("")

    const channels = USERS.slice((page - 1) * 8, (page - 1) * 8 + 8)
    const data = channels.filter(e => e.nickname.includes(search))
    
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={search ? data : []} Component={UserTile} searchableInitially={true} onClick={onClick}/>
        {search && data.length > 0 && <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>}
    </> )
}