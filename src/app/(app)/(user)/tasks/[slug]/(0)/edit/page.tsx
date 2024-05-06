"use client"

import { TASKS } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import TextArea from "@/components/TextArea";
import { useId } from "react";

export default function Page({ params }: { params: { slug: string }}) {
    const taskIDX = TASKS.findIndex(e => e.slug == params.slug)
    const task = TASKS[taskIDX]
    if (!task) return

    const formId = useId()

    return ( <>
        <form className="w-[848px] flex flex-col gap-[16px]" id={formId}>
            <TextArea placeholder="Название" name="title" defaultValue={task.title} required/>
            <TextArea placeholder="Краткое описание" defaultValue={task.brief_description} name="brief_description"/>
            <InputField placeholder="Кол-во попыток" defaultValue={task.attempts} name="attempts" type="number"/>
            <TextArea placeholder="Описание" defaultValue={task.detailed_description} name="detailed_description" required/>
            <LabeledCheckboxBar name="visible" defaultChecked={task.visibile} label="Показывать в поиске" value="true"/>
            <LabeledCheckboxBar name="is_feedback" defaultChecked={task.is_feedback} label="Можно оценивать" value="true"/>
        </form>
        <Button color="blue" type="submit" form={formId}>Сохранить</Button>
    </> )
}