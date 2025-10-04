"use client"
import React, { useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import ShiningPointLight from './ShiningPointLight'

interface ReflectivePlaneProps {
  position?: [number, number, number]
  size?: [number, number]
}

const ReflectivePlane: React.FC<ReflectivePlaneProps> = ({ 
  position = [0, 0, 0], 
  size = [2, 2]
}) => {
  const [luminanceThreshold, setLuminanceThreshold] = useState(2);
  const [intensity, setIntensity] = useState(0.2);
  const [radius, setRadius] = useState(0.35);
  const shiningBlue = new THREE.Color(0.3, 1, 13);
  const shiningBlueHigh = new THREE.Color(0.6, 2, 26);


  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={size} />
        <meshPhysicalMaterial 
          color="#131313"
          roughness={0.42}
          metalness={1}
          transmission={0.35}
          opacity={0.005}
          transparent={true}
          clearcoat={0.01}
          clearcoatRoughness={0.0}
        />
      </mesh>
      

    </group>
  )
}

export default ReflectivePlane
