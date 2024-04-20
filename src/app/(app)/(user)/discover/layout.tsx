import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <LinkHeadingTab href="/discover/tasks" className="w-full" name={id}>Найти задания</LinkHeadingTab>
                <LinkHeadingTab href="/discover/channels" className="w-full" name={id}>Найти каналы</LinkHeadingTab>
                <LinkHeadingTab href="/discover/users" className="w-full" name={id}>Найти пользователей</LinkHeadingTab>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  