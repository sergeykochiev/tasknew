"use client"

import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import Task from "@/common/types/data-sctructures/task";
import React from "react";

interface TaskTileProps extends ListEntryTileComponentProps<Task> {
    questionCount?: number
}

export default function TaskTile(p: TaskTileProps) {
    return <div className="transition-all bg-tt-white px-[24px] py-[18px] gap-regular hover:shadow flex flex-col h-full cursor-pointer hover:bg-tt-blue group outline-def outline-tt-gray hover:outline-transparent" {...p}>
        <div className="flex justify-between items-center">
            <div className="transition-all text-subtitle font-medium text-tt-black group-hover:text-tt-white">
                {p.data.title}
            </div>
            <div className="transition-all text-caption text-tt-darkgray text-wrap text-ellipsis group-hover:text-tt-lightgray font-medium">
                {p.questionCount ? `${p.questionCount} вопросов` : "Нет вопросов"}
            </div>
        </div>
        <div className="transition-all text-body group-hover:text-tt-white">
            {p.data.brief_description}
        </div>
    </div>
}