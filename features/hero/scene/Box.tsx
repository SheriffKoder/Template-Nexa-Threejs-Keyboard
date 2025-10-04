"use client"
import React, { useState } from 'react'
import { useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { KeyboardButtonModel } from './keyboard-model'
import { PlaneGeometry } from 'three'
import { useTexture, Decal } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'

interface BoxProps {
  position?: [number, number, number]
  size?: [number, number, number]
  color?: string
  imageUrl?: string
  coloredImageUrl?: string
  greyscaleImageUrl?: string
  isHovered?: boolean
  boxIndex?: number
  hoveredIndex?: number | null
  onHover?: () => void
}

const Box: React.FC<BoxProps> = ({ 
  position = [0, 0, 0], 
  size = [1, 1, 1], 
  color = "red",
  imageUrl,
  coloredImageUrl,
  greyscaleImageUrl,
  isHovered = false,
  boxIndex = 0,
  hoveredIndex = null,
  onHover
}) => {
  
  // Load textures - use colored when hovered, greyscale when not
  const coloredTexture = coloredImageUrl ? useTexture(coloredImageUrl) : null
  const greyscaleTexture = greyscaleImageUrl ? useTexture(greyscaleImageUrl) : null
  const fallbackTexture = imageUrl ? useTexture(imageUrl) : null
  
  // Determine which texture to use based on hover state
  const shouldScale = hoveredIndex === boxIndex
  const activeTexture = shouldScale ?  coloredTexture : greyscaleTexture|| fallbackTexture
  
  const materialProps = {
    thickness:  0.1,
    roughness: 0.5,
    transmission: 1,
    ior: 1.5,
    metalness: 0,
    //////
    iridescence: 0,
    iridescenceIOR: 1.644,
    iridescenceThicknessRange: [100, 425],
    opacity: 0.8,
    color: '#ffffff',
  }

  
  const { scaleY } = useSpring({
    scaleY: shouldScale ? 2 : 1,
    config: { tension: 300, friction: 25 }
  })

  return (
    <group position={position}>
      <animated.group 
        scale-y={scaleY}
      >

        {/* Invisible plane to catch hover events */}
        <mesh rotation={[-Math.PI/2,0,0]} position={[0,0.4,0]}
                onPointerOver={onHover}>
          <planeGeometry args={[1.5,1.5,1.5]}/>
          <meshLambertMaterial transparent={true} opacity={0}/>
        </mesh>

         {/* Decal with icon */}
         {activeTexture && (
           <mesh rotation={[-Math.PI/2,0,0]} position={[0,0.43,0]}
                   onPointerOver={onHover}>
             <planeGeometry args={[0.8,0.8,1]}/>
             <meshBasicMaterial 
               map={activeTexture}
               transparent={true}
               opacity={shouldScale ? 1 : 0.145}
               alphaTest={0.1}
               color={shouldScale ? "#aaaaaa" : "#ffffff"} // Reduce brightness when colored
             />
           </mesh>
         )}

        <KeyboardButtonModel 
          scale={size}
        />


      </animated.group>
      {shouldScale && (
        <pointLight 
          position={[0, 1, 0]}
          intensity={shouldScale ? 0.4 : 0} 
          distance={10} 
          decay={6}
          color="#ffbc35"
        />
      )}
    </group>
  )
}

export default Box
