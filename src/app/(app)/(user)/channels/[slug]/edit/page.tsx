"use client"

import { CHANNELS } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import TextArea from "@/components/TextArea";
import { useId } from "react";

export default function Page({ params }: { params: { slug: string }}) {
    const channelIDX = CHANNELS.findIndex(e => e.slug == params.slug)
    if (channelIDX < 0) return
    const channel = CHANNELS[channelIDX]
    const formId = useId()    

    return ( <>
        <form className="w-[848px] py-[16px] flex flex-col gap-[16px]" id={formId}>
            <TextArea placeholder="Название" defaultValue={channel.label} name="label" required small/>
            <TextArea placeholder="Краткое описание" defaultValue={channel.brief_description} name="brief_description" small/> 
            <TextArea placeholder="Описание" defaultValue={channel.description} name="description" required/>
            <InputField placeholder="Стоимость" defaultValue={String(channel.price ? channel.price : "")} name="price" type="number"/>
            <LabeledCheckboxBar label="Публичный" name="is_public" defaultChecked={channel.is_public} value="true"/>
        </form>
        <Button color="blue" type="submit" form={formId}>Сохранить</Button>
    </> )
}