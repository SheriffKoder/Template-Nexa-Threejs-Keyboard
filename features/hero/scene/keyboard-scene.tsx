"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Leva } from 'leva'
import Grid from './Grid'
const Keyboard = () => {
  return (
    <>

      <OrbitControls target={[1, 0, 1]} maxPolarAngle={1.45}
       enablePan={false}
       enableZoom={false}
       enableRotate={false}
       />

      <PerspectiveCamera makeDefault fov={50} position={[5,4,6]} zoom={1.5} />

      {/* attach color to background */}
      <color attach='background' args={[0,0,0]} />

      <Environment 
        files="/environments/potsdamer_platz_1k.hdr" 
        background={false} 
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      
       {/* Grid of Boxes */}
       <Grid 
         rows={8}
         columns={8}
         spacing={1.8}
         boxSize={[1.8, 0.7, 1.8]}
         color="blue"
       />
    </>
  )
}





const SceneWrapper = () => {
  return (
    <>
      {/* <Leva /> */}
      <Canvas
        camera={{ 
          position: [3, 3, 3], 
          fov: 75 
        }}
        style={{ 
          width: '100%', 
          height: '100%' 
        }}
      >
        <Keyboard />
      </Canvas>
    </>
  )
}

export default SceneWrapper