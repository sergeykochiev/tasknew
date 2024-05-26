import { QUESTIONS, VARIANTS } from "@/common/temp-data";
import InputField from "@/components/InputField";
import QuestionTile from "@/components/Tile/Question";
import VariantTIle from "@/components/Tile/Variant";
import { useId } from "react";

export default function Page() {
    const id = useId()
    return <InnerPage key={id}/>
}

function InnerPage() {
    return <div className="flex gap-5 flex-col">
        <InputField placeholder="Поиск"/>
        <div className="flex flex-wrap gap-5 w-full">
            {QUESTIONS.map(e => <QuestionTile key={e.id} data={e}>
                {Math.random() > 0.5 ? VARIANTS.slice(0,4).map((e, i) => <VariantTIle key={i} data={e}/>) : <InputField readOnly value={VARIANTS[4].label}/>}
            </QuestionTile>)}
        </div>
    </div>
}