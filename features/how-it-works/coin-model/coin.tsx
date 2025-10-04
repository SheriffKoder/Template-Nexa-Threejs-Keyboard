"use client"
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useTexture } from '@react-three/drei'
import { CardModel } from './card-model'
import * as THREE from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

interface CoinProps {
  position?: [number, number, number]
  scale?: [number, number, number]
  initialRotation?: number
  imageUrl?: string
  animateCards?: boolean
  index?: number
  color?: string
  hovered?: boolean
  isActive?: boolean
}

const Coin: React.FC<CoinProps> = ({ 
  position = [0, 0, 0], 
  scale = [1, 1, 1],
  initialRotation = 0,
  imageUrl,
  animateCards = false,
  index = 0,
  color = "#e6c2a8",
  isActive = false
}) => {
  const [hovered, setHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Load texture if imageUrl is provided
  const texture = imageUrl ? useTexture(imageUrl) : null

  // Handle card animation with stagger effect
  useEffect(() => {
    if (animateCards) {
      const delay = index * 100 // 200ms stagger per card
      const timer = setTimeout(() => {
        setIsAnimating(true)
        // Return to 0 after 1 second
        setTimeout(() => setIsAnimating(false), 300)
      }, delay)
      
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [animateCards, index])

  const { position: animatedPosition } = useSpring({
    position: hovered || isAnimating || isActive ? [position[0], 0.5, position[2]] : [position[0], 0, position[2]],
    config: { tension: 300, friction: 25 }
  })

  const ultraBrightAmber = new THREE.Color(5, 2, 0);
  return (
    <animated.group 
      // @ts-ignore
      position={animatedPosition}
      scale={scale}
      rotation-y={initialRotation+3.2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh 
        rotation={[Math.PI / 2, 0, 0.05]}
      >
        {/* <cylinderGeometry args={[1, 1, 0.1, 64]} /> */}
        <CardModel imageUrl={imageUrl} color={hovered || isActive ? ultraBrightAmber : color} 
        hovered={hovered}/>
        <meshStandardMaterial 
          color={hovered || isActive ? ultraBrightAmber : color}
          emissive={hovered || isActive ? ultraBrightAmber : new THREE.Color(0, 0, 0)}
          emissiveIntensity={hovered || isActive ? 3 : 0}
        />
      </mesh>

    </animated.group>
  )
}

export default Coin
