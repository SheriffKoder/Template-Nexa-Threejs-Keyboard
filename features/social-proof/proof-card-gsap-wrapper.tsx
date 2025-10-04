'use client'
import React, { useState, useRef, useEffect } from 'react'
import { testimonials_content } from '@/section-contents'
import ProofCard from '@/app/development/testimonials/proof-card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProofCardGsapWrapper = ({sectionRef}: {sectionRef: React.RefObject<HTMLDivElement>}) => {
  const [hoveredCardId, setHoveredCardId] = useState<string>('')
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Set initial positions for all cards (center of container)
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0.8,
          opacity: 0
        })
      }
    })

    // Create ScrollTrigger animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        // Animate cards to their configured positions
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const cardData = testimonials_content.cards[index]
            if (cardData) {
              // Convert percentage strings to pixel values
              const containerWidth = sectionRef.current?.offsetWidth || 0
              const containerHeight = sectionRef.current?.offsetHeight || 0
              
              const xPercent = parseFloat(cardData.position.x.toString().replace('%', ''))
              const yPercent = parseFloat(cardData.position.y.toString().replace('%', ''))
              
              const xPixels = (xPercent / 100) * containerWidth - (containerWidth / 2)
              const yPixels = (yPercent / 100) * containerHeight - (containerHeight / 2)
              
              gsap.to(card, {
                x: xPixels,
                y: yPixels,
                rotation: cardData.position.rotate,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                delay: index * 0.2,
                ease: "back.out(1.7)"
              })
            }
          }
        })
      },
      onLeave: () => {
        // Reset cards to initial positions when leaving
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut"
            })
          }
        })
      },
      onEnterBack: () => {
        // Re-animate when scrolling back up
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const cardData = testimonials_content.cards[index]
            if (cardData) {
              // Convert percentage strings to pixel values
              const containerWidth = sectionRef.current?.offsetWidth || 0
              const containerHeight = sectionRef.current?.offsetHeight || 0
              
              const xPercent = parseFloat(cardData.position.x.toString().replace('%', ''))
              const yPercent = parseFloat(cardData.position.y.toString().replace('%', ''))
              
              const xPixels = (xPercent / 100) * containerWidth - (containerWidth / 2)
              const yPixels = (yPercent / 100) * containerHeight - (containerHeight / 2)
              
              gsap.to(card, {
                x: xPixels,
                y: yPixels,
                rotation: cardData.position.rotate,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                delay: index * 0.2,
                ease: "back.out(1.7)"
              })
            }
          }
        })
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
        <div className='relative w-full flex-1 mt-8 flex items-center justify-center'>
        {testimonials_content.cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="absolute"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <ProofCard 
                cardInfo={card} 
                cardsLength={testimonials_content.cards.length}
                onHover={setHoveredCardId}
                isAnyCardHovered={hoveredCardId !== ''}
              />
            </div>
        ))}
        </div>
  )
}

export default ProofCardGsapWrapper