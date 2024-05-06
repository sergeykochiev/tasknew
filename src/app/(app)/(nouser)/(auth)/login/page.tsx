"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
    const router = useRouter()
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        router.push("/home/recent/tasks")
    }
    return <form className="flex flex-col gap-[32px] w-[848px]" onSubmit={onSubmit}>
        <div className="grid gap-[16px] grid-cols-1">
            <InputField type="email" placeholder="E-mail *" required/>
            <InputField type="password" placeholder="Пароль *" required/>
        </div>
        <Button type="submit">Войти</Button>
    </form>
}