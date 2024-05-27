"use client"

import Button from "@/components/Button"
import InputField from "@/components/InputField"
import LabeledCheckbox from "@/components/LabeledCheckbox"
import { useRouter } from "next/navigation"

export default function Page() {
    const fields = ["Название", "Краткое описание", "Полное описание", "Кол-во попыток"]
    const router = useRouter()
    return <div className="flex flex-col gap-5">
        <div className="flex gap-5">
            <div className="grid grid-cols-1 gap-4 min-w-min">
                {fields.map((e, i) => <div key={i} className="h-[42px] flex items-center min-w-min">{e}</div>)}
            </div>
            <div className="grid grid-cols-1 gap-4 flex-1">
                {fields.map((e, i) => <InputField key={i} placeholder={"Введите " + e.toLowerCase()}/>)}
            </div>
        </div>
        <LabeledCheckbox label="Показывать в поиске"/>
        <Button stretch onClick={() => router.push("/tasks/create/questions_add")}>Далее</Button>
    </div>
}