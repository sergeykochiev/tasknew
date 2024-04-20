"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";
import { uid } from "uid";

export default function Page() {
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const id = TASKS.length
        const slug = String(id)
        TASKS.push({
            id: id,
            creatorId: CURRENT_USER.id,
            brief_description: data.get("brief_description")! as string,
            detailed_description: data.get("detailed_description")! as string,
            title: data.get("title")! as string,
            slug: slug,
            avatar: "",
            visibile: data.get("visible") == "true" ? true : false,
            channelId: undefined,
            date_created: Date.now().toString(),
            identifier: 1000000 + id,
            is_feedback: data.get("is_feedback") == "true" ? true : false,
            attempts: Number(data.get("attempts")! as string),
        })
        router.push(`/tasks/${slug}`)
    }

    const router = useRouter()
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