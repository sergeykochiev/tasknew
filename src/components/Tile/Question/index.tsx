import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import QuestionStruct from "@/common/types/data-sctructures/question"
import { FC } from "react"

interface QuestionTileProps extends ListEntryTileComponentProps {
    data: QuestionStruct
    index: number
}

const QuestionTIle: FC<QuestionTileProps> = ({ light = false, data, index }) => {
    return (
        <div className="tile-content flex h-[56px] w-full text-[16px] items-center justify-start px-[20px] gap-[6px] bg-tile-gray rounded-[16px]">
            <b>{index}.</b>{data.label}
        </div>
    )
}

export default QuestionTIle