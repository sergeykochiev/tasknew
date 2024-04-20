"use client"

import { TempDB } from "@/common/helpers";
import UserStruct from "@/common/types/data-sctructures/user";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import Pagination from "@/components/Pagination";
import UserTile from "@/components/Tile/User";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const query = useSearchParams()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const [page, setPage] = useState<number>(pageGet())
    const router = useRouter()
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const users = (await db.get("users")) as Array<UserStruct>
            const subbedUsers = users.filter(e => e).slice((page - 1) * 8, (page - 1) * 8 + 8)
            if (subbedUsers.length > 0) setUsers(subbedUsers)
        }
        fetchChannels()
    }, [page])
    const [users, setUsers] = useState<Array<UserStruct>>()
    const [search, setSearch] = useState<string>("")
    if (!users) return <NoDataPlaceholder/>
    const data = users.filter(e => e.nickname.includes(search))
    const onClick = (data: UserStruct) => {
        router.push(`/users/${data.id}`)
    }
    return ( <>
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile} onClick={onClick}/>
        <Pagination page={page} lastPage={data.length < 8} onPageChange={(page) => setPage(page)}/>
    </>
    )   
}