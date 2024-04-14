import React, { FC } from 'react'

const Mask: FC<{ light: boolean }> = ({ light }) => {
  return (
    <div className={`absolute aspect-square bg-gradient-to-b self-end ${light ? "from-tile-gray to-white" : "from-[#3e3e3e] to-bg-dark"}`}></div>
  )
}

export default Mask