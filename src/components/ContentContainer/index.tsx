"use client"

import NoDataPlaceholder from "../NoDataPlaceholder"
import { Dispatch, FC, SetStateAction } from "react"
import InputField from "../InputField"
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"
import BackgroundGridSide from "../BackgroundGrid/side"

interface ContentContainerProps<T> {
    data: Array<T>
    Component: FC<ListEntryTileComponentProps<T>>
    searchState?: [string, Dispatch<SetStateAction<string>>]
    searchable?: boolean
    searchableInitially?: boolean
    onClick?: (data: T) => void
}

export default function ContentContainer<T extends { id: number }>({ data, Component, searchState, searchable = true, searchableInitially = false, onClick }: ContentContainerProps<T>) {
    return (
        <div className={`flex flex-col ${searchable && "gap-[16px]"} items-center`}>
            <div className="w-[848px]">{searchable && (searchableInitially || data) && <InputField value={searchState![0]} onChange={e => searchState![1](e.target.value)} placeholder="Поиск"></InputField>}</div>
            {data && data.length > 0 ? <div className="flex gap-[16px]">
                <BackgroundGridSide chance={data ? (data.length / 8) : 0} toRight={false}/>
                <div className="grid gap-[16px] grid-rows-4x128 grid-cols-6x128">
                    {data.map(e => <Component data={e} key={e.id} onClick={onClick}/>)}
                    {Array(8 - data.length).fill(<Component/>)}
                </div>
                <BackgroundGridSide chance={data ? data.length / 8 : 0}/>
            </div> : <NoDataPlaceholder />}
        </div>
    )
}