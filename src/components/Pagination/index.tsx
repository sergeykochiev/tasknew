"use client"

import { FC, HTMLAttributes } from "react"
import Button from "../Button"
import HeadingTab from "../PageHeaderEvo/HeadingTab"
import LinkButton from "../Button/LinkButton"
import Bar from "../Bar"
import ButtonGroup from "../ButtonGroup"

interface PaginationProps extends HTMLAttributes<HTMLElement> {
    lastPage: number
    page: number
    onPageChange?: (page: number) => void
    light?: boolean
    queryParam?: string
    numberOfLinks?: number
    label?: string
}

const Pagination: FC<PaginationProps> = ({
    lastPage,
    page,
    onPageChange,
    className,
    queryParam = "page",
    numberOfLinks = 3,
    label,
    light = false
}) => {
    console.log(lastPage, page)
    return (
        <div className={`flex pt-[32px] ${className} z-10`}>
            <Bar>
                {page - 1 == 0 ? <Button square className="opacity-0">{"<"}</Button> : <LinkButton square href={`?${queryParam}=${page - 1}`} onClick={() => onPageChange && onPageChange(page - 1)}>{"<"}</LinkButton>}
                <ButtonGroup>
                    {Array(numberOfLinks).fill(1).map((e, i) => {
                        const a = numberOfLinks - i + 1
                        if (a > page) return <Button square className="opacity-0">-</Button>
                        return <LinkButton square color="mid-gray" key={page - a + 1} href={`?${queryParam}=${page - a + 1}`} onClick={() => onPageChange && onPageChange(page - a + 1)}>{page - a + 1}</LinkButton>
                    })}
                    <HeadingTab>{label ? label + " " + page : page}</HeadingTab>
                    {Array(numberOfLinks).fill(1).map((e, i) => {
                        if (i + 1 > lastPage + 1 - page) return <Button square className="opacity-0">-</Button>
                        return <LinkButton square color="mid-gray" key={page + i + 1} href={`?${queryParam}=${page + i + 1}`} onClick={() => onPageChange && onPageChange(page + i + 1)}>{page + i + 1}</LinkButton>
                    })}
                </ButtonGroup>
                {lastPage + 1 == page ? <Button square className="opacity-0">{">"}</Button> : <LinkButton square href={`?${queryParam}=${page + 1}`} onClick={() => onPageChange && onPageChange(page + 1)}>{">"}</LinkButton>}
            </Bar>
        </div>
    )
}

export default Pagination