"use client"

import Button from "@/components/Button";
import Tab from "@/components/Tab";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function Template({children}: {children: React.ReactNode}) {
    const id = useId()
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4">
            <Button onClick={() => router.push("/tasks/create/channel_add")}>Далее</Button>
            <div className="flex gap-2">
                <Tab stretch children="Создать вопрос" name={id} href="/tasks/create/questions_add"/>
                <Tab stretch children="Каталог" name={id} href="/tasks/create/questions_add/catalogue"/>
                <Tab stretch children="Мои вопросы" name={id} href="/tasks/create/questions_add/my_questions"/>
            </div>
            {children}
        </div>
    )
}