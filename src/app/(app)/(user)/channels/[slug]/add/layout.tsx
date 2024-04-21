import LinkButton from "@/components/Button/LinkButton";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
      <PageHeaderEvo>
        <HeadingTab>Добавление задания</HeadingTab>
        <LinkButton href="/tasks/create">Создать задание</LinkButton>
      </PageHeaderEvo>
      {children}
    </>
    );
  }