"use client"

import { CHANNELS, CURRENT_USER } from "@/common/temp-data";
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

    const channel = CHANNELS.find(e => e.slug == params.slug)
    if (!channel) {
        return <NoDataPlaceholder/>
    }
    const isMine = CURRENT_USER.id == channel.creatorId
    
    return <div className="pt-[64px] mt-[44px] flex flex-col gap-[16px] w-[848px]">
        <HeadingTabGroup>
          <LinkPageHeading href={`/channels/${params.slug}`} name={id} paths={[`/channels/${params.slug}/tasks`, `/channels/${params.slug}/members`]}>{channel.label}</LinkPageHeading>
          {isMine && <LinkPageHeading href={`/channels/${params.slug}/edit`} name={id} paths={[`/channels/${params.slug}/edit/add`, `/channels/${params.slug}/edit/member`]}>Редактировать</LinkPageHeading>}
        </HeadingTabGroup>
        {children}
    </div>
}