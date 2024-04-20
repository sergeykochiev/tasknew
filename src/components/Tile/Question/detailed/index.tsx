import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import QuestionStruct from "@/common/types/data-sctructures/question"
import VariantStruct from "@/common/types/data-sctructures/question/variant"
import { FC } from "react"

interface DetailedQuestionTileProps extends ListEntryTileComponentProps<QuestionStruct> {
    variants: Array<VariantStruct>
    index: number
}

const DetailedQuestionTIle: FC<DetailedQuestionTileProps> = ({ light = false, data, index, onClick }) => {
    return (
        <div onClick={() => onClick && onClick(data)} className="tile-content flex h-[56px] w-full text-[16px] items-center justify-start px-[20px] gap-[6px] bg-tile-gray rounded-[16px]">
            <b>{index}.</b>{data.label}
        </div>
    )
}

export default DetailedQuestionTIle