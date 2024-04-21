import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
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
      <PageHeaderEvo>
        <ButtonGroup>
          <LinkHeadingTab href="/channels/created" name={id}>Созданные</LinkHeadingTab>
          <LinkHeadingTab href="/channels/subscribed" name={id}>Подписки</LinkHeadingTab>
        </ButtonGroup>
        <ButtonGroup>
          <LinkButton href="/discover/channels">Найти еще</LinkButton>
          <LinkButton href="/channels/create">Создать</LinkButton>
        </ButtonGroup>
      </PageHeaderEvo>
      {children}
    </>

    );
  }
  