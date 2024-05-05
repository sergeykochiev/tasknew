import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    return ( <>
      <PageHeaderEvo heading="Задания">
        <ButtonGroup>
          <LinkHeadingTab href="/tasks/created" name={id}>Созданные</LinkHeadingTab>
          <LinkHeadingTab href="/tasks/solved" name={id}>Решенные</LinkHeadingTab>
          <LinkHeadingTab href="/tasks/favorites" name={id}>Избранное</LinkHeadingTab>
        </ButtonGroup>
        <ButtonGroup>
          <LinkButton href="/discover/tasks">Найти еще</LinkButton>
          <LinkButton href="/tasks/create">Создать</LinkButton>
        </ButtonGroup>
      </PageHeaderEvo>
      {children}
    </>       
    )
  }
  