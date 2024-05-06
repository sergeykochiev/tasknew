import Bar from "@/components/Bar";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    
    return <div className="flex flex-col gap-[32px]">
      <Bar evenly>
        <LinkHeadingTab stretch href="/profile/edit" name={id}>Данные профиля</LinkHeadingTab>
        <LinkHeadingTab stretch href="/profile/edit/password" name={id}>Изменить пароль</LinkHeadingTab>
      </Bar>
      {children}
    </div>
}