"use client"

import { TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import TaskTile from "@/components/Tile/Task";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const onClick = (data: TaskStruct) => {
        router.push(`/tasks/${data.slug}`)
    }
    return ( <>
        <div className="grid gap-[16px] grid-cols-6x128 auto-rows-main">
            {TASKS.slice(0,4).map(e => <TaskTile data={e} onClick={onClick}/>)}
        </div>
    </> )
}