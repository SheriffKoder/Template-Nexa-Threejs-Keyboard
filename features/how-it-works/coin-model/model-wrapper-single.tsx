"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Coin from "./coin"
// import { Leva } from 'leva'

const Model = ({ initialRotation = 0.7, imageUrl }: ModelWrapperProps) => {
  return (
    <>
{/* 
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45}
       enablePan={false}
       enableZoom={false}
       enableRotate={false}
       /> */}

      <PerspectiveCamera makeDefault fov={50} position={[0,0,3]} zoom={1} />

      {/* attach color to background */}
      <color attach='background' args={[0,0,0]} />

      <Environment 
        files="/environments/potsdamer_platz_1k.hdr"
        background={false} 
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      
      <Coin 
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        initialRotation={initialRotation}
        imageUrl={imageUrl}
      />

    </>
  )
}





interface ModelWrapperProps {
  initialRotation?: number
  imageUrl?: string
}

const ModelWrapper = ({ initialRotation = 0.7, imageUrl }: ModelWrapperProps) => {
  return (
    <>
      <Canvas
        camera={{ 
          position: [3, 3, 3], 
          fov: 75 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          // border: '1px solid red'
        }}
      >
        <Model initialRotation={initialRotation} imageUrl={imageUrl} />
      </Canvas>
    </>
  )
}

export default ModelWrapper