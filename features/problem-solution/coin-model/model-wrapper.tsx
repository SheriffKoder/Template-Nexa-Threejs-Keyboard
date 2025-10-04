"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Coin from "./coin"
// import { Leva } from 'leva'

const Model = ({ coinsData }: ModelWrapperProps) => {
  return (
    <>
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45}
       enablePan={false}
       enableZoom={false}
       enableRotate={false}
       />

      <PerspectiveCamera makeDefault fov={50} position={[0,0,8]} zoom={2.1} />

      {/* attach color to background */}
      <color attach='background' args={[0,0,0]} />

      <Environment 
        files="/environments/potsdamer_platz_1k.hdr"
        background={false} 
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Render all coins in a row */}
      {coinsData.map((coin, index) => {
        const totalCoins = coinsData.length
        const middleIndex = Math.floor(totalCoins / 2)
        const distanceFromMiddle = Math.abs(index - middleIndex)
        
        let rotation = 0
        if (index < middleIndex) {
          // Before middle: positive rotation
          rotation = 0.65 + (distanceFromMiddle - 1) * 0.35
        } else if (index > middleIndex) {
          // After middle: negative rotation
          rotation = -0.65 - (distanceFromMiddle - 1) * 0.35
        }
        // Middle coin stays at 0
        
        // Position coins in a row
        const xPosition = (index - middleIndex) * 2.5
        
        return (
          <Coin 
            key={index}
            position={[xPosition, 0, 0]}
            scale={[1, 1, 1]}
            initialRotation={rotation}
            imageUrl={coin.icon}
          />
        )
      })}

    </>
  )
}





interface ModelWrapperProps {
  coinsData: Array<{
    icon: string
    text: string
  }>
}

const ModelWrapper = ({ coinsData }: ModelWrapperProps) => {
  return (
    <>
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 50 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          // border: '1px solid red'
        }}
      >
        <Model coinsData={coinsData} />
      </Canvas>
    </>
  )
}

export default ModelWrapper