import LinkButton from "@/components/Button/LinkButton";
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
              <HeadingTab>Добавление задания</HeadingTab>
              <LinkButton href="/tasks/create">Создать задание</LinkButton>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }