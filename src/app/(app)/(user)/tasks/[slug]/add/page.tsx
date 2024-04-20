"use client"

import { TempDB, updateRecord } from "@/common/helpers";
import QuestionStruct from "@/common/types/data-sctructures/question";
import AnswerOrQuestionType from "@/common/types/data-sctructures/question/answerOrQuestionType";
import VariantStruct from "@/common/types/data-sctructures/question/variant";
import TaskStruct from "@/common/types/data-sctructures/task";
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import TextArea from "@/components/TextArea";
import VariantTIle from "@/components/Tile/Variant";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

export default function Page({ params }: { params: { slug: string }}) {
    const router = useRouter()
    const formId = useId()
    const [variants, setVariants] = useState<Array<VariantStruct>>([])
    const [isTextarea, setTextarea] = useState<boolean>(false)
    const [isValidated, setIsValidated] = useState<boolean>(false)
    const [questionLabel, setQuestionLabel] = useState<string>("")
    const [textareaVariant, setTextareaVariant] = useState<string>("")
    const onSubmit = async () => {
        const evaluateQuestionType = (): AnswerOrQuestionType => {
            if (isTextarea) {
                if (isValidated) return "validatedtext"
                return "text"
            }
            if (variants.filter(e => e.correct).length > 1) return "multivariant"
            return "singlevariant"
        }
        const db = new TempDB()
        const questions = await db.get("questions")
        const questionId = questions[questions.length - 1].id + 1
        const newQuestion: QuestionStruct = {
            id: questionId,
            label: questionLabel,
            taskId: (await db.get("tasks")).find((e: TaskStruct) => e.slug == params.slug).id,
            questionType: evaluateQuestionType()
        }
        
        await updateRecord("questions", newQuestion)
        if (isTextarea && isValidated) await updateRecord("variants", {
            answer: textareaVariant,
            correct: true
        })
        else if (isTextarea) {}
        else {
            for (let i = 0; i < variants.length; i++) {
                variants[i].questionId = questionId
                await updateRecord("variants", variants[i])
            }
        }

        router.push(`/tasks/${params.slug}/questions`)
    }
    const addVariant = () => {
        const l = variants.length
        if (l >= 10) return
        const newVariant = {
            label: "Вариант",
            correct: false,
            questionId: 0
        }
        if (!variants[l + 1]) variants.push(newVariant)
        else variants[l + 1] = newVariant
        setVariants([...variants])
    }

    const updateVariant = (index: number, correct: boolean, label: string) => {
        variants[index].correct = correct
        variants[index].label = label
        setVariants([...variants])
    }

    const deleteVariant = (index: number) => {
        variants.splice(index, 1)
        setVariants([...variants])
    }

    return ( <>
        <PageHeaderEvo>
            <HeadingTab>Добавление вопроса</HeadingTab>
            <ButtonGroup>
                {!isTextarea && <Button onClick={addVariant}>Добавить вариант</Button>}
                <Button color="blue" onClick={onSubmit}>Создать</Button>
                <Button onClick={() => console.log(JSON.stringify(variants))}>Вывести варианты</Button>
            </ButtonGroup>
        </PageHeaderEvo>
        <div className="w-[848px] flex flex-col gap-[16px] items-end" id={formId}>
            <TextArea valueState={[questionLabel, setQuestionLabel]} placeholder="Название" name="label" required small/>
            <LabeledCheckboxBar checkedState={[isTextarea, setTextarea]} label="Развернутый ответ"/>
            {isTextarea ? <>
                <LabeledCheckboxBar checkedState={[isValidated, setIsValidated]} label="Проверяется автоматически"/>
                {isValidated && <TextArea placeholder="Правильный ответ" valueState={[textareaVariant, setTextareaVariant]} required/>}
            </> : <>
                {variants.length > 0 ? variants.map((e, i) => <VariantTIle key={i} func={[updateVariant, deleteVariant]} index={i} data={e}/>) : <NoDataPlaceholder placeholder="Ни одного варианта не добавлено"/>}
            </>}
        </div>
    </>    
    )
}