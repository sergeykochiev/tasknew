"use client"

import { seedTempDB } from "@/common/temp-data";
import DefButton from "@/components/Button";
import StartPageSection from "@/components/Section/welcome/regular";
import TopPageSection from "@/components/Section/welcome/top";

export default function Page() {
    return (
        <main className="flex flex-col">
            <TopPageSection heading="Tycoon Task">
                Описание
                <DefButton className="w-[128px]" color="blue">Подробнее</DefButton>
                <DefButton className="w-[128px]" color="dark-gray" redirectTo="/home">Войти</DefButton>
            </TopPageSection>
            {/* <StartPageSection color="dark-gray" heading="Красота в простоте" align="left">
                Вы создаете задания, которые можно группировать по каналам. Или вы их решаете.
                <DefButton color="blue">Создать</DefButton>
            </StartPageSection>
            <StartPageSection color="blue" heading="Наша платформа - ваши возможности" align="right">
                Пара заданий для подготовки к экзамену? Или, может быть, комплексная программа работ по одному или нескольким предметам? Вы определяете, для чего, а мы даем вам ответ на вопрос “Как?”.
                <DefButton color="white">Попробовать</DefButton>
            </StartPageSection>
            <StartPageSection color="white" heading="Можете выкинуть ваш журнал" align="left">
                Этого делать не стоит, но держите в уме, что вы всегда сможете найти детальную статистику каналов, заданий или учеников в нашей системе.
                <DefButton color="dark-gray">Посмотреть</DefButton>
            </StartPageSection>
            <StartPageSection color="dark-gray" heading="Все еще не с нами?" align="center">
                Предлагаем вам присоединиться и попробовать. Это бесплатно!
                <DefButton color="blue">Вперед</DefButton>
            </StartPageSection> */}
        </main>
    )
}