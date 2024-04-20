import { FC } from "react"

const ButtonGroup: FC<{
    children: Array<React.ReactElement> | React.ReactNode
}> = ({
    children
}) => {
    return (
        <div className="flex gap-[8px]">
            {children}
        </div>
    )
}

export default ButtonGroup