"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import NestedTab from "@/components/NestedTab";
import TextareaField from "@/components/TextareaField";
import QuestionTile from "@/components/Tile/Question";
import { useParams } from "next/navigation";
import { useId } from "react";

export default function Page() {
    const id = useId()
    const params = useParams()
    return <div className="flex flex-col items-start gap-big w-[1274px]">
        <div className="flex justify-between items-center w-full">
            <div className="h-def text-tt-black text-heading font-bold">
                Название задания 1
            </div>
            <Button>Изменить</Button>
        </div>
        <div className="grid gap-regular grid-cols-[auto,auto]">
            <div className="font-semibold">Описание:</div>
            <div>
                Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.
            </div>
        </div>
        <div className="flex justify-between items-center w-full">
            <Button>Добавить вопрос</Button>
            <Button>Изменить вопрос</Button>
        </div>
        <div className="flex flex-col gap-def w-full">
            <div>
                Lorem ipsum dolor sit amet consectetur. Sem nunc nullam blandit augue tristique. Nullam ultricies vitae vitae id nunc ut. Vestibulum commodo convallis libero in. Malesuada faucibus sed amet sed ac purus. Nunc molestie sit quam ac integer montes. Mi eu lorem sem tellus sed in. Etiam nunc ante massa sapien pharetra egestas sed suscipit. Pellentesque purus eu laoreet eu etiam at. Tempor mauris tempor viverra ac augue et libero arcu.
            </div>
            <TextareaField readOnly defaultValue="Правильный ответ">

            </TextareaField>
        </div>
    </div>
}