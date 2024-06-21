"use client"

import InputField from "@/components/InputField";
import NestedTab from "@/components/NestedTab";
import { useParams, useRouter } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const id = useId()
    const router = useRouter()
    const params = useParams()
    return <div className="flex flex-col gap-big items-center">
        <div className="w-[1596px] grid grid-cols-[303px,1245px] gap-biggest">
            <div className="w-[303px] flex flex-col gap-big">
                <div onClick={() => router.push(`/my-channels/${params.channelId}`)} className="transition-all cursor-pointer hover:underline h-def text-tt-darkgray text-heading font-normal">
                    Разделы
                </div>
                <div className="flex flex-col gap-def">
                    <InputField placeholder="Поиск каналов"/>
                    <div className="flex flex-col">
                        <NestedTab label="Задания вне раздела" name={id} href={`/my-channels/${params.channelId}/0`}/>
                        {Array(10).fill(1).map((e, i) => <NestedTab label={`Название раздела ${i+1}`} name={id} href={`/my-channels/${params.channelId}/${i+1}`}/>)}
                    </div>
                </div>
            </div>
            {children}
        </div>
    </div>
}
