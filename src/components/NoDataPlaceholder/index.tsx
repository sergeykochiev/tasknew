import { FC } from "react"

const NoDataPlaceholder: FC<{
}> = ({
}) => {
    return <div className="w-[848px] h-[128px] grid place-items-center text-gray-500">
        Ничего не найдено
    </div>
}

export default NoDataPlaceholder