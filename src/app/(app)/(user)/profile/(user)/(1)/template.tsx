"use client"

import Bar from "@/components/Bar";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import { useRouter } from "next/navigation";
import { useId } from "react";


export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const logout = async () => {
        router.push("/")
        return
      }
    
    const router = useRouter()
    const id = useId()

    return (
        <div className="flex flex-col gap-[32px]">
            <Bar>
                <ButtonGroup>
                    <LinkHeadingTab href="/profile" name={id}>Описание</LinkHeadingTab>
                    <LinkHeadingTab href="/profile/subscribtions" name={id}>Подписки</LinkHeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    <LinkButton color="blue" href="/tasks/created">Задания</LinkButton>
                    <LinkButton color="blue" href="/channels/created">Каналы</LinkButton>
                    <Button color="red" onClick={() => logout()}>Выйти</Button>
                </ButtonGroup>
            </Bar>
            {children}
        </div>
    )
}