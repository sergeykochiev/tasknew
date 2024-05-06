"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import HeadingTabGroup from "@/components/PageHeader/HeadingTabGroup";
import LinkPageHeading from "@/components/PageHeading/LinkPageHeading";
import { useParams } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const params = useParams()
    const id = useId()
    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return <NoDataPlaceholder/>
    const isMine = CURRENT_USER.id == task.creatorId
    
    return <div className="pt-[64px] mt-[44px] flex flex-col gap-[16px]">
        <HeadingTabGroup>
          <LinkPageHeading href={`/tasks/${params.slug}`} name={id} paths={[`/tasks/${params.slug}/questions`]}>{task.title}</LinkPageHeading>
          {isMine && <LinkPageHeading href={`/tasks/${params.slug}/edit`} name={id} paths={[`/tasks/${params.slug}/edit/add`]}>Редактировать</LinkPageHeading>}
        </HeadingTabGroup>
        {children}
    </div>
}