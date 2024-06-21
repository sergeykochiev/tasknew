"use client"

import InputField from "@/components/InputField";
import TaskTile from "@/components/Tile/Task";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    return <div className="flex flex-col gap-def">
        <InputField placeholder="Поиск заданий"/>
        <div className="grid grid-cols-2 gap-tiny">
            {Array(10).fill(1).map((e, i) => <TaskTile onClick={() => router.push(`/exercises/${i}`)} questionCount={3} data={{
                title: "Название задания " + (i + 1),
                brief_description: "Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.",
            }}/>)}
        </div>
    </div>
}