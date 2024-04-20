"use client"

import { CURRENT_USER, PROFILES } from "@/common/temp-data";
import BackgroundGridBig from "@/components/BackgroundGrid/Big";
import Button from "@/components/Button";
import LinkButton from "@/components/Button/LinkButton";
import ButtonGroup from "@/components/ButtonGroup";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import Tile from "@/components/Tile/Regular";
import { useRouter } from "next/navigation";

export default function Page() {
    const currentUser = CURRENT_USER
    const currentProfile = PROFILES.find(e => e.userId == currentUser.id)
    if (!currentProfile) return <NoDataPlaceholder />
    const router = useRouter()
    const logout = async () => {
        //implement logout logic
        router.push("/")
        return
    }
    // return ( <>
    //     <BlankPageHeader><div className="font-normal">Профиль</div>{currentUser.nickname}</BlankPageHeader>
    //     <div className="h-full bg-bg-dark flex flex-col items-center z-0 mt-[-4px]">
    //         <div className="flex items-center relative overflow-hidden pt-[4px]">
    //             <div className="absolute w-[1712px] mt-[-856px] aspect-square bg-gradient-radial self-end from-[#3e3e3e] to-bg-dark"></div>
    //             <ProfileGrid light={false}>
    //                 <Tile size="2x2">{currentProfile.avatar}</Tile>
    //                 <Tile align="bottom" name="Имя">{currentProfile.first_name}</Tile>
    //                 <Tile size="2x1" name="E-mail">{currentUser.email}</Tile>
    //                 <Tile kind="button" color="blue" name="Изменить данные"></Tile>
    //                 <Tile kind="bigtext" color="blue" align="bottom-reversed" name="Скрывать для других?">{currentProfile.visible ? "ДА" : "НЕТ"}</Tile>
    //                 <Tile name="Фамилия">{currentProfile.last_name}</Tile>
    //                 <Tile size="2x1">
    //                     <Tile kind="bigtext" name="Заданий пройдено">я хз</Tile>
    //                     <Tile kind="bigtext" name="Заданий создано">как это считать</Tile>
    //                 </Tile>
    //                 <Tile kind="button" color="blue" name="Задания" align="bottom" onClick={() => router.push("/tasks/created")}></Tile>
    //                 <Tile kind="button" color="blue" name="Каналы" onClick={() => router.push("/channels/created")}></Tile>
    //                 <Tile size="3x1" name="Статус">{currentUser.status}</Tile>
    //                 <Tile kind="button" color="red" align="center" name="Выйти"></Tile>
    //             </ProfileGrid>
    //         </div>
    //     </div>
    // </> )
    return ( <>
        <PageHeaderEvo>
            <HeadingTab>{"Профиль " + currentUser.nickname}</HeadingTab>
            <ButtonGroup>
                <LinkButton color="blue" href="/tasks/created">Задания</LinkButton>
                <LinkButton color="blue" href="/channels/created">Каналы</LinkButton>
                <Button color="red" onClick={() => logout()}>Выйти</Button>
            </ButtonGroup>
        </PageHeaderEvo>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2" color="blue">{currentProfile.avatar}</Tile>
            <Tile align="bottom" name="Имя">{currentProfile.first_name}</Tile>
            <Tile size="2x1" name="E-mail">{currentUser.email}</Tile>
            <Tile name="Фамилия">{currentProfile.last_name}</Tile>
            <Tile size="2x1" name="Статус">{currentUser.status}</Tile>
            <Tile size="2x1">
                <Tile kind="bigtext" name="Заданий пройдено">126</Tile>
                <Tile kind="bigtext" name="Заданий создано">34</Tile>
            </Tile>
        </div>
    </> )
}

