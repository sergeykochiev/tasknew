"use client"

import Button from "@/components/Button";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeader from "@/components/PageHeader";
import HeadingTab from "@/components/PageHeader/HeadingTab";
import TextArea from "@/components/TextArea";
import { useId } from "react";

export default function Page() {
    const formId = useId()    

    return ( <>
        <PageHeader tabs={[<HeadingTab>Новый канал</HeadingTab>]} buttons={[<Button color="blue" type="submit" form={formId}>Создать</Button>]}/>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId}>
            <TextArea placeholder="Название" name="label" required small/>
            <TextArea placeholder="Краткое описание" name="brief_description" small/> 
            <TextArea placeholder="Описание" name="description" required/>
            <LabeledCheckboxBar label="Публичный" name="is_public" value="true"/>
        </form>
    </>    
    )
}