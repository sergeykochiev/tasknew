import React, { FC } from 'react'
import SideGridLayout from '../../bones/layout/side'
import CenterGridLayout from '../../bones/layout/center'
import { uid } from 'uid'
import BlankTile from '@/components/Tile/Blank'

export const ListGrid: FC<{
    children: React.ReactNode
    light: boolean
    btCount: number
}> = ({
    children,
    light,
    btCount = 18
}) => {
  const blankTiles = Array(btCount)
  for (let i = 0; i < btCount; i++) {
      blankTiles[i] = Math.random() > 0.333
  }

  const renderBlankTiles = blankTiles.map(e => <BlankTile light={light} visible={e} key={uid()}></BlankTile>)
  
  return (
    <div className='flex justify-center gap-[16px]'>
      <CenterGridLayout>
        {children}
        {renderBlankTiles}
      </CenterGridLayout>
    </div>
  )
}
