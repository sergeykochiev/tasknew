import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
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
                <HeadingTab redirectTo="/channels/created">Созданные</HeadingTab>
                <HeadingTab redirectTo="/channels/subscribed">Подписки</HeadingTab>
              </ButtonGroup>
              <ButtonGroup>
                <DefButton redirectTo="/discover/channels">Найти еще</DefButton>
                <DefButton redirectTo="/channels/create">Создать</DefButton>
              </ButtonGroup>
            </PageHeaderEvo>
            {children}
        </main>
    );
  }
  