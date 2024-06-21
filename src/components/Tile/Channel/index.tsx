"use client"

import React, { FC } from "react";
import Channel from "@/common/types/data-sctructures/channel";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";

interface ChannelTileProps extends ListEntryTileComponentProps<Channel> {
    sectionCount?: number
    freeTasksCount?: number
}

export default function ChannelTile(p: ChannelTileProps) {
    return (
        <div onClick={p.onClick} className="transition-all bg-tt-white px-[24px] py-[18px] items-center justify-between gap-def hover:shadow flex h-full cursor-pointer hover:bg-tt-blue group outline-def outline-tt-gray hover:outline-transparent" {...p}>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis transition-all font-medium text-subtitle text-tt-black group-hover:text-tt-white">
                {p.data.label}
            </div>
            <div className="flex items-center gap-regular transition-all text-caption text-tt-darkgray text-wrap text-ellipsis group-hover:text-tt-lightgray font-medium">
                <div className="whitespace-nowrap">
                    {p.sectionCount ? `${p.sectionCount} разделов` : "Нет разделов"}
                </div>
                <div className="whitespace-nowrap">
                    {p.freeTasksCount ? `${p.freeTasksCount} свободных заданий` : "Нет свободных заданий"}
                </div>
                <div className="whitespace-nowrap">
                    {p.data.visibility ? `Открытый` : "Приватный"}
                </div>
            </div>
        </div>
    )
}