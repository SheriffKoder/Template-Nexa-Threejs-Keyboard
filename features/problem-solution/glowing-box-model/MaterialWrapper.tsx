"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Text, Plane, MeshTransmissionMaterial, Float } from '@react-three/drei'
import RedBox from './RedBox'
import GroundPlane from './GroundPlane'
import { Leva } from 'leva'
import ShiningPointLight from './ShiningPointLight'
import ReflectivePlane from './ReflectivePlane'
import ResuableSpotLight from './reusableSpotLight'
import MouseRotator from './MouseRotator'

const Keyboard = () => {
  return (
    <>

      <OrbitControls target={[0, 0, 0]} maxPolarAngle={2}
      //  enablePan={false}
      //  enableZoom={false}
      //  enableRotate={false}
       />

      <PerspectiveCamera makeDefault fov={50} position={[5,1,5]} zoom={2.5} />

      {/* attach color to background */}
      {/* <color attach='background' args={[0,0,0]} /> */}

      <Environment 
        files="/environments/potsdamer_platz_1k.hdr" 
        background={false} 
        environmentIntensity={0.01}
      />

      {/* Lighting */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
      
      {/* Main glowing box group with mouse rotation */}
      <MouseRotator sensitivity={0.1}>
        {/* Floating group containing main components */}
        <Float
          speed={2} // Animation speed
          rotationIntensity={0.1} // No rotation
          floatIntensity={0.5} // Up/down float intensity
          floatingRange={[-0.1, 0.1]} // Range of floating motion
        >
          <group>
            {/* Grey box with frosted material */}
            <RedBox position={[0, 0, 0]} size={[1, 1, 1]} />
            
            {/* Plane below the box */}
            <GroundPlane position={[0, -0.6, 0]} size={[1, 1]} />
            
            {/* Shining point light with bloom effect */}
            <ShiningPointLight position={[0, 0, 0]} intensity={8} distance={2} decay={1.5} />
          </group>
        </Float>

        {/* Text outside floating group to prevent trails */}
        <Text
          position={[0, 0, 0.51]}
          rotation={[0, 0, 0]}
          fontSize={0.3}
          color="#ffffb4"
          anchorX="center"
          anchorY="middle"
        >
          Nexa
        </Text>

        <Text
          position={[0.51, 0, 0]}
          rotation={[0, Math.PI/2, 0]}
          fontSize={0.3}
          color="#ffffb4"
          anchorX="center"
          anchorY="middle"
        >
          Nexa
        </Text>
      </MouseRotator>

      {/* Reflective ground black plane */}
      <ReflectivePlane position={[0, -0.7, 0]} size={[3, 3]} />

      {/* Reusable spot light */}
      <ResuableSpotLight 
      position={[0, 0, 0]} 
      intensity={2} 
      distance={11} 
      angle={0.2} 
      decay={0.6}
      penumbra={0.5}
      showHelpers={false} 
      showControls={false}
      />

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