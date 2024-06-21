"use client"

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ChannelTile from "@/components/Tile/Channel";
import PublicChannelTile from "@/components/Tile/Channel/Public";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    return <div className="flex flex-col gap-big w-[1274px]">
        <div className="font-bold text-heading">Каналы</div>
        <PublicChannelTile tasksCount={3} onClick={() => router.push("/my-channels/0")}/>
        <div className="flex flex-col gap-regular">
            <div className="flex gap-regular">
                <InputField placeholder="Поиск каналов" required/>
                <Button onClick={() => router.push("/my-channels/create")}>Создать канал</Button>
            </div>
            <div className="grid grid-cols-2 gap-tiny">
                {Array(10).fill(1).map((e, i) => <ChannelTile sectionCount={3} onClick={() => router.push(`/my-channels/${i}`)} data={{
                    label: "Название канала"
                }}/>)}
            </div>
        </div>
    </div>
}