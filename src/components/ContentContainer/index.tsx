import NoDataPlaceholder from "../NoDataPlaceholder"
import { Dispatch, FC, SetStateAction } from "react"
import InputField from "../InputField"
import { createContainerBlankMap } from "@/common/helpers"
import { ListEntryTileComponentProps } from "@/common/types/components/tile-list-entry"

interface ContentContainerProps<T> {
    data?: Array<T>
    Component: FC<ListEntryTileComponentProps<T>>
    searchState?: [string, Dispatch<SetStateAction<string>>]
    searchable?: boolean
    searchableInitially?: boolean
    onClick?: (data: T) => void
}

export default function ContentContainer<T extends { id: number }>({ data, Component, searchState, searchable = true, searchableInitially = false, onClick }: ContentContainerProps<T>) {
    let blankArray: Array<React.ReactNode> = []
    if (data) {
        blankArray = createContainerBlankMap(data.length * 3, 3)
    }
    return (
        <div className="flex flex-col gap-[16px] w-[848px]">
            {searchable && (searchableInitially || data) && <InputField value={searchState![0]} setValue={searchState![1]} placeholder="Поиск"></InputField>}
            {data && data.length > 0 ? <>
                <div className="grid gap-[16px] grid-rows-4x128 grid-cols-6x128">
                    {data.map(e => <Component data={e} key={e.id} onClick={onClick}/>)}
                    {/* <div className="bg-black col-span-2 row-span-1"></div> */}
                    {blankArray}
                </div>
                {/* <BackgroundGridSmall/> */}
            </> : <NoDataPlaceholder />}
        </div>
    )
}