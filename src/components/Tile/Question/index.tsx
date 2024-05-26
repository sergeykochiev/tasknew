import React from 'react'

interface QuestionTileProps {
    data: Question
    children: React.ReactNode //variants
    inactive?: boolean
}

const QuestionTile = ({ inactive = false, ...p }: QuestionTileProps) => {
    return (
        <div className={`${!inactive && "hover-default group cursor-pointer"} transition-all p-5 flex flex-col gap-5 text-base font-normal justify-between all-default`}>
            {p.data.label}
            <div className='grid grid-cols-2 gap-4 auto-rows-auto has-[:only-child]:grid-cols-1'>
                {p.children}
            </div>
        </div>
    )
}

export default QuestionTile