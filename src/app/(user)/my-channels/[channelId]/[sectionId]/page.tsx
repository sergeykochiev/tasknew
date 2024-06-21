"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import NestedTab from "@/components/NestedTab";
import TaskTile from "@/components/Tile/Task";
import { useParams, useRouter } from "next/navigation";
import { useId } from "react";

export default function Page() {
    const id = useId()
    const params = useParams()
    const router = useRouter()
    return <div className="flex flex-col items-start gap-big">
        <div className="flex justify-between items-center w-full">
            <div className="h-def text-tt-black text-heading font-bold">
                Название раздела 1
            </div>
            <Button>Изменить</Button>
        </div>
        <div className="grid gap-regular grid-cols-[auto,auto]">
            <div className="font-semibold">Описание:</div>
            <div>
                Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.
            </div>
        </div>
        <div className="flex gap-def w-full">
            <InputField placeholder="Поиск заданий"/>
            <Button href="/exercises/create">Создать задание</Button>
        </div>
        <div className="grid gap-tiny grid-cols-3">
            {Array(10).fill(1).map((e, i) => <TaskTile onClick={() => router.push(`/exercises/${i}`)} questionCount={3} data={{
                title: "Название задания " + (i + 1),
                brief_description: "Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.",
            }}/>)}
        </div>
    </div>
}