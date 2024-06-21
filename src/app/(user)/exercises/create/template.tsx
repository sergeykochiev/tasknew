"use client"

import Button from "@/components/Button";
import CheckboxTab from "@/components/CheckboxTab";
import Checkbox from "@/components/CheckboxTab";
import Tab from "@/components/CheckboxTab/Link";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextareaField from "@/components/TextareaField";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const id = useId()
    const router = useRouter()
    return <div className="flex flex-col gap-big w-[921px]">
        <div className="font-bold text-heading flex-grow flex justify-center">Создать раздел</div>
        <form className="grid grid-cols-[max-content,1fr] gap-regular">
            <div className="font-semibold">Название:</div>
            <InputField placeholder="Название"/>
            <div className="font-semibold">Кратко об:</div>
            <InputField placeholder="Краткое описание"/>
            <div className="font-semibold">Описание:</div>
            <TextareaField placeholder="Полное описание"/>
            <div className="font-semibold">Канал:</div>
            <SelectField>
                {Array(10).fill(1).map((e, i) => <option>Название канала {i+1}</option>)}
            </SelectField>
            <div className="font-semibold">Раздел:</div>
            <SelectField>
                {Array(10).fill(1).map((e, i) => <option>Название раздела {i+1}</option>)}
            </SelectField>
            <div className="font-semibold">Доступ:</div>
            <div className="flex gap-regular">
                <CheckboxTab label="Общедоступное (добавить в банк)" name={id}/>
                <CheckboxTab label="Личное (не добавлять в банк)" name={id} defaultChecked/>
            </div>
        </form>
        <Button>Создать</Button>
        <div className="flex flex-col gap-def">
            <div className="text-subtitle font-medium">Добавить вопросы (опционально)</div>
            <div className="flex gap-regular">
                <Tab href="/exercises/create" name={id}>Задания из канала</Tab>
                <Tab href="/exercises/create/bank" name={id}>Банк заданий</Tab>
            </div>
            {children}
        </div>
    </div>
}