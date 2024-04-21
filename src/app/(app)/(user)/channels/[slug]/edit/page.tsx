"use client"

import { CHANNELS } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { FormEvent, useId } from "react";

export default function Page({ params }: { params: { slug: string }}) {
    const channelIDX = CHANNELS.findIndex(e => e.slug == params.slug)
    if (channelIDX < 0) return
    const channel = CHANNELS[channelIDX]
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        CHANNELS[channelIDX] = {
            id: channel.id,
            creatorId: channel.creatorId,
            brief_description: data.get("brief_description")! as string,
            description: data.get("description")! as string,
            label: data.get("label")! as string,
            is_public: data.get("is_public") == "true" ? true : false,
            slug: channel.slug,
            price: Number(data.get("price")! as string)
        }
        router.push(`/channels/${params.slug}`)
    }
    
    const router = useRouter()
    const formId = useId()    

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Изменение канала</HeadingTab>
            <Button color="blue" type="submit" form={formId}>Сохранить</Button>
        </PageHeaderEvo>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId} onSubmit={onSubmit}>
            <TextArea light={false} placeholder="Название" defaultValue={channel.label} name="label" required small/>
            <TextArea light={false} placeholder="Краткое описание" defaultValue={channel.brief_description} name="brief_description" small/> 
            <TextArea light={false} placeholder="Описание" defaultValue={channel.description} name="description" required/>
            <InputField light={false} placeholder="Стоимость" defaultValue={String(channel.price ? channel.price : "")} name="price" type="number"/>
            <LabeledCheckboxBar label="Публичный" name="is_public" defaultChecked={channel.is_public} value="true"/>
        </form>
    </>    
    )
}