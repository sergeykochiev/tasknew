"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import PageHeader from "@/components/PageHeader";
import HeadingTab from "@/components/PageHeader/HeadingTab";
import TextArea from "@/components/TextArea";
import { useId } from "react";

export default function Page() {
    const formId = useId()

    return ( <>
        <PageHeader headings={[<HeadingTab>Новое задание</HeadingTab>]} buttons={[<Button color="blue" type="submit" form={formId}>Создать</Button>]}/>
        <form className="w-[848px] flex flex-col gap-[16px] items-end" id={formId}>
            <TextArea placeholder="Название" name="title" required/>
            <TextArea placeholder="Краткое описание" name="brief_description"/>
            <InputField placeholder="Кол-во попыток" name="attempts" type="number"/>
            <TextArea placeholder="Описание" name="detailed_description" required/>
            <LabeledCheckboxBar name="visible" label="Показывать в поиске" value="true"/>
            <LabeledCheckboxBar name="is_feedback" label="Можно оценивать" value="true"/>
        </form>
    </>    
    )
}