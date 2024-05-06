"use client"

import { CURRENT_USER, USERS } from "@/common/temp-data";
import Button from "@/components/Button";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeader from "@/components/PageHeader";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import PageHeading from "@/components/PageHeading";
import { useParams, useRouter } from "next/navigation";
import { useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [subbed, setSubbed] = useState<boolean>(false)
    const router = useRouter()
    const id = useId()

    const params = useParams()
    const user = USERS.find(e => e.id == Number(params.userId))
    if (!user) return <NoDataPlaceholder/>
    if (user.id == CURRENT_USER.id) {router.push("/profile"); return}

    return <>
        <PageHeader headings={[<PageHeading>{user.nickname}</PageHeading>]} tabs={[
          <LinkHeadingTab href={`/users/${params.userId}`} name={id}>Описание</LinkHeadingTab>,
          <LinkHeadingTab href={`/users/${params.userId}/tasks`} name={id}>Задания</LinkHeadingTab>,
          <LinkHeadingTab href={`/users/${params.userId}/channels`} name={id}>Каналы</LinkHeadingTab>
        ]} buttons={[<Button color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Отписаться" : "Подписаться"}</Button>]}/>
        {children}
    </>
}