"use client"

import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import VariantStruct from "@/common/types/data-sctructures/variant"
import DefButton from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import { FC, useEffect, useState } from "react"

interface VariantTileProps extends ListEntryTileComponentProps<VariantStruct> {
    func: [(index: number, correct: boolean, label: string) => void, (index: number) => void]
    index: number
}

const VariantTIle: FC<VariantTileProps> = ({ light = false, data, index, func }) => {
    const [updateVariant, deleteVariant] = func
    const [correct, setCorrect] = useState<boolean>(data.correct || false)
    const [label, setLabel] = useState<string>(data.label)
    useEffect(() => {
        updateVariant(index, correct, label)
    }, [correct, label])
    return (
        <div className="tile-content tile-inactive flex h-[56px] w-full text-[16px] items-center justify-between px-[20px] gap-[16px] bg-tile-gray rounded-[16px]">
            <div className="flex gap-[16px] w-full items-center">
                <Checkbox checked={correct} onChange={() => setCorrect(!correct)}/>
                <input placeholder="Название варианта" className="bg-tile-gray text-[16px] outline-none w-full p-0 m-0 text-bg-dark" value={label} onChange={e => setLabel(e.target.value)} type="text" required/>
            </div>
            <DefButton color="red" onClick={() => deleteVariant(index)}><img src="/mdi_delete.svg"></img></DefButton>
        </div>
    )
}

export default VariantTIle