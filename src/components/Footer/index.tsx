import Link from "next/link"

const Footer = () => {
    return (
        <div className="text-[16px] w-full h-[400px] flex justify-center items-center py-[64px] bg-tile-gray">
            <div className="w-[848px] h-full flex gap-[32px]">
                <div className="flex flex-col gap-[16px] text-bg-dark">
                    <div className="font-bold text-[20px]">TASK TYCOON</div>
                    <Link href="/tasks/solved">Задания</Link>
                    <Link href="/channels/subscribed">Каналы</Link>
                    <Link href="/subscribtions">Подписки</Link>
                    <Link href="/profile">Профиль</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer