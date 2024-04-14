import DefButton from "@/components/Button";
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
                <DefButton redirectTo="/channels/create">Найти еще</DefButton>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  