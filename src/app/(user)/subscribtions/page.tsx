"use client"

import { USERS } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import UserTile from "@/components/Tile/User";
import { useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>("")
    const data = USERS.filter(e => e.nickname.includes(search))
    return (
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile}/>
    )   
}