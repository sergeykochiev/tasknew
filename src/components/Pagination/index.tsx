"use client"

import { FC, HTMLAttributes } from "react"
import Button from "../Button"
import HeadingTab from "../PageHeaderEvo/HeadingTab"
import LinkButton from "../Button/LinkButton"

interface PaginationProps extends HTMLAttributes<HTMLElement> {
    lastPage?: boolean
    page: number
    onPageChange?: (page: number) => void
    light?: boolean
}

const Pagination: FC<PaginationProps> = ({
    lastPage = false,
    page,
    onPageChange,
    className,
    light = false
}) => {
    return (
        <div className={`flex pt-[64px] pb-[32px] ${className} z-10`}>
            <div className={`${light ? "bg-tile-gray" : "bg-main-dark"} w-[848px] flex justify-between gap-[8px] rounded-[18px] p-[2px]`}>
                {page - 1 == 0 ? <Button className="opacity-0">{"<"}</Button> : <LinkButton href={`?page=${page - 1}`} onClick={() => onPageChange && onPageChange(page - 1)}>{"<"}</LinkButton>}
                <HeadingTab>{"Страница " + page}</HeadingTab>
                {lastPage ? <Button className="opacity-0">{"<"}</Button> : <LinkButton href={`?page=${page + 1}`} onClick={() => onPageChange && onPageChange(page + 1)}>{">"}</LinkButton>}
            </div>
        </div>
    )
}

export default Pagination