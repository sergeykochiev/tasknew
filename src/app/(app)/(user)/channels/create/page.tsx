"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import Button from "@/components/Button";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";

export default function Page() {
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const newChannel = {
            id: CHANNELS[CHANNELS.length - 1].id + 1,
            creatorId: CURRENT_USER.id,
            brief_description: data.get("brief_description")! as string,
            description: data.get("description")! as string,
            label: data.get("label")! as string,
            is_public: data.get("is_public") == "true" ? true : false,
            tasksCount: 0,
            subsCount: 0,
            slug: String(CHANNELS[CHANNELS.length - 1].id + 1),
            price: 0
        }
        CHANNELS.push(newChannel)
        router.push(`/channels/${newChannel.slug}`)
    }
    
    const router = useRouter()
    const formId = useId()    

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Создание канала</HeadingTab>
            <Button color="blue" type="submit" form={formId}>Создать</Button>
        </PageHeaderEvo>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId} onSubmit={onSubmit}>
            <TextArea light={false} placeholder="Название" name="label" required small/>
            <TextArea light={false} placeholder="Краткое описание" name="brief_description" small/> 
            <TextArea light={false} placeholder="Описание" name="description" required/>
            <LabeledCheckboxBar label="Публичный" name="is_public" value="true"/>
        </form>
    </>    
    )
}