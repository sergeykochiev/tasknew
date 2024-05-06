"use client"

import { PROFILES, USERS } from "@/common/temp-data";
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"

export default function Page({ params }: { params: { userId: string }}) {
    const user = USERS.find(e => e.id == Number(params.userId))
    if (!user) return <NoDataPlaceholder/>
    const profile = PROFILES.find(e => e.userId == user.id)
    if (!profile) return <NoDataPlaceholder/>
    
    return <div className="flex justify-center relative">
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{profile.avatar}</Tile>
            {profile.visible ? <>
                <Tile align="bottom" name="Имя">{profile.first_name}</Tile>
                <Tile size="2x1" name="E-mail">{user.email}</Tile>
                <Tile name="Фамилия">{profile.last_name}</Tile>
                <Tile size="2x1" name="Статус">{user.status}</Tile>
                <Tile size="2x1">
                    <Tile big name="Заданий пройдено">1</Tile>
                    <Tile big name="Заданий создано">1</Tile>
                </Tile>
            </> : <Tile size="4x2" align="center" color="mid-gray" className="outline outline-[2px] outline-tile-gray">Данные скрыты</Tile>}
        </div>
    </div>
}