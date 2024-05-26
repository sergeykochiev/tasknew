"use client"

import { apply2pxHover } from "@/common/helpers";
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry";
import Task from "@/common/types/data-sctructures/task";
import TaskStruct from "@/common/types/data-sctructures/task";
import React, { FC, useEffect, useId } from "react";

interface TaskTileProps extends ListEntryTileComponentProps<Task> {
}

const TaskTile: FC<TaskTileProps> = (p) => {
    return (
        <div className="transition-all p-5 gap-4 flex flex-col h-full all-default cursor-pointer hover-default" {...p}>
            <div className="text-xl">
                {p.data.title}
            </div>
            <div className="text-xs flex-grow whitespace-nowrap text-ellipsis">
                {p.data.brief_description}
            </div>
            <div className="text-xs">
                {p.data.visibile} - 10 заданий
            </div>
        </div>
    )
}

export default TaskTile