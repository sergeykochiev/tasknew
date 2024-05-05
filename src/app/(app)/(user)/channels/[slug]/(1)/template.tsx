"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import DefButton from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [subbed, setSubbed] = useState<boolean>(false)
    const params = useParams()
    const id = useId()

    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) {
        return <NoDataPlaceholder/>
    }
    const isMine = CURRENT_USER.id == channel.creatorId

    return (
        <>
            <PageHeaderEvo heading={channel!.label}>
                <ButtonGroup>
                    <LinkHeadingTab name={id} href={`/channels/${params.slug}`}>Описание</LinkHeadingTab>
                    <LinkHeadingTab name={id} href={`/channels/${params.slug}/tasks`}>Задания</LinkHeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <DefButton color="blue" onClick={() => setSubbed(!subbed)}>{subbed ? "Выйти из канала" : "Войти в канал"}</DefButton> :
                        <>
                        <LinkButton href={`/channels/${params.slug}/add`}>Добавить задание</LinkButton>
                        <LinkButton color="blue" href={`/channels/${params.slug}/edit`}><img src="/ic_round-edit.svg"/></LinkButton>
                        </>
                    }
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </>
    );
  }