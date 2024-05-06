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
    return (<>
      <PageHeader headings={[<PageHeading>Найти</PageHeading>]} tabs={[<LinkHeadingTab href="/discover/tasks" name={id} stretch>Задания</LinkHeadingTab>,
        <LinkHeadingTab href="/discover/channels" name={id} stretch>Каналы</LinkHeadingTab>,
        <LinkHeadingTab href="/discover/users" name={id} stretch>Пользователи</LinkHeadingTab>]}/>
      {children}
    </> 
    );
  }
  