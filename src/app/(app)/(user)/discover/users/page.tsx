"use client"

import TempDB from "@/common/helpers/local-db";
import { USERS } from "@/common/temp-data";
import UserStruct from "@/common/types/data-sctructures/user";
import ContentContainer from "@/components/ContentContainer";
import UserTile from "@/components/Tile/User";
import { useEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<Array<UserStruct>>([])
    useEffect(() => {
        console.log("dupa")
        const fetchUsers = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<UserStruct>
            setData(tasks.filter(e => e.nickname.includes(search)))
        }
        if (search.length == 0) return
        fetchUsers()
    }, [search])
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile} searchableInitially={true}/>
    )   
}