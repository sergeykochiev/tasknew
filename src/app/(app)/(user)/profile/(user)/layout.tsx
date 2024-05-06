import { CURRENT_USER } from "@/common/temp-data";
import HeadingTabGroup from "@/components/PageHeader/HeadingTabGroup";
import LinkPageHeading from "@/components/PageHeading/LinkPageHeading";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id = useId()
    
    return <div className="pt-[64px] mt-[44px] flex flex-col gap-[16px] w-[848px]">
        <HeadingTabGroup>
          <LinkPageHeading href="/profile" name={id} paths={["/profile/subscribtions"]}>{CURRENT_USER.nickname}</LinkPageHeading>
          <LinkPageHeading href="/profile/edit" name={id} paths={["/profile/edit/password"]}>Редактировать</LinkPageHeading>
        </HeadingTabGroup>
        {children}
    </div>
}