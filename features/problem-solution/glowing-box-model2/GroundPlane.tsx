"use client"
import React, { useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import ShiningPointLight from './ShiningPointLight'

interface GroundPlaneProps {
  position?: [number, number, number]
  size?: [number, number]
}

const GroundPlane: React.FC<GroundPlaneProps> = ({ 
  position = [0, 0, 0], 
  size = [2, 2]
}) => {
  const [luminanceThreshold, setLuminanceThreshold] = useState(2);
  const [intensity, setIntensity] = useState(0.2);
  const [radius, setRadius] = useState(0.35);
  const shiningBlue = new THREE.Color(0.3, 1, 13);
  const shiningBlueHigh = new THREE.Color(0.6, 2, 26);
// Very bright amber
const brightAmber = new THREE.Color(2, 1, 0);

// Super bright amber
const superBrightAmber = new THREE.Color(3, 1.5, 0);

// Ultra bright amber
const ultraBrightAmber = new THREE.Color(4, 2, 0);

// Maximum intensity amber
const maxAmber = new THREE.Color(5, 2.5, 0);

// Glowing amber
const glowingAmber = new THREE.Color(4, 3, 1);
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={size} />
        <meshLambertMaterial color={glowingAmber} />
      </mesh>
      
      {/* Light source positioned at the plane */}
      {/* <ShiningPointLight
        position={[position[0], position[1] + 0.1, position[2]]}
        color={shiningBlue}
        intensity={0.6}
        distance={10}
        decay={0.2}
      /> */}
      
      {/* <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={luminanceThreshold}
          intensity={intensity}
          radius={radius}
        />
      </EffectComposer> */}
    </group>
  )
}

export default GroundPlane
