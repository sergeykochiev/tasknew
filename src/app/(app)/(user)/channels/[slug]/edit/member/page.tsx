"use client"

import { USERS } from "@/common/temp-data";
import ContentContainer from "@/components/ContentContainer";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import AlertPopup from "@/components/AlertPopup";
import UserTile from "@/components/Tile/User";
import UserStruct from "@/common/types/data-sctructures/user";

export default function Page() {
    const [alert, setAlert] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<UserStruct>()
    const pageGet = () => query.get("page") ? Number(query.get("page")) : 1
    const query = useSearchParams()
    const [page, setPage] = useState<number>(pageGet())
    const [search, setSearch] = useState<string>("")

    const data = USERS.slice((page - 1) * 8, (page - 1) * 8 + 8).filter(e => e.nickname.includes(search))
    const onClick = async (data: UserStruct) => {
        setCurrentUser(data)
        setAlert(true)
    }
    
    
    return ( <>
        {alert && <AlertPopup label={`Вы уверены, что хотите удалить участника ${currentUser!.nickname} из канала?`} closeAlert={() => setAlert(false)} actionName="Да, удалить" action={() => setAlert(false)}/>}   
        <ContentContainer searchState={[search, setSearch]} data={data} Component={UserTile} onClick={onClick}/>
        <Pagination page={page} lastPage={Math.floor(data.length / 8)} onPageChange={(page) => setPage(page)}/>
    </>
    )
}