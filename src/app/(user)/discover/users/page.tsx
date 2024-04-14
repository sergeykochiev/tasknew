"use client"

import { USERS } from "@/common/temp-data";
import UserStruct from "@/common/types/data-sctructures/user";
import ContentContainer from "@/components/ContentContainer";
import UserTile from "@/components/Tile/User";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    let data: Array<UserStruct> = []
    if (search.length > 0) {
        data = USERS.filter(e => e.nickname.includes(search))
    }
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile} searchableInitially={true}/>
    )   
}