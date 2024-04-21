"use client"

import { TASKS } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";

export default function Page({ params }: { params: { slug: string }}) {
    const taskIDX = TASKS.findIndex(e => e.slug == params.slug)
    const task = TASKS[taskIDX]
    if (!task) return
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        TASKS[taskIDX] = {
            id: task.id,
            creatorId: task.creatorId,
            brief_description: data.get("brief_description")! as string,
            detailed_description: data.get("detailed_description")! as string,
            title: data.get("title")! as string,
            slug: task.slug,
            avatar: task.avatar,
            visibile: data.get("visible") == "true" ? true : false,
            channelId: task.channelId,
            date_created: task.date_created,
            identifier: task.identifier,
            is_feedback: data.get("is_feedback") == "true" ? true : false,
            attempts: Number(data.get("attempts")! as string),
        }
        router.push(`/tasks/${params.slug}`)
    }

    const router = useRouter()
    const formId = useId()

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Изменение задания</HeadingTab>
            <Button color="blue" type="submit" form={formId}>Сохранить</Button>
        </PageHeaderEvo>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId} onSubmit={onSubmit}>
            <TextArea light={false} placeholder="Название" name="title" defaultValue={task.title} required/>
            <TextArea light={false} placeholder="Краткое описание" defaultValue={task.brief_description} name="brief_description"/>
            <InputField light={false} placeholder="Кол-во попыток" defaultValue={task.attempts} name="attempts" type="number"/>
            <TextArea light={false} placeholder="Описание" defaultValue={task.detailed_description} name="detailed_description" required/>
            <LabeledCheckboxBar name="visible" defaultChecked={task.visibile} label="Показывать в поиске" value="true"/>
            <LabeledCheckboxBar name="is_feedback" defaultChecked={task.is_feedback} label="Можно оценивать" value="true"/>
        </form>
    </>    
    )
}