"use client"

import Button from "@/components/Button";
import TTLink from "@/components/CustomLink";
import InputField from "@/components/InputField";

export default function Page() {
    return <div className="flex flex-col items-center w-full flex-grow justify-center gap-big">
        <div className="text-title font-bold">
            Регистрация
        </div>
        <form className="flex flex-col gap-regular w-[304px]">
            <InputField placeholder="E-mail"/>
            <InputField placeholder="Пароль"/>
            <InputField placeholder="Повторите пароль"/>
            <Button stretch>Зарегистрироваться</Button>
        </form>
        <div className="text-caption">Уже есть аккаунт? <TTLink href="/login">Войти</TTLink></div>
    </div>
}