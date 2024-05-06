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
    
    return <div className="flex flex-col gap-[32px] items-center">
      <Bar evenly>
        <LinkHeadingTab stretch href={`/channels/${params.slug}`} name={id}>Описание</LinkHeadingTab>
        <LinkHeadingTab stretch href={`/channels/${params.slug}/tasks`} name={id}>Задания</LinkHeadingTab>
        <LinkHeadingTab stretch href={`/channels/${params.slug}/members`} name={id}>Участники</LinkHeadingTab>
      </Bar>
      {children}
    </div>
}