import { CURRENT_USER, PROFILES } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import { FC, TextareaHTMLAttributes } from "react";

const TileTextarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
    return <textarea {...props} className="outline-none resize-none p-0 bg-transparent text-bg-dark text-[16px]"/>
}
export default function Page() {
    const profile = PROFILES.find(e => e.userId == CURRENT_USER.id)
    if (!profile) return <NoDataPlaceholder/>

    return ( <form className="flex gap-[16px] flex-col">
        <div className="grid gap-[16px] grid-cols-1">
            <InputField type="password" placeholder="Старый пароль" required/>
            <InputField type="password" placeholder="Новый пароль" required/>
            <InputField type="password" placeholder="Повторите новый пароль" required/>
        </div>
        <Button type="submit">Изменить пароль</Button>
    </form> )
}