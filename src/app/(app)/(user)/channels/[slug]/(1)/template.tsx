"use client"

import { TempDB } from "@/common/helpers";
import { CURRENT_USER } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import DefButton from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useEffect, useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const channels = (await db.get("channels")) as Array<ChannelStruct>
            setCurrentChannel(channels.find(e => e.slug == params.slug))
        }
        fetchChannels()
    }, [])
    const [currentChannel, setCurrentChannel] = useState<ChannelStruct>()
    const [subbed, setSubbed] = useState<boolean>(false)
    const params = useParams()
    const currentUser = CURRENT_USER
    const id = useId()
    if (!currentChannel) {
        return <NoDataPlaceholder/>
    }
    const isMine = currentUser.id == currentChannel.creatorId
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <LinkHeadingTab name={id} href={`/channels/${params.slug}`}>{`Описание канала "${currentChannel!.label}"`}</LinkHeadingTab>
                    <LinkHeadingTab name={id} href={`/channels/${params.slug}/tasks`}>{`Задания канала`}</LinkHeadingTab>
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
        </main>
    );
  }