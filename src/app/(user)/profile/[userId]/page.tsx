import { PROFILES, USERS } from "@/common/temp-data"
import BackgroundGridBig from "@/components/BackgroundGrid/Big"
import DefButton from "@/components/Button"
import ButtonGroup from "@/components/ButtonGroup"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import PageHeaderEvo from "@/components/PageHeaderEvo"
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab"
import Tile from "@/components/Tile/Regular"

export default function Page({ params }: { params: { userId: number }}) {
    const user = USERS.find(e => e.id == params.userId)
    const profile = PROFILES.find(e => e.userId == params.userId)
    return ( user && profile ? <>
        <PageHeaderEvo>
            <HeadingTab>{"Профиль " + user.nickname}</HeadingTab>
            <ButtonGroup>
                <DefButton color="blue" redirectTo="/tasks/created">Задания</DefButton>
                <DefButton color="blue" redirectTo="/tasks/created">Каналы</DefButton>
            </ButtonGroup>
        </PageHeaderEvo>
        <BackgroundGridBig />
        <div className="grid w-[848px] gap-[16px] auto-rows-[128px] grid-cols-6x128">
            <Tile size="2x2">{profile.avatar}</Tile>
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