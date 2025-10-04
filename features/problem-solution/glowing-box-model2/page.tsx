import React from 'react'
import GlowingBoxWrapper from './MaterialWrapper'

const page = () => {
  return (
    <div className="h-screen md:min-h-[700px]
    flex flex-col items-center justify-center bg-black border border-white">
      <GlowingBoxWrapper />
    </div>
  )
}

export default page
