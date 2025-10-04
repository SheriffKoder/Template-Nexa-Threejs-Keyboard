"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Coin from "./coin"
// import { Leva } from 'leva'

const Model = ({ coinsData, animateCards, activeCoinIndex }: ModelWrapperProps) => {
  return (
    <>
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45}
       enablePan={false}
       enableZoom={false}
       enableRotate={false}
       />

      <PerspectiveCamera makeDefault fov={50} position={[-8,6,9]} zoom={2.7} />

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
        
        // First card needs -0.8, rest -0.9 for better row alignment
        // let rotation = index === 0 ? -0.7 : -0.9
        // Middle coin stays at 0
        let rotation = -Math.PI / 2
        
        // Position coins in a row
        const xPosition = (index - middleIndex) * 1.5
        
        return (
          <Coin 
            key={index}
            position={[xPosition, 0, 0]}
            scale={[1, 1, 1]}
            initialRotation={rotation}
            imageUrl={coin.icon}
            animateCards={animateCards}
            index={index}
            isActive={activeCoinIndex === index && activeCoinIndex >= 0}
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
  animateCards?: boolean
  activeCoinIndex?: number
}

const ModelWrapper = ({ coinsData, animateCards, activeCoinIndex }: ModelWrapperProps) => {
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
        <Model coinsData={coinsData} animateCards={animateCards} activeCoinIndex={activeCoinIndex} />
      </Canvas>
    </>
  )
}

export default ModelWrapper