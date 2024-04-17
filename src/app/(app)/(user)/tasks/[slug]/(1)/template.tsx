"use client"

import TempDB from "@/common/helpers/local-db";
import { CHANNELS, CURRENT_USER, TASKS } from "@/common/temp-data";
import TaskStruct from "@/common/types/data-sctructures/task";
import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    const currentUser = CURRENT_USER
    if (!currentTask) {
        return <NoDataPlaceholder/>
    }
    const isMine = currentUser.id == currentTask.creatorId
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <HeadingTab redirectTo={`/tasks/${params.slug}`}>{"Описание " + `"${currentTask.title}"`}</HeadingTab>
                    <HeadingTab redirectTo={`/tasks/${params.slug}/questions`}>Вопросы</HeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <>
                        <DefButton>Попытки</DefButton>
                        <DefButton onClick={() => setFav(!isFav)}>{isFav ? "**" : "*"}</DefButton>
                        <DefButton color="blue">Решить</DefButton>              
                    </> : <>
                        <DefButton>Статистика</DefButton>
                        <DefButton >Добавить вопрос</DefButton>
                        <DefButton color="blue"><img src="/ic_round-edit.svg"/></DefButton>
                    </>}
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }