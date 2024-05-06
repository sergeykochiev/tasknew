"use client"

import Bar from "@/components/Bar";
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
      <Bar evenly>
        <LinkHeadingTab stretch href={`/tasks/${params.slug}/edit`} name={id}>Данные задания</LinkHeadingTab>
        <LinkHeadingTab stretch href={`/tasks/${params.slug}/edit/add`} name={id}>Добавить вопрос</LinkHeadingTab>
      </Bar>
      {children}
    </div>
}