"use client"

import { USERS } from "@/common/temp-data";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
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
                <LinkButton href="/tasks/created">Задания</LinkButton>
                <LinkButton href="/tasks/created">Каналы</LinkButton>
                <Button color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Отписаться" : "Подписаться"}</Button>
            </ButtonGroup>
        </PageHeaderEvo>
        {children}
    </>
    )
}