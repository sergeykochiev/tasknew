"use client"

import { sourceCodePro } from "@/common/fonts";
import { TASKS } from "@/common/temp-data";
import DefButton from "@/components/Button";
import DefInput from "@/components/InputField";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const CodeInputSection: FC = () => {
    const [code, setCode] = useState<string>('')
    const router = useRouter()

    const onclick = () => {
        const foundTask = TASKS.find(e => e.identifier == code)
        if (!foundTask) {
            alert("No task with that code")
            return
        }
        router.push(`/tasks/${foundTask.id}`)
    }

    return ( 
            <div className={`w-full h-[272px] flex flex-col gap-[32px] dark-gray justify-center items-center`}>
                <div className={`${sourceCodePro.className} font-bold text-[20px]`}>
                    У вас уже есть код?
                </div>
                <div className="flex gap-[16px]">
                    <div className="w-[272px]"><DefInput placeholder="Код" value={code} setValue={setCode} light={false}/></div>
                    <div className="w-[128px]"><DefButton color="blue" onClick={onclick}>Найти</DefButton></div>
                </div>
            </div>
    )
}

export default CodeInputSection