"use client"

import { CURRENT_USER, TASKS } from "@/common/temp-data";
import Bar from "@/components/Bar";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import LinkHeadingTab from "@/components/PageHeaderEvo/HeadingTab/LinkHeadingTab";
import PageHeading from "@/components/PageHeading";
import LinkPageHeading from "@/components/PageHeading/LinkPageHeading";
import TaskTile from "@/components/Tile/Task";
import { usePathname, useSearchParams } from "next/navigation";
import { useId } from "react";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const id1 = useId()
    const id2 = useId()
    return (
        <div className="flex flex-col gap-[32px] w-[848px]">
            <div className="flex items-center gap-[16px] text-tile-gray text-[16px]">
                <div className="flex whitespace-nowrap">У вас есть код задания?</div>
                <form className="flex gap-[8px] w-full">
                    <InputField type="number" placeholder="Код задания"/>
                    <Button color="blue" type="submit">Найти</Button>
                </form>
            </div>
            <div className="flex items-center flex-col gap-[16px] text-tile-gray text-[16px]">
                <div className="flex gap-[16px] w-full">
                    <LinkPageHeading href="/home/recent/tasks" determineIfActive={() => usePathname().includes("/home/recent")} name={id1}>Последнее</LinkPageHeading>
                    <LinkPageHeading href="/home/recommended/tasks" determineIfActive={() => usePathname().includes("/home/recommended")} name={id1}>Рекомендации</LinkPageHeading>
                </div>
                <Bar evenly>
                    <LinkHeadingTab stretch href="./tasks" name={id2} determineIfActive={e => usePathname().includes("tasks")}>Задания</LinkHeadingTab>
                    <LinkHeadingTab stretch href="./channels" name={id2} determineIfActive={e => usePathname().includes("channels")}>Каналы</LinkHeadingTab>
                </Bar>
                {children}
            </div>
        </div>
    )
}