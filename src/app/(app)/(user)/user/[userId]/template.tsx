"use client"

import { USERS } from "@/common/temp-data";
import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const params = useParams()
    const user = USERS.find(e => e.id == Number(params.userId))
    const [subbed, setSubbed] = useState<boolean>(false)
    return ( <>
        <PageHeaderEvo>
            <HeadingTab>{"Профиль " + (user && user.nickname)}</HeadingTab>
            <ButtonGroup>
                <DefButton redirectTo="/tasks/created">Задания</DefButton>
                <DefButton redirectTo="/tasks/created">Каналы</DefButton>
                <DefButton color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Отписаться" : "Подписаться"}</DefButton>
            </ButtonGroup>
        </PageHeaderEvo>
        {children}
    </>
    )
}