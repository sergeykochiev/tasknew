import { FC } from "react"

const ButtonGroup: FC<{
    children: Array<React.ReactElement> | React.ReactElement
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