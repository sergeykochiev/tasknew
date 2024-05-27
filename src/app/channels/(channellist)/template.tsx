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
        <div className="flex  font-bold text-2xl tracking-wider">Каналы</div>
        <div className="flex gap-4 w-full">
            <div className="flex gap-2">
                <Tab children="Созданные каналы" name={id} href="/channels/created"/>
                <Tab children="Подписки на каналы" name={id} overlap href="/channels"/>
            </div>
            <div className="flex gap-2 w-full">
                <InputField placeholder="Поиск"/>
                <Button>Найти еще</Button>
                <Button square onClick={() => router.push("/channels/create")}>+</Button>
            </div>
        </div>
        {children}
    </>
}
