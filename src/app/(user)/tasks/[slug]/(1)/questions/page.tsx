"use client"

import TempDB from "@/common/helpers/local-db"
import { CURRENT_USER, QUESTIONS, TASKS } from "@/common/temp-data"
import QuestionStruct from "@/common/types/data-sctructures/question"
import TaskStruct from "@/common/types/data-sctructures/task"
import DefButton from "@/components/Button"
import ContentContainer from "@/components/ContentContainer"
import NoDataPlaceholder from "@/components/NoDataPlaceholder"
import QuestionTIle from "@/components/Tile/Question"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    useEffect(() => {
        const fetchChannels = async () => {
            const db = new TempDB()
            const tasks = (await db.get("tasks")) as Array<TaskStruct>
            const currentTask = tasks.find(e => e.slug == params.slug)
            if (!currentTask) return
            const questions = (await db.get("questions")) as Array<QuestionStruct>
            setQuestions(questions.filter(e => e.taskId == currentTask.id))
        }
        fetchChannels()
    }, [])
    const [questions, setQuestions] = useState<Array<QuestionStruct>>()
    if (!questions) return <NoDataPlaceholder/>
    return ( <div className="w-[848px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px]">
            {questions.map((e, i) => <QuestionTIle data={e} index={i + 1}/>)}
        </div>
    </div>  
    )
}