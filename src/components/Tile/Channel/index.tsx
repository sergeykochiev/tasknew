"use client"

import React, { FC } from "react";
import Channel from "@/common/types/data-sctructures/channel";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";

interface ChannelTileProps extends ListEntryTileComponentProps<Channel> {
}

const ChannelTile: FC<ChannelTileProps> = (p) => {
    return (
        <div className="transition-all p-5 gap-4 flex flex-col h-full all-default hover-default cursor-pointer" {...p}>
            <div className="text-xl">
                {p.data.label}
            </div>
            <div className="text-xs flex-grow whitespace-nowrap text-ellipsis">
                {p.data.description}
            </div>
            <div className="text-xs">
                {p.data.visibility ? "visible" : "invisible"} - 10 заданий - {p.data.price ? p.data.price : "free"}
            </div>
        </div>
    )
}

export default ChannelTile