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
              <ButtonGroup>
                <HeadingTab redirectTo="/tasks/created">Созданные задания</HeadingTab>
                <HeadingTab redirectTo="/tasks/solved">Решенные задания</HeadingTab>
              </ButtonGroup>
              <ButtonGroup>
                <DefButton redirectTo="/discover/tasks">Найти еще</DefButton>
                <DefButton redirectTo="/tasks/create">Создать</DefButton>
              </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  