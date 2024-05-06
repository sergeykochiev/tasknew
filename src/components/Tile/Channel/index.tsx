"use client"

import React, { FC, useEffect, useId } from "react";
import ChannelScruct from "@/common/types/data-sctructures/channel";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import { apply2pxHover } from "@/common/helpers";

interface ChannelTileProps extends ListEntryTileComponentProps<ChannelScruct> {
}

const ChannelTile: FC<ChannelTileProps> = ({
    data,
    onClick
}) => {
    if (!data) return (
        <div className="z-20 col-span-3 row-span-1 p-[16px] flex flex-col justify-between gap-[8px] h-full bg-blanktile text-phblank rounded-[16px]">
            <div className="text-[20px]">
                Пустой канал
            </div>
            <div className="text-[16px] flex-grow">
                Пустое описание
            </div>
            <div className="text-[12px]">
                Никакой/Никакой - Нет заданий - Нет подписчиков
            </div>
        </div>
    )
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <div id={id} onClick={() => onClick && onClick(data)} className="transition-all cursor-pointer hover:bg-white z-20 col-span-3 row-span-1 p-[16px] flex flex-col justify-between gap-[8px] h-full bg-tile-gray text-bg-dark rounded-[16px]">
            <div className="font-bold text-[20px]">
                {data.label}
            </div>
            <div className="text-[16px] flex-grow">
                здесь могло бы быть описание
            </div>
            <div className="text-[12px]">
                {(data.is_public ? "Публичный" : "Приватный") + "/" + (data.price ? `${data.price} рублей` : "Бесплатный") + " - 10 заданий - 10 подписчиков"}
            </div>
        </div>
    )
}

export default ChannelTile