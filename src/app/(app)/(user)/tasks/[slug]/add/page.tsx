"use client"

import VariantStruct from "@/common/types/data-sctructures/variant";
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
import { QUESTIONS } from "@/common/temp-data";

export default function Page({ params }: { params: { slug: string }}) {
    const router = useRouter()
    const formId = useId()
    const [variants, setVariants] = useState<Array<VariantStruct>>([])
    const [isTextarea, setTextarea] = useState<boolean>(false)
    const [isValidated, setIsValidated] = useState<boolean>(false)
    const [questionLabel, setQuestionLabel] = useState<string>("")
    const [textareaVariant, setTextareaVariant] = useState<string>("")
    const onSubmit = async () => {
        QUESTIONS.push({
            label: questionLabel,
            isText: isTextarea
        })

        router.push(`/tasks/${params.slug}/questions`)
    }
    const addVariant = () => {
        const l = variants.length
        if (l >= 10) return
        const newVariant: VariantStruct = {
            label: "Вариант",
            correct: false
        }
        variants.push(newVariant)
        setVariants([...variants])
        console.log(variants)
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
            </ButtonGroup>
        </PageHeaderEvo>
        <div className="w-[848px] flex flex-col gap-[16px] items-end" id={formId}>
            <TextArea valueState={[questionLabel, setQuestionLabel]} placeholder="Текст вопроса" name="label" required/>
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