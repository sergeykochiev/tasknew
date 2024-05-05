import { CURRENT_USER } from "@/common/temp-data";
import LinkButton from "@/components/Button/LinkButton";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import { useId } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
      <PageHeaderEvo heading="Добро пожаловать!" centered/>
      {children}
    </>
    );
  }