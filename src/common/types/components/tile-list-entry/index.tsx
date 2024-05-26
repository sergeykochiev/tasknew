import { HTMLAttributes } from "react"

export interface ListEntryTileComponentProps<T> extends HTMLAttributes<HTMLElement> {
    data: T
}