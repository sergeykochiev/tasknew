"use client"

import { CURRENT_USER, PROFILES, USERS } from "@/common/temp-data";
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import Tile from "@/components/Tile/Regular"

export default function Page() {
    const profile = PROFILES.find(e => e.userId == CURRENT_USER.id)
    if (!profile) return <NoDataPlaceholder/>
    
    return <div className="flex justify-center relative">
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{profile.avatar}</Tile>
            <Tile align="bottom" name="Имя">{profile.first_name}</Tile>
            <Tile size="2x1" name="E-mail">{CURRENT_USER.email}</Tile>
            <Tile name="Фамилия">{profile.last_name}</Tile>
            <Tile size="2x1" name="Статус">{CURRENT_USER.status}</Tile>
            <Tile size="2x1">
                <Tile kind="bigtext" name="Заданий пройдено">1</Tile>
                <Tile kind="bigtext" name="Заданий создано">1</Tile>
            </Tile>
        </div>
    </div>
}