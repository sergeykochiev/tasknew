"use client"

import { apply2pxHover } from "@/common/helpers";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import UserStruct from "@/common/types/data-sctructures/user";
import React, { FC, useEffect, useId } from "react";

interface TaskTileProps extends ListEntryTileComponentProps<UserStruct> {
}

const UserTile: FC<TaskTileProps> = ({
    data,
    onClick
}) => {
    if (!data) return (
        <div className="z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full bg-blanktile text-black rounded-[16px]">
            <div className="flex flex-col w-full gap-[8px]">
                <div className="font-bold text-[20px]">
                    Пустой никнейм
                </div>
                Статус недоступен
            </div>
        </div>
    )
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <div id={id} onClick={() => onClick && onClick(data)} className="transition-all cursor-pointer hover:bg-white z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full bg-tile-gray text-bg-dark rounded-[16px]">
            <div className="flex flex-col gap-[8px] w-full">
                <div className="font-bold text-[20px]">
                    {data.nickname}
                </div>
                {data.is_active ? <div className="text-[12px] font-bold text-main-blue">
                    Активен
                </div> : <div className="text-[12px]">
                    Вне системы
                </div>}
            </div>
            <div className="h-full aspect-square rounded-[8px] bg-main-blue"></div>
        </div>
    )
}

export default UserTile