import BackgroundGridSmall from "@/components/BackgroundGrid/Small"
import NoDataPlaceholder from "../NoDataPlaceholder"
import { Dispatch, FC, SetStateAction } from "react"
import InputField from "../InputField"

interface ContentContainerProps<T> {
    data: Array<T>
    Component: FC<{ data: T }>
    searchState?: [string, Dispatch<SetStateAction<string>>]
    searchableInitially?: boolean
}

export default function ContentContainer<T>({ data, Component, searchState, searchableInitially = false }: ContentContainerProps<T>) {
    return (
        <div className="flex flex-col gap-[16px] w-[848px]">
            {(searchableInitially || data.length > 0) && <InputField value={searchState![0]} setValue={searchState![1]} placeholder="Поиск"></InputField>}
            {data.length > 0 ? <>
                <div className="grid gap-[16px] auto-rows-[128px] grid-cols-6x128">
                    {data.map(e => <Component data={e} />)}
                </div>
                <BackgroundGridSmall/>
            </> : <NoDataPlaceholder />}
        </div>
    )
}