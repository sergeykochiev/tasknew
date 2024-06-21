"use client"

import React, { FC } from "react";
import Channel from "@/common/types/data-sctructures/channel";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";

interface PublicChannelTileProps extends Partial<ListEntryTileComponentProps<Channel>> {
    tasksCount?: number
}

export default function PublicChannelTile(p: PublicChannelTileProps) {
    return (
        <div onClick={p.onClick} className="transition-all bg-tt-white px-[24px] py-[18px] items-center justify-between gap-def hover:shadow flex h-full cursor-pointer hover:bg-tt-blue group outline-def outline-tt-gray hover:outline-transparent" {...p}>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis transition-all font-medium text-subtitle text-tt-black group-hover:text-tt-white">
                Публичный
            </div>
            <div className="whitespace-nowrap text-tt-darkgray text-caption font-medium group-hover:text-tt-lightgray">
                {p.tasksCount} задания
            </div>
        </div>
    )
}