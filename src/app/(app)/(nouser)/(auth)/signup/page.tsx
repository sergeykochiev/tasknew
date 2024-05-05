"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
    const router = useRouter()
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        router.push("/home")
    }
    return <form className="flex flex-col gap-[16px] w-[848px]" onSubmit={onSubmit}>
        <div className="grid gap-[16px] grid-cols-2">
            <InputField type="text" placeholder="Никнейм" required/>
            <InputField type="email" placeholder="E-mail" required/>
            <InputField type="text" placeholder="Имя"/>
            <InputField type="password" placeholder="Пароль" required/>
            <InputField type="text" placeholder="Фамилия"/>
            <InputField type="password" placeholder="Подтвердите пароль" required/>
        </div>
        <Button type="submit">Зарегистрироваться</Button>
    </form>
}