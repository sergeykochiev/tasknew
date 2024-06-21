import { sourceCodePro } from "@/common/fonts"
import HeaderTab from "./HeaderTab"

export default function Header() {
    return <header className={`${sourceCodePro.className} h-[57px] w-full bg-tt-white flex justify-center`}>
        <div className="flex justify-between items-center w-[1920px]">
            <div className="uppercase text-subtitle font-extrabold text-tt-blue">Task Tycoon</div>
            <div className="flex gap-big">
                <HeaderTab href="/bank" label="Банк"/>
                <HeaderTab href="/my-solutions" label="Мои решения"/>
                <HeaderTab href="/my-channels" label="Мои каналы"/>
                <HeaderTab href="/profile" label="Профиль"/>
            </div>
        </div>
    </header>
}