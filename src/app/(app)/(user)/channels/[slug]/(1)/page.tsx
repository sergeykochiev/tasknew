"use client"

import { CHANNELS, TASKS, USERS } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string }}) {
    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) return
    const creator = USERS.find(e => e.id == channel.creatorId)

    return (<div className="relative flex justify-center">
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="3x2" name="Описание">{channel.description}</Tile>
            <Tile big name="Публичный">{channel.is_public ? "ДА" : "НЕТ"}</Tile>
            <Tile size="2x1" name="Создатель"><Link href={`/profile/${creator!.id}`}>{creator!.nickname}</Link></Tile>
            <Tile size="2x1">
                <Tile big name="Количество заданий">{TASKS.filter(e => e.channelId == channel.id).length}</Tile>
                <Tile big name="Количество подписчиков">{"хз"}</Tile>
            </Tile>
            <Tile big align="bottom-reversed" name="Цена">{channel.price ? channel.price : 0}р</Tile>
        </div>
        <BackgroundGridBig />
    </div>)
}