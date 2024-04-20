export interface ListEntryTileComponentProps<T> {
    light?: boolean
    data: T
    onClick?: (data: T) => void
}