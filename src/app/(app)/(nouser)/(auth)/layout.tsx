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
    return (<div className="flex flex-col items-center bg-bg-dark min-h-smscreen">
      <PageHeader className="justify-around items-center"headings={[
        <PageHeading>Аутентификация</PageHeading>
      ]} tabs={[
        <LinkHeadingTab stretch href="/login" name={id}>Войти</LinkHeadingTab>,
        <LinkHeadingTab stretch href="/signup" name={id}>Зарегистрироваться</LinkHeadingTab>
      ]}/>
      {children}
    </div>   
    )
  }
  