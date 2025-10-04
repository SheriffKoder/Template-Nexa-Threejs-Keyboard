"use client"
import React, { useState, useEffect } from 'react'

interface ConnectionLinesProps {
  isActive?: boolean
  primaryColor?: string
  startDelay?: number
  isInfinite?: boolean
  initialColor?: string
  zIndex?: number
}

const ConnectionLines = ({ 
  isActive = false, 
  primaryColor = "#3b82f6",
  startDelay = 0,
  isInfinite = false,
  initialColor = "#ffffff",
  zIndex = 1
}: ConnectionLinesProps) => {
  const [animationProgress, setAnimationProgress] = useState(0)
  const coinPositions = [
    { x: 5, y: 20 },    // Coin 1 (left) - top of coins area
    { x: 25, y: 20 },   // Coin 2 
    { x: 50, y: 20 },   // Coin 3 (center)
    { x: 75, y: 20 },   // Coin 4
    { x: 95, y: 20 },   // Coin 5 (right)
  ]
  
  const glowingBoxCenter = { x: 50, y: 80 } // Top center of glowing box
  
  // Animation effect
  useEffect(() => {
    if (isActive) {
      setAnimationProgress(0)
      
      const startAnimation = () => {
        // Use setTimeout for smoother animation
        const duration = 2000 // 2 seconds
        const steps = 60 // 60 steps for smooth animation
        const stepDuration = duration / steps
        
        let currentStep = 0
        
        const animate = () => {
          if (currentStep <= steps) {
            const progress = currentStep / steps
            setAnimationProgress(progress)
            currentStep++
            setTimeout(animate, stepDuration)
          } else if (isInfinite) {
            // Restart animation if infinite
            setTimeout(() => {
              setAnimationProgress(0)
              startAnimation()
            }, 1000) // 1 second pause before restart
          }
        }
        
        animate()
      }
      
      // Apply start delay
      if (startDelay > 0) {
        setTimeout(startAnimation, startDelay)
      } else {
        startAnimation()
      }
    } else {
      setAnimationProgress(0)
    }
  }, [isActive, isInfinite, startDelay])
  
  return (
    <svg
      className="absolute inset-0 w-full pointer-events-none pb-[0%] pt-[5%] px-[5%]
      md:pb-[19%] md:pt-[0%] md:px-[0%] z-1
      h-[50vh] md:h-full"
      style={{ zIndex }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {coinPositions.map((coin, index) => {
        // Create more rounded curves with different control points for each coin
        const midX = (coin.x + glowingBoxCenter.x) / 2
        const controlY = Math.min(coin.y, glowingBoxCenter.y) + 30 // Curve downward
        
        // Different control points for more natural curves
        let controlX = coin.x
        if (index === 0) controlX = coin.x + 10 // Gmail - curve right
        if (index === 1) controlX = coin.x + 5  // Sheets - slight curve right
        if (index === 2) controlX = coin.x      // Calendar - straight down
        if (index === 3) controlX = coin.x - 5  // Slack - slight curve left
        if (index === 4) controlX = coin.x - 10 // AI Agents - curve left
        
        const pathData = `M ${coin.x} ${coin.y} Q ${controlX} ${controlY} ${glowingBoxCenter.x} ${glowingBoxCenter.y}`
        
        return (
          <g key={index}>
            {/* Transparent background path */}
            <path
              d={pathData}
              stroke={initialColor}
              strokeWidth="0.3"
              fill="none"
              opacity="0.1"
            />
            
            {/* Animated primary color line */}
            {isActive && (
              <path
                d={pathData}
                stroke={primaryColor}
                strokeWidth="0.2"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset={200 - (animationProgress * 200)}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'stroke-dashoffset 0.1s ease-out'
                }}
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

export default ConnectionLines
