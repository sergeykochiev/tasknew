"use client"

import { CURRENT_USER, USERS } from "@/common/temp-data";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [subbed, setSubbed] = useState<boolean>(false)
    const router = useRouter()

    const params = useParams()
    const user = USERS.find(e => e.id == Number(params.userId))
    if (!user) return <NoDataPlaceholder/>
    if (user.id == CURRENT_USER.id) {router.push("/profile"); return}

    return <>
        <PageHeaderEvo>
            <HeadingTab>{"Профиль " + (user.nickname)}</HeadingTab>
            <ButtonGroup>
                <LinkButton href={`${params.userId}/tasks`}>Задания</LinkButton>
                <LinkButton href={`${params.userId}/channels`}>Каналы</LinkButton>
                <Button color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Отписаться" : "Подписаться"}</Button>
            </ButtonGroup>
        </PageHeaderEvo>
        {children}
    </>
}