import { TASKS } from "@/common/temp-data";
import TaskTile from "@/components/Tile/Task";
import { useId } from "react";

export default function Page() {
    const id = useId()
    return <InnerPage key={id}/>
}

function InnerPage() {
    return <div className="grid grid-cols-3 auto-rows-auto gap-5">
        {TASKS.map(e => <TaskTile key={e.id} data={e}/>)}
    </div>
}