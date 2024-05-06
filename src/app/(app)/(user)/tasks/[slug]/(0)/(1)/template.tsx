"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import Bar from "@/components/Bar";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    const params = useParams()
    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return <NoDataPlaceholder/>
    const isMine = CURRENT_USER.id == task.creatorId
    
    return <div className="flex flex-col gap-[32px]">
      <Bar>
        <ButtonGroup>
          <LinkHeadingTab stretch href={`/tasks/${params.slug}`} name={id}>Описание</LinkHeadingTab>
          <LinkHeadingTab stretch href={`/tasks/${params.slug}/questions`} name={id}>Вопросы</LinkHeadingTab>
        </ButtonGroup>
        {isMine ? <LinkButton href="stats">Статистика</LinkButton> : <LinkButton color="blue" href={`/solve/${params.slug}`}>Решить</LinkButton>}
      </Bar>
      {children}
    </div>
}