"use client"
import React, { useState, useRef, useEffect } from 'react'
import ModelWrapper from './coin-model/model-wrapper'
import { how_it_works_content, problem_solution_content } from '@/section-contents'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/animations/scroll-reveal'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const [animateCards, setAnimateCards] = useState(false)
  const [currentStep, setCurrentStep] = useState(-1) // Start with no active step
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return

    // Normalize scroll behavior across devices
    ScrollTrigger.normalizeScroll(true)

    // Detect if mobile
    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile ? 2000 : 750

    // Cooldown period (5 seconds)
    let lastUpdate = 0
    const cooldownPeriod = window.innerWidth < 768 ? 500 : 50 // 5 seconds in milliseconds
    let isInCooldown = false

    // Create ScrollTrigger for pinning the section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: "top top",
      end: `+=${how_it_works_content.steps.length * scrollDistance}vh`, // Dynamic scroll distance based on device
      scrub: 0.01, // Decreased from 1 for less sensitivity
      onUpdate: (self) => {
        // Check cooldown period
        const now = Date.now()
        if (now - lastUpdate < cooldownPeriod) {
          if (!isInCooldown) {
            isInCooldown = true
            console.log("ScrollTrigger in cooldown for 5 seconds")
          }
          return // Skip this update if within cooldown period
        }
        
        // Reset cooldown flag
        if (isInCooldown) {
          isInCooldown = false
          console.log("ScrollTrigger cooldown ended")
        }
        lastUpdate = now

        // Calculate which step should be active based on scroll progress
        const progress = self.progress
        
        // Only activate steps after 15% scroll progress
        if (progress < 0.15) {
          setCurrentStep(-1) // No step active
          setAnimateCards(false)
          return
        }
        
        // Map remaining 85% to the 5 steps
        const adjustedProgress = (progress - 0.15) / 0.85
        const stepIndex = Math.floor(adjustedProgress * how_it_works_content.steps.length)
        const clampedIndex = Math.min(Math.max(0, stepIndex), how_it_works_content.steps.length - 1)
        setCurrentStep(clampedIndex)
        setAnimateCards(true)
      }
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <div ref={sectionRef} className="w-full h-screen flex flex-col md:flex-row items-center justify-center">

        <div className="w-full h-full order-2 md:order-1 text-white flex flex-col justify-center px-8">

          <ScrollReveal duration={1} start="top 100%" className='flex flex-col gap-2'>
            <h2 className="text-xl mb-1 text-primary">{how_it_works_content.Texts.heading}</h2>
            <span className="text-sm text-gray-400">Scroll to begin</span>
          </ScrollReveal>

          {/* <p className="paragraph1 mb-8">
            {how_it_works_content.Texts.paragraph}
          </p>
          */}
          {/* Current Step Display */}
          <div ref={stepsRef} className="flex flex-col items-start justify-center">
            {currentStep >= 0 ? (
              <div 
                key={currentStep} // Force re-render for each step
                className="animate-fade-in-up"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                {/* <div className="mb-4">
                  <span className="text-sm text-gray-400">Step {currentStep + 1} of {how_it_works_content.steps.length}</span>
                </div> */}
                <h3 className="heading1 font-bold">
                  {how_it_works_content.steps[currentStep]?.title}
                </h3>
                <p className="paragraph1">
                  {how_it_works_content.steps[currentStep]?.description}
                </p>
              </div>
            ) : (
              <div className="mb-4">
                <span className="text-sm text-gray-400"></span>
              </div>
            )}
          </div>

          {/* Step Indicators - only show when a step is active */}
          {currentStep >= 0 && (
            <div className="flex space-x-2 mt-8">
              {how_it_works_content.steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

      
      <div className="w-full h-full relative order-1 md:order-2
      flex flex-col items-center justify-center">
      <ScrollReveal duration={1} start="top 110%" className='w-full aspect-video my-auto'>
        <div className="w-full aspect-video my-auto">
          <ModelWrapper 
            coinsData={problem_solution_content.coins} 
            animateCards={animateCards}
            activeCoinIndex={currentStep}
          />
        </div>
      </ScrollReveal>
      </div>
    </div>
  )
}

export default HowItWorks
