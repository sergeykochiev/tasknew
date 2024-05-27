import { CHANNELS } from "@/common/temp-data";
import ChannelTile from "@/components/Tile/Channel";
import { useId } from "react";

export default function Page() {
    const id = useId()
    return <InnerPage key={id}/>
}

function InnerPage() {
    return <div className="grid grid-cols-3 auto-rows-auto gap-5">
        {CHANNELS.map(e => <ChannelTile key={e.id} data={e}/>)}
    </div>
}