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
                <HeadingTab>Подписки на пользователей</HeadingTab>
                <LinkButton href="/discover/users">Найти еще</LinkButton>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  