"use client"

import Button from "@/components/Button";
import CheckboxTab from "@/components/CheckboxTab";
import Checkbox from "@/components/CheckboxTab";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import ChannelTile from "@/components/Tile/Channel";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function Page() {
    const id = useId()
    const router = useRouter()
    return <div className="flex flex-col gap-big w-[626px]">
        <div className="font-bold text-heading flex-grow flex justify-center">Создать канал</div>
        <form className="grid grid-cols-[max-content,1fr] gap-regular">
            <div className="font-semibold">Название:</div>
            <InputField placeholder="Название"/>
            <div className="font-semibold">Описание:</div>
            <TextareaField placeholder="Описаниe"/>
            <div className="font-semibold">Доступ:</div>
            <div className="flex gap-regular">
                <CheckboxTab label="Свободный" name={id}/>
                <CheckboxTab label="Закрытый" name={id} defaultChecked/>
            </div>
        </form>
        <Button>Создать</Button>
    </div>
}