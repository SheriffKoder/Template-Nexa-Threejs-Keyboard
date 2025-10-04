'use client'
import React, { useState, useRef, useEffect } from 'react'
import { testimonials_content } from '@/section-contents'
import ProofCard from '@/features/testimonials/proof-card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProofCardWrapperMobile = ({sectionRef}: {sectionRef: React.RefObject<HTMLDivElement>}) => {


  return (
        <div className='relative w-full flex-1 mt-8 flex flex-col items-center justify-center px-2 py-4 gap-2'>
        {testimonials_content.cards.map((card, index) => (
              <ProofCard 
                cardInfo={card} 
                cardsLength={testimonials_content.cards.length}
                onHover={() => {}}
                isAnyCardHovered={false}
              />
        ))}
        </div>
  )
}

export default ProofCardWrapperMobile