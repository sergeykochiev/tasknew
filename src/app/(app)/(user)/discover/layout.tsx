import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import FullPageHeader from "@/components/PageHeader/header/Full";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            <PageHeaderEvo>
                <HeadingTab redirectTo="/discover/tasks" className="w-full">Найти задания</HeadingTab>
                <HeadingTab redirectTo="/discover/channels" className="w-full">Найти каналы</HeadingTab>
                <HeadingTab redirectTo="/discover/users" className="w-full">Найти пользователей</HeadingTab>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  