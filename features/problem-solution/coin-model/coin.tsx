"use client"
import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useTexture } from '@react-three/drei'
import { CardModel } from './card-model'

interface CoinProps {
  position?: [number, number, number]
  scale?: [number, number, number]
  initialRotation?: number
  imageUrl?: string
}

const Coin: React.FC<CoinProps> = ({ 
  position = [0, 0, 0], 
  scale = [1, 1, 1],
  initialRotation = 0,
  imageUrl
}) => {
  const [hovered, setHovered] = useState(false)
  
  // Load texture if imageUrl is provided
  const texture = imageUrl ? useTexture(imageUrl) : null

  const { rotationY } = useSpring({
    rotationY: hovered ? 3.2 : initialRotation+3.2,
    config: { tension: 300, friction: 25 }
  })

  return (
    <animated.group 
      position={position}
      scale={scale}
      rotation-y={rotationY}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh 
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* <cylinderGeometry args={[1, 1, 0.1, 64]} /> */}
        <CardModel imageUrl={imageUrl} />
        <meshPhysicalMaterial 
          color="#e6c2a8"
          transmission={1}
          opacity={1}
          transparent={true}
          roughness={0.3}
          metalness={0.2}
          thickness={1}
          ior={1.5}
        />
      </mesh>
    </animated.group>
  )
}

export default Coin
