"use client"

import { FC, HTMLAttributes, useId } from "react"
import Button from "../Button"
import HeadingTab from "../PageHeader/HeadingTab"
import LinkButton from "../Button/LinkButton"
import Bar from "../Bar"
import ButtonGroup from "../ButtonGroup"
import LinkHeadingTab from "../PageHeader/HeadingTab/LinkHeadingTab"

interface PaginationProps extends HTMLAttributes<HTMLElement> {
    lastPage: number
    page: number
    onPageChange?: (page: number) => void
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
}) => {
    console.log(lastPage, page)
    const id = useId()
    return (
        <div className={`flex ${className} z-10`}>
            <Bar>
                {page - 1 == 0 ? <div className="h-[41px] aspect-square"></div> : <LinkButton square href={`?${queryParam}=${page - 1}`} onClick={() => onPageChange && onPageChange(page - 1)}>{"<"}</LinkButton>}
                <ButtonGroup>
                    {Array(numberOfLinks).fill(1).map((e, i) => {
                        const a = numberOfLinks - i + 1
                        if (a > page) return <div className="h-[41px] aspect-square"></div>
                        return <LinkHeadingTab name={id} square key={page - a + 1} href={`?${queryParam}=${page - a + 1}`} onClick={() => onPageChange && onPageChange(page - a + 1)}>{page - a + 1}</LinkHeadingTab>
                    })}
                    <HeadingTab>{label ? label + " " + page : page}</HeadingTab>
                    {Array(numberOfLinks).fill(1).map((e, i) => {
                        if (i + 1 > lastPage + 1 - page) return <div className="h-[41px] aspect-square"></div>
                        return <LinkHeadingTab name={id} square key={page + i + 1} href={`?${queryParam}=${page + i + 1}`} onClick={() => onPageChange && onPageChange(page + i + 1)}>{page + i + 1}</LinkHeadingTab>
                    })}
                </ButtonGroup>
                {lastPage + 1 == page ? <div className="h-[41px] aspect-square"></div> : <LinkButton square href={`?${queryParam}=${page + 1}`} onClick={() => onPageChange && onPageChange(page + 1)}>{">"}</LinkButton>}
            </Bar>
        </div>
    )
}

export default Pagination