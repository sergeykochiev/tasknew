import { HTMLAttributes } from "react"

export interface ListEntryTileComponentProps<T> extends HTMLAttributes<HTMLElement> {
    data: Partial<T>
    onClick?: () => void
}