import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import { FC } from "react"

interface QuestionTileProps extends ListEntryTileComponentProps<QuestionStruct> {
    index: number
    data: QuestionStruct
}

const QuestionTIle: FC<QuestionTileProps> = ({ data, onClick, index }) => {
    return (
        <div onClick={() => onClick && onClick(data)} className="flex h-[56px] w-full text-[16px] items-center justify-between px-[24px] gap-[6px] bg-tile-gray rounded-[16px]">
            <div className="overflow-hidden text-ellipsis flex gap-[6px]"><b>{index}.</b>{data.label}</div>
            <div className="text-[12px] flex items-center gap-[16px]">{data.isText ? "Развернутый ответ" : "Есть варианты ответа"}</div>
        </div>
    )
}

export default QuestionTIle