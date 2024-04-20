"use client"

import React, { FC } from "react";
import ChannelScruct from "@/common/types/data-sctructures/channel";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import { useRouter } from "next/navigation";

interface ChannelTileProps extends ListEntryTileComponentProps<ChannelScruct> {
}

const ChannelTile: FC<ChannelTileProps> = ({
    data,
    light = false,
    onClick
}) => {
    return (
        <div className={`z-20 col-span-3 row-span-1 outline outline-[9px] ${light ? "bg-white outline-white" : "bg-bg-dark outline-bg-dark"}`}>
            <div onClick={() => onClick && onClick(data)} className={`tile-content p-[16px] flex flex-col justify-between gap-[8px] h-full ${light ? "bg-main-dark text-tile-gray" : "bg-tile-gray text-bg-dark"} rounded-[16px]`}>
                <div className="flex flex-col gap-[8px]">
                    <div className="font-bold text-[20px]">
                        {data.label}
                    </div>
                    <div className="text-[16px]">
                        здесь могло бы быть описание
                    </div>
                </div>
                <div className="flex text-[12px] gap-[4px] items-center">
                    <div>
                        {data.is_public ? "Публичный" : "Приватный"}/{data.price ? `${data.price} рублей` : "Бесплатный"}
                    </div>
                    -
                    <div>
                        10 заданий
                    </div>
                    -
                    <div>
                        10 подписчиков
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelTile