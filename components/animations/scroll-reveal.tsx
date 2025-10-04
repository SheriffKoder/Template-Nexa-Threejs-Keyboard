'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  start?: string
  y?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  start = 'top 80%',
  y = '20%'
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Set initial state
    gsap.set(element, {
      filter: 'blur(10px)',
      y: y,
      opacity: 0.7
    })

    // Create animation
    const animation = gsap.to(element, {
      filter: 'blur(0px)',
      y: '0%',
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: 'power2.out'
    })

    // Create scroll trigger
    ScrollTrigger.create({
      trigger: element,
      start: start, // Configurable start position
      animation: animation,
      toggleActions: 'play none none reverse'
    })

    // Cleanup
    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [delay, duration, start, y])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
