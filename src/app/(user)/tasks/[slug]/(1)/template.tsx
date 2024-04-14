"use client"

import { CHANNELS, CURRENT_USER, TASKS } from "@/common/temp-data";
import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const params = useParams()
    const currentUser = CURRENT_USER
    const currentTask = TASKS.find(e => e.slug == params.slug)
    if (!currentTask) {
        return <NoDataPlaceholder/>
    }
    const isMine = currentUser.id == currentTask.creatorId
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <ButtonGroup>
                    <HeadingTab redirectTo={`/tasks/${params.slug}`}>{`Описание задания "${currentTask!.title}"`}</HeadingTab>
                    <HeadingTab redirectTo={`/tasks/${params.slug}/questions`}>{`Вопросы задания`}</HeadingTab>
                </ButtonGroup>
                <ButtonGroup>
                    {!isMine ? <>
                        <DefButton>Попытки</DefButton>
                        <DefButton color="blue">Решить</DefButton>              
                    </> : <>
                        <DefButton>Статистика</DefButton>
                        <DefButton color="blue">Редактировать</DefButton>
                    </>}
                </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }