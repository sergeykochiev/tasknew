import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import VariantStruct from "@/common/types/data-sctructures/variant"
import { FC, useEffect, useState } from "react"

interface VariantTileProps extends ListEntryTileComponentProps<VariantStruct> {
}

const VariantTIle: FC<VariantTileProps> = (p) => {
    return <div className="flex gap-3 items-center text-sm px-4">
        <div className="bg-black group-hover:bg-white h-2 aspect-square rounded-full"/>
        <div>{p.data.label}</div>
    </div>
}

export default VariantTIle