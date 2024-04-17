"use client"

import TempDB from "@/common/helpers/local-db";
import { USERS } from "@/common/temp-data";
import UserStruct from "@/common/types/data-sctructures/user";
import ContentContainer from "@/components/ContentContainer";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import UserTile from "@/components/Tile/User";
import { useEffect, useState } from "react";

export default function Page() {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const users = (await db.get("users")) as Array<UserStruct>
            setUsers(users)
        }
        fetchChannels()
    }, [])
    const [users, setUsers] = useState<Array<UserStruct>>([])
    const [search, setSearch] = useState<string>("")
    if (!users) return <NoDataPlaceholder/>
    const data = users.filter(e => e.nickname.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile}/>
    )   
}