import { FC } from "react"
import ButtonGroup from "../ButtonGroup"
import LinkButton from "../Button/LinkButton"
import Button from "../Button"

interface AlertPopupProps {
    label: string
    actionName: string
    action: (() => void) | string
    closeAlert(): void
}

const AlertPopup: FC<AlertPopupProps> = (props) => {
    return (
        <div className="grid place-items-center fixed z-50 w-screen h-screen">
            <div className="bg-black opacity-50 w-full h-full absolute" onClick={props.closeAlert}/>
            <div className="flex flex-col gap-[16px] p-[16px] text-[16px] rounded-[16px] bg-main-dark text-tile-gray fixed z-50 opacity-100">
                {props.label}
                <ButtonGroup>
                    {typeof props.action == "string" ? <LinkButton stretched color="blue" href={props.action}>{props.actionName}</LinkButton> : <Button color="blue" onClick={props.action}>{props.actionName}</Button>}
                    <Button stretched onClick={props.closeAlert}>Отмена</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default AlertPopup