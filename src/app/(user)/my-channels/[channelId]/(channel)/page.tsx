"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import NestedTab from "@/components/NestedTab";
import { useParams, useRouter } from "next/navigation";
import { useId } from "react";

export default function Page() {
    const id = useId()
    const params = useParams()
    const router = useRouter()
    return <div className="flex flex-col items-start gap-big">
        <div className="flex justify-between items-center w-full">
            <div className="h-def text-tt-black text-heading font-bold">
                Название канала 1
            </div>
            <Button>Изменить</Button>
        </div>
        <div className="grid gap-regular grid-cols-[auto,auto]">
            <div className="font-semibold">Описание:</div>
            <div>
                Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.
            </div>
        </div>
        <Button stretch onClick={() => router.push("/create-section")}>Создать раздел</Button>
        <div className="flex flex-col w-full">
            <NestedTab label="Задания вне раздела" caption="3 задания" name={id} href={`/my-channels/${params.channelId}/0`}/>
            {Array(10).fill(1).map((e, i) => <NestedTab label={`Название раздела ${i+1}`} caption="3 задания" name={id} href={`/my-channels/${params.channelId}/${i+1}`}/>)}
        </div>
    </div>
}