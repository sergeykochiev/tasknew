import React, { FC } from 'react'
import SideGridLayout from '../../bones/layout/side'
import CenterGridLayout from '../../bones/layout/center'
import BlankTile from '@/components/Tile/Blank'
import { uid } from 'uid'

export const ProfileGrid: FC<{
    children: React.ReactNode
    light: boolean
}> = ({
    children,
    light
}) => {
  const blankTiles = Array(54)
  for (let i = 0; i < 54; i++) {
      blankTiles[i] = Math.random() > 0.333
  }

  const renderBlankTiles = blankTiles.map(e => <BlankTile light={light} visible={e} key={uid()}></BlankTile>)
  
  return (
    <div className='flex items-center gap-[16px] z-10'>
      <SideGridLayout>{renderBlankTiles.slice(0,18)}</SideGridLayout>
      <CenterGridLayout>
        {children}
        {renderBlankTiles.slice(18,36)}
      </CenterGridLayout>
      <SideGridLayout>{renderBlankTiles.slice(36,54)}</SideGridLayout>
    </div>
  )
}
