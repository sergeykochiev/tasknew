"use client"

import Bar from "@/components/Bar";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LinkHeadingTab from "@/components/PageHeader/HeadingTab/LinkHeadingTab";
import HeadingTabGroup from "@/components/PageHeader/HeadingTabGroup";
import LinkPageHeading from "@/components/PageHeading/LinkPageHeading";
import { useId } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id1 = useId()
    const id2 = useId()
    return (
        <div className="flex flex-col gap-[32px] mt-[32px] w-[848px]">
            <div className="flex items-center gap-[32px] text-tile-gray text-[16px]">
                <div className="flex whitespace-nowrap">У вас есть код задания?</div>
                <form className="flex gap-[8px] w-full">
                    <InputField type="number" placeholder="Код задания"/>
                    <Button color="blue" type="submit">Найти</Button>
                </form>
            </div>
            <div className="flex flex-col gap-[16px] text-tile-gray text-[16px]">
                <HeadingTabGroup>
                    <LinkPageHeading href="/home/recent/tasks" name={id1} paths={["/home/recent/channels"]}>Последнее</LinkPageHeading>
                    <LinkPageHeading href="/home/recommended/tasks" name={id1} paths={["/home/recommended/channels"]}>Рекомендации</LinkPageHeading>
                </HeadingTabGroup>
                <Bar evenly>
                    <LinkHeadingTab stretch href="./tasks" name={id2} paths={["/home/recent/tasks", "/home/recommended/tasks"]}>Задания</LinkHeadingTab>
                    <LinkHeadingTab stretch href="./channels" name={id2} paths={["/home/recent/channels", "/home/recommended/channels"]}>Каналы</LinkHeadingTab>
                </Bar>
            </div>
            {children}
        </div>
    )
}