"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
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
    const currentUser = CURRENT_USER
    const currentChannel = CHANNELS.find(e => e.slug == params.slug)
    if (!currentChannel) {
        return <NoDataPlaceholder/>
    }
    const [subbed, setSubbed] = useState<boolean>(false)
    const isMine = currentUser.id == currentChannel.creatorId
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <HeadingTab redirectTo={`/channels/${params.slug}`}>{`Описание канала "${currentChannel!.label}"`}</HeadingTab>
                    <HeadingTab redirectTo={`/channels/${params.slug}/tasks`}>{`Задания канала`}</HeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <DefButton color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Выйти из канала" : "Войти в канал"}</DefButton> :
                        <>
                        <DefButton>Добавить задание</DefButton>
                        <DefButton color="blue" redirectTo={`/channels/${params.slug}/edit`}><img src="/ic_round-edit.svg"/></DefButton>
                        </>
                    }
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }