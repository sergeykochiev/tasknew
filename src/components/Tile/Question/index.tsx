import { ListEntryTileComponentProps } from '@/common/types/components/tile-list-entry'
import React from 'react'

interface QuestionTileProps extends ListEntryTileComponentProps<Question> {
}

export default function QuestionTile(p: QuestionTileProps) {
    return <div className="transition-all bg-tt-white px-[24px] py-[18px] gap-regular items-center justify-between hover:shadow flex h-full cursor-pointer hover:bg-tt-blue group outline-def outline-tt-gray hover:outline-transparent">
        <div className="whitespace-nowrap overflow-hidden text-ellipsis transition-all font-medium text-subtitle text-tt-black group-hover:text-tt-white">
            {p.data.label}
        </div>
        <div className='transition-all text-caption text-tt-darkgray text-wrap text-ellipsis group-hover:text-tt-lightgray font-medium'>
            {p.data.type}
        </div>
    </div>
}   