"use client"

import { QUESTIONS, TASKS, VARIANTS } from "@/common/temp-data"
import AlertPopup from "@/components/AlertPopup"
import Button from "@/components/Button"
import PageHeader from "@/components/PageHeader"
import HeadingTab from "@/components/PageHeader/HeadingTab"
import PageHeading from "@/components/PageHeading"
import Pagination from "@/components/Pagination"
import TextArea from "@/components/TextArea"
import SolveVariant from "@/components/Tile/Variant/solve"
import { useSearchParams } from "next/navigation"
import { useId, useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return
    const [alert, setAlert] = useState<boolean>(false)
    const query = useSearchParams()
    const [questionId, setQuestionId] = useState<number>(query.get("question") ? Number(query.get("question")) : 1)
    const formId = useId()
    const question = QUESTIONS[questionId - 1]
    return <>
        <PageHeader headings={[<PageHeading>{"Решение " + `"${task.title}"`}</PageHeading>]} tabs={[<HeadingTab>{`Вопрос ` + `${questionId}`}</HeadingTab>]} buttons={
            questionId == QUESTIONS.length ? [<Button color="blue" onClick={() => setAlert(true)}>Отправить</Button>] : [<Button color="blue" onClick={() => setQuestionId(questionId + 1)}>Сохранить</Button>]
        }/>
        <div className="flex flex-col w-[848px] gap-[16px]">
            <div className="flex p-[16px] bg-main-dark text-tile-gray rounded-[16px]">{question.label}</div>
            {question.isText ? <form id={formId} className="w-full"><TextArea placeholder="Ответ"/></form> : <form id={formId} className="grid gap-[16px] grid-cols-6x128 auto-rows-auto">
                {VARIANTS.slice(0,4).map(e => <SolveVariant>{e.label}</SolveVariant>)}
            </form>}
        </div>
        <Pagination queryParam="question" lastPage={QUESTIONS.length - 1} page={questionId} onPageChange={e => setQuestionId(e)}></Pagination>
        {alert && <AlertPopup closeAlert={() => setAlert(false)} label="Вы действительно хотите отправить решение?" actionName="Отправить" action={`/tasks/${params.slug}`}/>}
    </>
}