"use client"

import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams } from "next/navigation";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    const params = useParams()

    return (<>
      <PageHeaderEvo>
        <ButtonGroup>
          <LinkHeadingTab name={id} href={`/users/${params.userId}/tasks`}>Задания</LinkHeadingTab>
          <LinkHeadingTab name={id} href={`/users/${params.userId}/channels`}>Каналы</LinkHeadingTab>
        </ButtonGroup>
        <LinkButton href={"./"}>К профилю</LinkButton>
      </PageHeaderEvo>
      {children}
    </>
    )
  }