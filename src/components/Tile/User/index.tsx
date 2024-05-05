"use client"

import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import UserStruct from "@/common/types/data-sctructures/user";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface TaskTileProps extends ListEntryTileComponentProps<UserStruct> {
}

const UserTile: FC<TaskTileProps> = ({
    data,
    light,
    onClick
}) => {
    if (!data) return (
        <div className={`z-20 col-span-3 row-span-[0,5] outline outline-[9px] ${light ? "bg-white outline-white" : "bg-bg-dark outline-bg-dark"}`}>
            <div className={`z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full ${!light ? "bg-blanktile text-black" : "bg-tile-gray text-white"} rounded-[16px]`}>
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <div className="font-bold text-[20px]">
                            Пустой никнейм
                        </div>
                        Статус недоступен
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className={`z-20 col-span-3 row-span-[0,5] outline outline-[9px] ${light ? "bg-white outline-white" : "bg-bg-dark outline-bg-dark"}`}>
            <div onClick={() => onClick && onClick(data)} className={`tile-content z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full ${light ? "bg-main-dark text-tile-gray" : "bg-tile-gray text-bg-dark"} rounded-[16px]`}>
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <div className="font-bold text-[20px]">
                            {data.nickname}
                        </div>
                        {data.is_active ? <div className="text-[12px] font-bold text-main-blue">
                            Активен
                        </div> : <div className="text-[12px]">
                            Вне системы
                        </div>}
                    </div>
                </div>
                <div className="h-full aspect-square rounded-[8px] bg-white"></div>
            </div>
        </div>
    )
}

export default UserTile