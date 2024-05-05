"use client"

import { QUESTIONS, TASKS, VARIANTS } from "@/common/temp-data"
import Button from "@/components/Button"
import LinkButton from "@/components/Button/LinkButton"
import ButtonGroup from "@/components/ButtonGroup"
import PageHeaderEvo from "@/components/PageHeaderEvo"
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab"
import Pagination from "@/components/Pagination"
import TextArea from "@/components/TextArea"
import SolveVariant from "@/components/Tile/Variant/solve"
import { useParams, useSearchParams } from "next/navigation"
import { useId, useState } from "react"

export default function Page({ params }: { params: { slug: string }}) {
    const task = TASKS.find(e => e.slug == params.slug)
    if (!task) return
    const query = useSearchParams()
    const [questionId, setQuestionId] = useState<number>(query.get("question") ? Number(query.get("question")) : 1)
    const formId = useId()
    const question = QUESTIONS[questionId - 1]
    return <>
        <PageHeaderEvo heading={`Решение ` + `"${task.title}"`}>
              <ButtonGroup>
                <HeadingTab>{`Вопрос ` + `${questionId}`}</HeadingTab>
              </ButtonGroup>
              <ButtonGroup>
                  <LinkButton color="blue" href="/tasks/created">Сохранить</LinkButton>
                  <Button type="submit" form={formId}>Отправить</Button>
              </ButtonGroup>
        </PageHeaderEvo>
        <div className="flex flex-col w-[848px] gap-[16px]">
            <div className="flex p-[16px] bg-main-dark text-tile-gray rounded-[16px]">{question.label}</div>
            {question.isText ? <form id={formId} className="w-full"><TextArea light placeholder="Ответ"/></form> : <form id={formId} className="grid gap-[16px] grid-cols-6x128 auto-rows-auto">
                {VARIANTS.slice(0,4).map(e => <SolveVariant>{e.label}</SolveVariant>)}
            </form>}
        </div>
        <Pagination queryParam="question" lastPage={QUESTIONS.length - 1} page={questionId} onPageChange={e => setQuestionId(e)}></Pagination>
    </>
}