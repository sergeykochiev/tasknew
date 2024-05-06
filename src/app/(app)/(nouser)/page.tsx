"use client"

import { sourceCodePro } from "@/common/fonts";
import LinkButton from "@/components/Button/LinkButton";
import BlankTile from "@/components/Tile/Blank";

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className="bg-bg-dark min-h-smscreen grid place-items-center p-[536px] gap-[32px]">
                <div className="flex flex-col items-center w-[848px] z-10 gap-[32px]">
                    <div className={`${sourceCodePro.className} font-bold text-[64px] text-center text-tile-gray`}>
                        Task Tycoon
                    </div>
                    <div className="text-[16px] text-center text-tile-gray">
                        Облегчение процесса тестирования посредством автоматизации проверки ответов учеников
                    </div>
                    <LinkButton href="/login" color="blue">Начать</LinkButton>
                    
                </div>
                <div className="flex absolute items-center justify-center overflow-hidden z-0">
                    <div className="grid grid-cols-8 grid-rows-8">{Array(64).fill(<BlankTile/>)}</div>
                    <div className={`absolute w-[144%] aspect-square bg-gradient-radial from-blanktile via-bg-dark to-bg-dark z-0`}></div>
                </div>
            </div>
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
        </div>
    )
}