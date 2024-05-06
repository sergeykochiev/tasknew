"use client"

import { CURRENT_USER, QUESTIONS, TASKS, VARIANTS } from "@/common/temp-data";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import QuestionTIle from "@/components/Tile/Question"
import DetailedQuestionTIle from "@/components/Tile/Question/detailed";
import { useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    const deleteQuestion = async (index: number) => {
        questions.splice(index, 1)
        setQuestions([...questions])
    }

    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return <NoDataPlaceholder/>
    const [questions, setQuestions] = useState<Array<QuestionStruct>>(QUESTIONS)
    const isMine = CURRENT_USER.id == task.creatorId

    return ( <div className="w-[848px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px]">
            {questions.map((e, i) => isMine ? <DetailedQuestionTIle index={i} data={e} variants={!e.isText ? VARIANTS.slice(0,4) : VARIANTS.slice(4,)} deleteFunction={() => deleteQuestion(i)}/> : <QuestionTIle data={e} index={i + 1}/>)}
        </div>
    </div>  
    )
}