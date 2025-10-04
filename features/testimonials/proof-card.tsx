'use client'
import React, { useState } from 'react'

const ProofCard = ({cardInfo, cardsLength, onHover, isAnyCardHovered}: {cardInfo: {
    id: string,
    description: string,
    name: string,
    position: {
        y: number   | string,
        x: number   | string,
        rotate: number   | string,
        zindex: number,
    },
}, cardsLength: number, onHover: (cardId: string) => void, isAnyCardHovered: boolean}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Determine if this card has the highest z-index
  const isHighestZIndex = cardInfo.position.zindex === cardsLength
  
  // Calculate z-index based on hover state
  const currentZIndex = isHovered ? cardsLength + 1 : cardInfo.position.zindex
  
  // Determine background color
  const backgroundColor = isHovered 
    ? 'bg-[#753f00]' // Primary background when hovered
    : isHighestZIndex && !isAnyCardHovered
      ? 'bg-[#753f00]' // Original background for highest z-index cards when no other is hovered
      : 'bg-primary/20' // Grey background for other cards or when any card is hovered

  return (
        <div 
          className={`rounded-md ${backgroundColor} border border-primary/10 text-white p-4 w-full md:w-[400px] h-[250px]
          flex flex-col items-start justify-start italic transition-all cursor-pointer group`}
          style={{
              zIndex: currentZIndex,
          }}
           onMouseEnter={() => {
             setIsHovered(true)
             onHover(cardInfo.id)
           }}
           onMouseLeave={() => {
             setIsHovered(false)
             onHover('')
           }}
        >
            
            <p className='paragraph2 text-center mt-auto'>
                {cardInfo.description}
            </p>

            <h3 className='mt-auto font-bold text-xs uppercase ml-auto' style={{fontWeight: '500'}}>{cardInfo.name}</h3>

        </div>
  )
}

export default ProofCard
