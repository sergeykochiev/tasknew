"use client"

import { CHANNELS, CURRENT_USER, TASKS } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import DefButton from "@/components/Button";
import DefInput from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import W1 from "@/components/Pages/wrappers/list-page-wrapper";
import W1S from "@/components/Pages/wrappers/searchable-list-page-wrapper";
import TextArea from "@/components/TextArea";
import { Channel } from "diagnostics_channel";
import { FormEvent } from "react";
import { uid } from "uid";

export default function Page() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        TASKS.push({
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
        })
        console.log(TASKS[TASKS.length - 1])
    }

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Создание канала</HeadingTab>
            <DefButton color="blue" type="submit" form="new-channel">Создать</DefButton>
        </PageHeaderEvo>
        <W1 light={false}>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" name="newChannel" onSubmit={onSubmit}>
                <TextArea light={false} placeholder="Название" name="title" required/>
                <TextArea light={false} placeholder="Краткое описание" name="brief_description" />
                <DefInput light={false} placeholder="Кол-во попыток" name="attempts" type="number"/>
                <TextArea light={false} placeholder="Описание" name="detailed_description" required/>
                <LabeledCheckboxBar name="visible" label="Показывать в поиске" value="true"/>
                <LabeledCheckboxBar name="is_feedback" label="Можно оценивать" value="true"/>
            </form>
        </W1>
    </>    
    )
}