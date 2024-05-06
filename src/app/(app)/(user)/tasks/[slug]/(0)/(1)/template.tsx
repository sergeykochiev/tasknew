"use client"

import Bar from "@/components/Bar";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
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
    
    return <div className="flex flex-col gap-[32px]">
      <Bar>
        <ButtonGroup>
          <LinkHeadingTab stretch href={`/tasks/${params.slug}`} name={id}>Описание</LinkHeadingTab>
          <LinkHeadingTab stretch href={`/tasks/${params.slug}/questions`} name={id}>Вопросы</LinkHeadingTab>
        </ButtonGroup>
        <LinkButton href="stats">Статистика</LinkButton>
      </Bar>
      {children}
    </div>
}