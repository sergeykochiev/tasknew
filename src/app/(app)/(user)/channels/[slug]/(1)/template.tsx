"use client"

import TempDB from "@/common/helpers/local-db";
import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    if (!currentChannel) {
        return <NoDataPlaceholder/>
    }
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
                        <DefButton redirectTo={`/channels/${params.slug}/add`}>Добавить задание</DefButton>
                        <DefButton color="blue" redirectTo={`/channels/${params.slug}/edit`}><img src="/ic_round-edit.svg"/></DefButton>
                        </>
                    }
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }