"use client"

import { CURRENT_USER, USERS } from "@/common/temp-data";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useParams, useRouter } from "next/navigation";
import { useId, useState } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const logout = async () => {
      router.push("/")
      return
    }

    const router = useRouter()
    const id = useId()
    
    return <>
        <PageHeaderEvo heading={CURRENT_USER.nickname}>
              <ButtonGroup>
                <LinkHeadingTab href="/profile" name={id}>Описание</LinkHeadingTab>
                <LinkHeadingTab href="/profile/subscribtions" name={id}>Подписки</LinkHeadingTab>
              </ButtonGroup>
              <ButtonGroup>
                  <LinkButton color="blue" href="/tasks/created">Задания</LinkButton>
                  <LinkButton color="blue" href="/channels/created">Каналы</LinkButton>
                  <Button color="red" onClick={() => logout()}>Выйти</Button>
              </ButtonGroup>
        </PageHeaderEvo>
        {children}
    </>
}