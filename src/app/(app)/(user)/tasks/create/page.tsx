"use client"

import { TempDB, updateRecord } from "@/common/helpers";
import { CHANNELS, CURRENT_USER, TASKS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import TaskStruct from "@/common/types/data-sctructures/task";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import { Channel } from "diagnostics_channel";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";
import { uid } from "uid";

export default function Page() {
    const router = useRouter()
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const newTask = {
            id: TASKS[TASKS.length - 1].id + 1,
            creatorId: CURRENT_USER.id,
            brief_description: data.get("brief_description")! as string,
            detailed_description: data.get("detailed_description")! as string,
            title: data.get("title")! as string,
            slug: String(TASKS[TASKS.length - 1].id + 1),
            avatar: "",
            visibile: data.get("visible") == "true" ? true : false,
            channelId: undefined,
            date_created: Date.now().toString(),
            identifier: uid(),
            is_feedback: data.get("is_feedback") == "true" ? true : false,
            attempts: Number(data.get("attempts")! as string),
            upload: "",
            questionCount: 0
        }
        await updateRecord("tasks", newTask)
        router.push(`/tasks/${newTask.slug}`)
    }
    const formId = useId()

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Создание задания</HeadingTab>
            <Button color="blue" type="submit" form={formId}>Создать</Button>
        </PageHeaderEvo>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId} onSubmit={onSubmit}>
            <TextArea light={false} placeholder="Название" name="title" required/>
            <TextArea light={false} placeholder="Краткое описание" name="brief_description"/>
            <InputField light={false} placeholder="Кол-во попыток" name="attempts" type="number"/>
            <TextArea light={false} placeholder="Описание" name="detailed_description" required/>
            <LabeledCheckboxBar name="visible" label="Показывать в поиске" value="true"/>
            <LabeledCheckboxBar name="is_feedback" label="Можно оценивать" value="true"/>
        </form>
    </>    
    )
}