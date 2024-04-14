"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"
import Link from "next/link"

export async function generateStaticParams() {
    return CHANNELS.map((channel) => ({
      slug: channel.slug,
    }))
  }

export default function Page({ params }: { params: { slug: string }}) {
    const currentChannel = CHANNELS.find(e => e.slug == params.slug)
    const currentUser = CURRENT_USER
    if (!currentChannel) {
        return <NoDataPlaceholder/>
    }
    return (<>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="4x2" name="Описание">{currentChannel.description}</Tile>
            {currentChannel.is_public ? <Tile kind="bigtext" name="Публичный">ДА</Tile> : <Tile kind="bigtext" name="Цена">{currentChannel.price}</Tile>}
            <Tile name="Создатель"><Link href={`/profile/${currentUser.id}`}>{currentUser.nickname}</Link></Tile>
            <Tile size="2x1">
                <Tile kind="bigtext" name="Количество заданий">{currentChannel.tasksCount}</Tile>
                <Tile kind="bigtext" name="Количество подписчиков">{currentChannel.subsCount}</Tile>
            </Tile>
        </div>
    </>)
}