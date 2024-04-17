"use client"

import TempDB from "@/common/helpers/local-db";
import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
import ChannelStruct from "@/common/types/data-sctructures/channel";
import DefButton from "@/components/Button";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import W1 from "@/components/Pages/wrappers/list-page-wrapper";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";

export default function Page() {
    const router = useRouter()
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
        const db = new TempDB()
        const channels = (await db.get("channels") as Array<ChannelStruct>)
        channels.push(newChannel)
        await db.put("channels", channels)
        router.push(`/channels/${newChannel.slug}`)
    }
    const formId = useId()

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Создание канала</HeadingTab>
            <DefButton color="blue" type="submit" form={formId}>Создать</DefButton>
        </PageHeaderEvo>
        <W1 light={false}>
            <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId} onSubmit={onSubmit}>
                <TextArea light={false} placeholder="Название" name="label" required small/>
                <TextArea light={false} placeholder="Краткое описание" name="brief_description" small/> 
                <TextArea light={false} placeholder="Описание" name="description" required/>
                <LabeledCheckboxBar label="Публичный" name="is_public" value="true"/>
            </form>
        </W1>
    </>    
    )
}