import LinkButton from "@/components/Button/LinkButton";
import PageHeader from "@/components/PageHeader";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import PageHeading from "@/components/PageHeading";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    return ( <div className="flex flex-col gap-[32px] w-[848px]">
      <PageHeader headings={[<PageHeading>Задания</PageHeading>]} tabs={[
        <LinkHeadingTab href="/tasks/created" name={id}>Созданные</LinkHeadingTab>,
        <LinkHeadingTab href="/tasks/solved" name={id}>Решенные</LinkHeadingTab>,
        <LinkHeadingTab href="/tasks/favorites" name={id}>Избранное</LinkHeadingTab>
      ]} buttons={[
        <LinkButton href="/discover/tasks">Найти еще</LinkButton>,
        <LinkButton href="/tasks/create">Создать</LinkButton>
      ]}/>
      {children}
    </div>       
    )
  }
  