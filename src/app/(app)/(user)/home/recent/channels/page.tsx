"use client"

import { CHANNELS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const onClick = (data: ChannelStruct) => {
        router.push(`/channels/${data.slug}`)
    }
    return ( <>
        <div className="grid gap-[16px] grid-cols-6x128 auto-rows-main">
            {CHANNELS.slice(0,4).map(e => <ChannelTile data={e} onClick={onClick}/>)}
        </div>
    </> )
}