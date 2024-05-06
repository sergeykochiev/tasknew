"use client"

import VariantStruct from "@/common/types/data-sctructures/variant";
import Button from "@/components/Button";
import LabeledCheckboxBar from "@/components/LabeledCheckboxBar";
import NoDataPlaceholder from "@/components/NoDataPlaceholder";
import TextArea from "@/components/TextArea";
import VariantTIle from "@/components/Tile/Variant";
import { useId, useState } from "react";

export default function Page() {
    const formId = useId()
    const [variants, setVariants] = useState<Array<VariantStruct>>([])
    const [isTextarea, setTextarea] = useState<boolean>(false)
    const [isValidated, setIsValidated] = useState<boolean>(false)
    const [questionLabel, setQuestionLabel] = useState<string>("")
    const [textareaVariant, setTextareaVariant] = useState<string>("")

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
        <form className="w-[848px] flex flex-col gap-[16px]" id={formId}>
            <TextArea valueState={[questionLabel, setQuestionLabel]} placeholder="Текст вопроса" name="label" required/>
            <LabeledCheckboxBar checked={isTextarea} onChange={() => setTextarea(!isTextarea)} label="Развернутый ответ"/>
            {isTextarea ? <>
                <LabeledCheckboxBar checked={isValidated} onChange={() => setIsValidated(!isValidated)} label="Проверяется автоматически"/>
                {isValidated && <TextArea placeholder="Правильный ответ" valueState={[textareaVariant, setTextareaVariant]} required/>}
            </> : <>
                {variants.length > 0 ? variants.map((e, i) => <VariantTIle key={i} func={[updateVariant, deleteVariant]} index={i} data={e}/>) : <NoDataPlaceholder placeholder="Ни одного варианта не добавлено"/>}
            </>}
        </form>
        <Button type="submit" id={formId}>Создать</Button>
    </> )
}