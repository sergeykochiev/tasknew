import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    return (<>
      <PageHeaderEvo heading="Найти" centered>
        <LinkHeadingTab href="/discover/tasks" name={id} stretch>Задания</LinkHeadingTab>
        <LinkHeadingTab href="/discover/channels" name={id} stretch>Каналы</LinkHeadingTab>
        <LinkHeadingTab href="/discover/users" name={id} stretch>Пользователи</LinkHeadingTab>
      </PageHeaderEvo>
      {children}
    </> 
    );
  }
  