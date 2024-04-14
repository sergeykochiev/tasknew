"use client"

import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import TaskStruct from "@/common/types/data-sctructures/task";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface TaskTileProps extends ListEntryTileComponentProps {
    data: TaskStruct
}

const TaskTile: FC<TaskTileProps> = ({
    data,
    light
}) => {
    const router = useRouter()
    const onclick = () => {
        router.push(`/tasks/${data.slug}`)
    }
    return (
        <div className={`z-20 col-span-3 row-span-1 outline outline-[9px] ${light ? "bg-white outline-white" : "bg-bg-dark outline-bg-dark"}`}>
            <div onClick={onclick} className={`tile-content z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full ${light ? "bg-main-dark text-tile-gray" : "bg-tile-gray text-bg-dark"} rounded-[16px]`}>
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-col gap-[8px]">
                        <div className="font-bold text-[20px]">
                            {data.title}
                        </div>
                        <div className="text-[16px]">
                            {data.brief_description}
                        </div>
                    </div>
                    <div className="flex text-[12px] gap-[4px] items-center">
                        <div>
                            {data.visibile ? "Публичное" : "Приватное"}
                        </div>
                        -
                        <div>
                            {data.questionCount} вопросов
                        </div>
                    </div>
                </div>
                <div className="h-full aspect-square rounded-[8px] bg-white"></div>
            </div>
        </div>
    )
}

export default TaskTile