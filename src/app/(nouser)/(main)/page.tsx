import { sourceCodePro } from "@/common/fonts";
import Button from "@/components/Button";
import { ReactNode } from "react";

interface CardProps {
    label: string
    children: ReactNode
}

function Card(p: CardProps) {
    return <div className="transition-all hover:shadow-md hover:bg-white hover:scale-[1.01] flex flex-col gap-def bg-tt-white outline-def outline-tt-darkgray p-[20px] shadow">
        <div className="font-medium text-subtitle">
            {p.label}
        </div>
        <div className="text-body text-tt-darkgray">
            {p.children}
        </div>
    </div>
}

export default function Page() {
    return <div className="flex flex-col items-center w-full select-none">
        <section className={`${sourceCodePro.className} overflow-hidden group py-[128px] bg-tt-lightgray items-center flex flex-col gap-big w-full`}>
            <div className="text-biggest z-10 duration-500 font-bold transition-all group-has-[button:hover]:text-tt-white text-tt-blue">Task Tycoon</div>
            <div className="text-tt-darkgray duration-500 z-10 transition-all group-has-[button:hover]:text-tt-lightgray text-title after:content-[']'] before:content-['['] font-bold lowercase">платформа для автоматизированной оценки знаний</div>
            <div className="transition-all flex items-center justify-center relative z-0 has-[button:hover]:outline-tt-white outline-def">
                <Button className="duration-[400ms]" href="/signup">Попробовать</Button>
                <div className="rounded-none transition-all duration-500 absolute w-full h-full bg-tt-blue top-0 scale-100 group-has-[button:hover]:scale-[20] group-has-[button:hover]:rounded-full z-[-1]">

                </div>
            </div>
        </section>
        <section className="py-[64px] bg-tt-white gap-big">
            <div className="flex flex-col gap-biggest w-[921px]">
                <div className="flex flex-col items-start gap-def">
                    <div className="font-bold text-title">
                        Устали?
                    </div>
                    <div className="font-body text-left w-[75%]">
                        от ручного проведения тестов, постоянной траты бумаги на печать и ленег на чернила, не можете найти платформу, подходящую именно для вас??
                    </div>
                </div>
                <div className="flex flex-col items-end gap-def">
                    <div className="font-bold text-title text-tt-blue">
                        Предлагаем!
                    </div>
                    <div className="font-body text-right w-[75%]">
                        Task Tycoon - открытый web-сервис для автоматизированной оценки знаний, предоставляющий возможность учителям, репетиторам и ученикам оптимизировать процесс тестирования
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-tt-lightgray py-[64px] w-full flex justify-center">
            <div className="w-[626px] flex flex-col items-center gap-big">
                <div className="text-title font-bold">
                    Функционал
                </div>
                <div className="flex flex-col gap-def items-center">
                    <div className="grid grid-cols-2 gap-def">
                        <div className="flex flex-col gap-def">
                            <Card label="Создавайте тесты">
                                которые могут состоять из вопросов <b className="text-tt-blue">огромного количества</b> типов
                            </Card>
                            <Card label="Положитесь на нас">
                                пользуйтесь <b className="text-tt-blue">автоматической</b> проверкой тестов и получайте <b className="text-tt-blue">статистику</b> в удобном для Вас формате
                            </Card>
                        </div>
                        <div className="flex flex-col gap-def">
                            <Card label="Группируйте контент">
                                создавайте <b className="text-tt-blue">каналы</b> с разной степенью доступа и <b className="text-tt-blue">разделы</b> для более удобной организации ваших тестов
                            </Card>
                            <Card label="Не тратьте время зря">
                                используйте уже <b className="text-tt-blue">готовый</b> тесты и вопросы из <b className="text-tt-blue">банка    </b>, которые вам подходят
                            </Card>
                        </div>
                    </div>
                    <div className="text-tt-darkgray">
                        ...и не только!
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-tt-white py-[64px]">
            <div className="w-[626px] flex flex-col items-center gap-big">
                <div className="text-title font-bold">
                    Подойдет всем
                </div>
                <div className="flex flex-col gap-def">
                    <Card label="Вы учитель?">
                        <b className="text-tt-blue">Откажитесь</b> от рутинной работы и доверьте ее нам! 
                    </Card>
                    <Card label="Вы репетитор?">
                        Используйте наш сервис для хранения и предоставления своим ученикам пробников по <b className="text-tt-blue">ЕГЭ и ОГЭ</b>!
                    </Card>
                    <Card label="Вы ученик?">
                        <b className="text-tt-blue">Проверьте свои знания</b> в удобном формате, самостоятельно или при помощи преподавателя!
                    </Card>
                </div>
            </div>
        </section>
        <section className="bg-tt-lightgray py-[64px] w-full flex justify-center">
            <div className="w-[626px] flex flex-col items-center gap-big">
                <div className="text-title font-bold">
                    Заинтересованы?
                </div>
                <div className="text-tt-darkgray text-center">
                    Попробуйте сейчас или напишите нам для консультации!
                </div>
                <div className="flex gap-regular">
                    <Button stretch href="/signup">Попробовать</Button>
                    <Button stretch>Оставить заявку</Button>
                </div>
            </div>
        </section>
    </div>
}