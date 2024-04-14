"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import DefButton from "@/components/Button";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import W1 from "@/components/Pages/wrappers/list-page-wrapper";
import TextArea from "@/components/TextArea";
import { FormEvent } from "react";

export default function Page() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        CHANNELS.push({
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
        })
        console.log(CHANNELS[CHANNELS.length - 1])
    }
    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Создание канала</HeadingTab>
            <DefButton color="blue" type="submit" form="new-channel">Создать</DefButton>
        </PageHeaderEvo>
        <W1 light={false}>
            <form className="w-[848px] flex flex-col gap-[16px] items-end" name="new-channel" onSubmit={onSubmit}>
                <TextArea light={false} placeholder="Название" name="label" required small/>
                <TextArea light={false} placeholder="Краткое описание" name="brief_description" small/> 
                <TextArea light={false} placeholder="Описание" name="description" required/>
                <LabeledCheckboxBar label="Публичный" name="is_public" value="true"/>
            </form>
        </W1>
    </>    
    )
}