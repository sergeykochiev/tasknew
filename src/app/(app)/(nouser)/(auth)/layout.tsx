import PageHeaderEvo from "@/components/PageHeaderEvo";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    return (<div className="flex flex-col items-center bg-bg-dark min-h-smscreen">
      <PageHeaderEvo className="justify-around items-center" heading="Аутентификация" centered>
        <LinkHeadingTab href="/login" name={id} stretch>Войти</LinkHeadingTab>
        <LinkHeadingTab href="/signup" name={id} stretch>Зарегистрироваться</LinkHeadingTab>
      </PageHeaderEvo>
      {children}
    </div>   
    )
  }
  