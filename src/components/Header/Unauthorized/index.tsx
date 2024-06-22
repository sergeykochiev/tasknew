import { sourceCodePro } from "@/common/fonts";
import HeaderTab from "../HeaderTab";

export function UnauthHeader() {
    return <header className={`${sourceCodePro.className} h-[57px] px-[24px] w-full bg-tt-white flex justify-center`}>
        <div className="flex justify-between items-center w-[1920px]">
            <div className="uppercase text-subtitle font-extrabold text-tt-blue">Task Tycoon</div>
            <div className="flex gap-big">
                <HeaderTab href="/" label="Главная"/>
                <HeaderTab href="/my-channels" label="Войти"/>
                <HeaderTab href="/signup" label="Зарегистрироваться"/>
            </div>
        </div>
    </header>
}