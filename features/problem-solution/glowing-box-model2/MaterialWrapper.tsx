"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Text, Plane, MeshTransmissionMaterial } from '@react-three/drei'
import RedBox from './RedBox'
import GroundPlane from './GroundPlane'
import { Leva } from 'leva'
import ShiningPointLight from './ShiningPointLight'
import ReflectivePlane from './ReflectivePlane'

const Keyboard = () => {
  return (
    <>

      <OrbitControls target={[0, 0, 0]} maxPolarAngle={2}
       enablePan={false}
       enableZoom={false}
       enableRotate={false}
       />

      <PerspectiveCamera makeDefault fov={50} position={[5,1,5]} zoom={2.5} />

      {/* attach color to background */}
      {/* <color attach='background' args={[0,0,0]} /> */}

      <Environment 
        files="/environments/potsdamer_platz_1k.hdr" 
        background={false} 
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Box with material */}
      <RedBox position={[0, 0, 0]} size={[1, 1, 1]} />
      
      {/* Hello World text */}
      {/* <Text
        position={[-0.5, 0, -0.5]}
        rotation={[0, Math.PI/4, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hello World
      </Text> */}

      {/* Plane below the box */}
      <GroundPlane position={[0, -0.6, 0]} size={[1, 1]} />
      
      <ShiningPointLight position={[0, 0, 0]} intensity={15} distance={10} decay={1} />

        {/* Reflective ground black plane */}
        <ReflectivePlane position={[0, -0.6, 0]} size={[150, 150]} />

    </>
  )
}





const GlowingBoxWrapper = () => {
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

export default GlowingBoxWrapper