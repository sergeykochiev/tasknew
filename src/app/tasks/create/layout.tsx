import Tab from "@/components/Tab";
import { useId } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";

export default function Layout({children}: {children: React.ReactNode}) {
    const id = useId()
    return <>
        <div className="flex font-bold text-2xl tracking-wider">Создание задания</div>
        <div className="flex gap-3 items-center w-full justify-between">
            <Tab stretch children="Основные данные" name={id} href="/tasks/create"/>
            <GoArrowRight size={24}/>
            <Tab stretch children="Добавление вопросов" name={id} href="/tasks/create/questions_add"/>
            <GoArrowRight size={24}/>
            <Tab stretch children="Присваивание канала" name={id} href="/tasks/create/channel_add"/>
        </div>
        {children}
    </>
}