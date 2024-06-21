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
            <div className="font-semibold">Канал:</div>
            <SelectField>
                {Array(10).fill(1).map((e, i) => <option>Название канала {i+1}</option>)}
            </SelectField>
        </form>
        <Button>Создать</Button>
        <div className="flex flex-col gap-def">
            <div className="text-subtitle font-medium">Добавить задания в раздел (опционально)</div>
            <div className="flex gap-regular">
                <Tab href="/create-section" name={id}>Задания из канала</Tab>
                <Tab href="/create-section/bank" name={id}>Банк заданий</Tab>
                <Tab href="/create-section/my-bank" name={id}>Мой банк заданий</Tab>
            </div>
            {children}
        </div>
    </div>
}