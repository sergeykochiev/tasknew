"use client"

import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import UserStruct from "@/common/types/data-sctructures/user";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface TaskTileProps extends ListEntryTileComponentProps {
    data: UserStruct
}

const UserTile: FC<TaskTileProps> = ({
    data,
    light
}) => {
    const router = useRouter()
    const onclick = () => {
        router.push(`/profile/${data.id}`)
    }
    return (
        <div className={`z-20 col-span-3 row-span-[0,5] outline outline-[9px] ${light ? "bg-white outline-white" : "bg-bg-dark outline-bg-dark"}`}>
            <div onClick={onclick} className={`tile-content z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full ${light ? "bg-main-dark text-tile-gray" : "bg-tile-gray text-bg-dark"} rounded-[16px]`}>
                <div className="h-full aspect-square rounded-[8px] bg-white"></div>
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
                    <div className="flex w-full justify-end">
                        <div className={`button text-[14px] h-[41px] w-[128px] grid place-items-center rounded-[16px] bg-main-blue text-bg-dark z-10`} onClick={() => {console.log("подписаться")}}>
                            Подписаться
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTile