"use client"

import { TempDB } from "@/common/helpers";
import { CURRENT_USER } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useEffect, useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            setCurrentTask(tasks.find(e => e.slug == params.slug))
        }
        fetchChannels()
    }, [])
    const [currentTask, setCurrentTask] = useState<TaskStruct>()
    const [isFav, setFav] = useState<boolean>(false)
    const params = useParams()
    const id = useId()
    const currentUser = CURRENT_USER
    if (!currentTask) {
        return <NoDataPlaceholder/>
    }
    const isMine = currentUser.id == currentTask.creatorId
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <LinkHeadingTab href={`/tasks/${params.slug}`} name={id}>{"Описание " + `"${currentTask.title}"`}</LinkHeadingTab>
                    <LinkHeadingTab href={`/tasks/${params.slug}/questions`} name={id}>Вопросы</LinkHeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <>
                        <Button>Попытки</Button>
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