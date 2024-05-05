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
        <InputField type="email" placeholder="E-mail" required/>
        <InputField type="password" placeholder="Пароль" required/>
        <Button type="submit">Войти</Button>
    </form>
}