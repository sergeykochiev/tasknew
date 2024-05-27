"use client"

import { QUESTIONS, VARIANTS } from "@/common/temp-data"
import VariantStruct from "@/common/types/data-sctructures/variant"
import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import InputField from "@/components/InputField"
import LabeledCheckbox from "@/components/LabeledCheckbox"
import QuestionTile from "@/components/Tile/Question"
import VariantTIle from "@/components/Tile/Variant"
import { useId, useState } from "react"
import { HiOutlineXMark } from "react-icons/hi2";

export default function Page() {
    const id = useId()
    return <InnerPage key={id}/>
}

function InnerPage() {
    const [questions, setQuestions] = useState<Question[]>([])
    const [createMode, setCreateMode] = useState<Boolean>(false)
    const [variants, setVariants] = useState<VariantStruct[]>([{label: "label", correct: false}])
    return <div className="flex gap-5 flex-col">
        {!createMode && <Button stretch onClick={() => setCreateMode(true)}>Создать вопрос</Button>}
        {createMode && <div className="outline-default p-5 rounded-outer-box flex flex-col gap-5">
            <label className="flex gap-5 items-center">
                Описание
                <InputField placeholder="Введите описание вопроса"/>
            </label>
            <LabeledCheckbox label="Выложить в каталог"/>
            <Button stretch onClick={() => setVariants([...variants, new VariantStruct("label", false)])}>Добавить вариант ответа</Button>
            {variants.length !== 0 && <div className="flex flex-col gap-4">
                {variants.length < 2 ? variants.map((e, i) => <InputField key={i} defaultValue="Вариант ответа"/>) : variants.map((e, i) => <div key={i} className="flex gap-4 items-center">
                    <Checkbox/>
                    <InputField defaultValue={"Вариант " + (i + 1)}/>
                    <Button square onClick={() => {
                        variants.splice(i, 1)
                        setVariants([...variants])
                    }}><HiOutlineXMark size={20}/></Button>
                </div>)}
            </div>}
            <div className="flex gap-2">
                <Button stretch onClick={() => setCreateMode(false)}>Отмена</Button>
                <Button stretch onClick={() => {
                    setQuestions([...questions, QUESTIONS[Math.floor(Math.random()*5)]])
                    setCreateMode(false)
                }}>Готово</Button>
            </div>
        </div>}
        <div className="flex flex-wrap gap-5 w-full">
            {questions.length ? questions.map(e => <QuestionTile key={e.id} inactive data={e}>
                {Math.random() > 0.5 ? VARIANTS.slice(0,4).map((e, i) => <VariantTIle key={i} data={e}/>) : <InputField readOnly value={VARIANTS[4].label}/>}
            </QuestionTile>) : <div className="w-full flex items-center justify-center p-5 text-xs">Для этого задания не добавлено ни одного вопроса</div>}
        </div>
    </div>
}