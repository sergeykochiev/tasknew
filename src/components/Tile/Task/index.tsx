"use client"

import { apply2pxHover } from "@/common/helpers";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import TaskStruct from "@/common/types/data-sctructures/task";
import React, { FC, useEffect, useId } from "react";

interface TaskTileProps extends ListEntryTileComponentProps<TaskStruct> {
}

const TaskTile: FC<TaskTileProps> = ({
    data,
    onClick
}) => {
    if (!data) return (
        <div className={`z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full bg-blanktile text-phblank rounded-[16px]`}>
            <div className="flex flex-col gap-[8px] w-full justify-between">
                <div className="text-[20px]">
                    Пустое задание
                </div>
                <div className="text-[16px] flex-grow">
                    Пустое описание
                </div>
                <div className="text-[12px]">
                    Никакое - Нет вопросов
                </div>
            </div>
            <div className="h-full aspect-square rounded-[8px] outline outline-[1px] outline-offset-[-1px] outline-phblank"></div>
        </div>
    )
    const id = useId()
    useEffect(() => {
        apply2pxHover(id)
    }, [])
    return (
        <div id={id} onClick={() => onClick && onClick(data)} className={`transition-all cursor-pointer hover:bg-white z-20 col-span-3 row-span-1 p-[16px] flex gap-[16px] h-full bg-tile-gray text-bg-dark rounded-[16px]`}>
            <div className="flex flex-col w-full gap-[8px]">
                <div className="font-bold text-[20px]">
                    {data.title}
                </div>
                <div className="text-[16px] flex-grow">
                    {data.brief_description}
                </div>
                <div className="flex text-[12px] items-center">
                    {(data.visibile ? "Публичное" : "Приватное") + " - 10 вопросов"}
                </div>
            </div>
            <div className="h-full aspect-square rounded-[8px] bg-main-blue"></div>
        </div>
    )
}

export default TaskTile