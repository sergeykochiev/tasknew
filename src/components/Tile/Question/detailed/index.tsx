import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import VariantStruct from "@/common/types/data-sctructures/variant"
import TextArea from "@/components/TextArea"
import { FC } from "react"

interface DetailedQuestionTileProps extends ListEntryTileComponentProps<QuestionStruct> {
    deleteFunction: () => void
    variants: Array<VariantStruct>
    index: number
}

const DetailedQuestionTIle: FC<DetailedQuestionTileProps> = ({ light = false, data, index, deleteFunction, variants }) => {
    return (
        <div className="tile-content tile-inactive flex flex-col w-full gap-[16px] bg-tile-gray rounded-[16px] p-[16px]">
            <div className="flex text-[16px] items-center justify-between">
                <div className="flex gap-[6px]"><b>{index}.</b>{data.label}</div>
                <div onClick={deleteFunction}><img className=" fill-tile-red" src="/mdi_delete.svg"></img></div>
            </div>
            <div className="px-[16px]">{data.isText ? `Правильный ответ: ${variants.filter(e => e.correct).map(e => e.label)}` : <div className="flex flex-col gap-[8px]">{variants.map((e, i) => <div>{i + 1 + ". " + e.label + (e.correct ? " - Правильный" : "")}</div>)}</div>}</div>
        </div>
    )
}

export default DetailedQuestionTIle