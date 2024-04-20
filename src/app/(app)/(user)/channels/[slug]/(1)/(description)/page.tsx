"use client"

import { CHANNELS, TASKS, USERS } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string }}) {
    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) return <NoDataPlaceholder/>
    const creator = USERS.find(e => e.id == channel.creatorId)

    return (<>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="4x2" name="Описание">{channel.description}</Tile>
            {channel.is_public ? <Tile kind="bigtext" name="Публичный">ДА</Tile> : <Tile kind="bigtext" name="Цена">{channel.price}</Tile>}
            <Tile name="Создатель"><Link href={`/profile/${creator!.id}`}>{creator!.nickname}</Link></Tile>
            <Tile size="2x1">
                <Tile kind="bigtext" name="Количество заданий">{TASKS.filter(e => e.channelId == channel.id).length}</Tile>
                <Tile kind="bigtext" name="Количество подписчиков">{"хз"}</Tile>
            </Tile>
        </div>
    </>)
}