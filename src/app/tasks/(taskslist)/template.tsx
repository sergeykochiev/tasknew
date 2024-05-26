"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Tab from "@/components/Tab";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const id = useId()
    const router = useRouter()
    return <>
        <div className="flex  font-bold text-2xl tracking-wider">Задания</div>
        <div className="flex gap-4 w-full">
            <div className="flex gap-2">
                <Tab children="Созданные задания" name={id} href="/tasks/created"/>
                <Tab children="Избранные задания" name={id} overlap href="/tasks"/>
            </div>
            <div className="flex gap-2 w-full">
                <InputField placeholder="Поиск"/>
                <Button>Найти еще</Button>
                <Button square onClick={() => router.push("/tasks/create")}>+</Button>
            </div>
        </div>
        {children}
    </>
}
