"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [isFav, setFav] = useState<boolean>(false)
    const params = useParams()
    const id = useId()

    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return <NoDataPlaceholder/>

    const isMine = CURRENT_USER.id == task.creatorId

    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <LinkHeadingTab href={`/tasks/${params.slug}`} name={id}>{"Описание " + `"${task.title}"`}</LinkHeadingTab>
                    <LinkHeadingTab href={`/tasks/${params.slug}/questions`} name={id}>Вопросы</LinkHeadingTab>
                    {!isMine && <LinkHeadingTab href={`/tasks/${params.slug}/tries`} name={id}>Вопросы</LinkHeadingTab>}
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <>
                        <Button onClick={() => setFav(!isFav)}>{isFav ? "**" : "*"}</Button>
                        <Button color="blue">Решить</Button>              
                    </> : <>
                        <Button>Статистика</Button>
                        <LinkButton href={`/tasks/${params.slug}/add`}>Добавить вопрос</LinkButton>
                        <LinkButton href={`/tasks/${params.slug}/edit`} color="blue"><img src="/ic_round-edit.svg"/></LinkButton>
                    </>}
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }