"use client"

import Button from "@/components/Button";
import TTLink from "@/components/CustomLink";
import InputField from "@/components/InputField";
import Link from "next/link";

export default function Page() {
    return <div className="flex flex-col items-center w-full flex-grow justify-center gap-big">
        <div className="text-title font-bold">
            Вход
        </div>
        <form className="flex flex-col gap-regular w-[304px]">
            <InputField placeholder="E-mail"/>
            <InputField placeholder="Пароль"/>
            <Button stretch>Войти</Button>
        </form>
        <div className="flex flex-col gap-regular text-tt-darkgray items-center text-caption">
            <div>Еще нет аккаунта? <TTLink href="/signup">Зарегистрироваться</TTLink></div>
            <TTLink href="/reset-password">Забыли пароль?</TTLink>
        </div>
    </div>
}