import { CURRENT_USER, PROFILES } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";

export default function Page() {
    const profile = PROFILES.find(e => e.userId == CURRENT_USER.id)
    if (!profile) return <NoDataPlaceholder/>

    return ( <form className="flex gap-[32px] flex-col">
        <div className="grid gap-[16px] grid-cols-1">
            <InputField type="text" defaultValue={CURRENT_USER.nickname} placeholder="Новый никнейм" required/>
            <InputField type="text" defaultValue={profile.first_name} placeholder="Новое имя" required/>
            <InputField type="text" defaultValue={profile.last_name} placeholder="Новая фамилия" required/>
            <InputField type="email" defaultValue={CURRENT_USER.email} placeholder="Новая почта" required/>
        </div>
        <Button color="blue" type="submit">Сохранить</Button>
    </form> )
}