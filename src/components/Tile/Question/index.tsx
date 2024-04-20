import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import QuestionStruct from "@/common/types/data-sctructures/question"
import AnswerOrQuestionType from "@/common/types/data-sctructures/question/answerOrQuestionType"
import { FC } from "react"

interface QuestionTileProps extends ListEntryTileComponentProps<QuestionStruct> {
    deleteQuestion?: (id: number) => void
    index: number
}

const QuestionTIle: FC<QuestionTileProps> = ({ light = false, data, deleteQuestion, onClick, index }) => {
    const questionTypesMap: Record<AnswerOrQuestionType, string> = {
        "multivariant": "Несколько вариантов",
        "singlevariant": "Один вариант",
        "text": "Развернутый",
        "validatedtext": "Развернутый с автопроверкой"
    }
    return (
        <div onClick={() => onClick && onClick(data)} className="tile-content tile-inactive flex h-[56px] w-full text-[16px] items-center justify-between px-[24px] gap-[6px] bg-tile-gray rounded-[16px]">
            <div className="overflow-hidden text-ellipsis flex gap-[6px]"><b>{index}.</b>{data.label}</div>
            <div className="text-[12px] flex items-center gap-[16px]">{questionTypesMap[data.questionType]}{deleteQuestion && <div onClick={() => deleteQuestion(data.id)}><img className=" fill-tile-red" src="/mdi_delete.svg"></img></div>}</div>
        </div>
    )
}

export default QuestionTIle