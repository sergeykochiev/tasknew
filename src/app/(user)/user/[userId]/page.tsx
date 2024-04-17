"use client"

import TempDB from "@/common/helpers/local-db"
import { PROFILES, USERS } from "@/common/temp-data"
import ProfileStruct from "@/common/types/data-sctructures/profile"
import TaskStruct from "@/common/types/data-sctructures/task"
import UserStruct from "@/common/types/data-sctructures/user"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import DefButton from "@/components/Button"
import ButtonGroup from "@/components/ButtonGroup"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import PageHeaderEvo from "@/components/PageHeaderEvo"
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab"
import Tile from "@/components/Tile/Regular"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { userId: string }}) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const profiles = (await db.get("profiles")) as Array<ProfileStruct>
            const users = (await db.get("users")) as Array<UserStruct>
            const user = users.find(e => e.id == Number(params.userId))
            const profile = profiles.find(e => e.userId == Number(params.userId))
            setUser(user)
            setProfile(profile)
        }
        fetchChannels()
    }, [])
    const [user, setUser] = useState<UserStruct>()
    const [profile, setProfile] = useState<ProfileStruct>()
    
    return ( user && profile ? <>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{profile.avatar}</Tile>
            <Tile align="bottom" name="Имя">{profile.first_name}</Tile>
            <Tile size="2x1" name="E-mail">{user.email}</Tile>
            <Tile name="Фамилия">{profile.last_name}</Tile>
            <Tile size="2x1" name="Статус">{user.status}</Tile>
            <Tile size="2x1">
                <Tile kind="bigtext" name="Заданий пройдено">1</Tile>
                <Tile kind="bigtext" name="Заданий создано">1</Tile>
            </Tile>
        </div>
    </> : <NoDataPlaceholder /> )
}