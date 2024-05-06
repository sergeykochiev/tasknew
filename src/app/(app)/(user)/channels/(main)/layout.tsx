import LinkButton from "@/components/Button/LinkButton";
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
    return (<div className="flex flex-col gap-[32px] w-[848px]">
      <PageHeader headings={[<PageHeading>Каналы</PageHeading>]} tabs={[<LinkHeadingTab href="/channels/created" name={id}>Созданные</LinkHeadingTab>,
          <LinkHeadingTab href="/channels/subscribed" name={id}>Подписки</LinkHeadingTab>]} buttons={[
          <LinkButton href="/discover/channels">Найти еще</LinkButton>,
          <LinkButton href="/channels/create">Создать</LinkButton>
          ]}/>
      {children}
    </div>

    );
  }
  