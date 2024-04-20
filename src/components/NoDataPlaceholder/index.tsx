import { FC } from "react"

const NoDataPlaceholder: FC<{
    placeholder?: string
}> = ({
    placeholder
}) => {
    return <div className="w-[848px] h-[128px] grid place-items-center text-gray-500">
        {placeholder ? placeholder : "Ничего не найдено"}
    </div>
}

export default NoDataPlaceholder