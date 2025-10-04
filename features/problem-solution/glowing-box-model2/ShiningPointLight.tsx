"use client"
import React, { useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

interface ShiningPointLightProps {
  position?: [number, number, number]
  intensity?: number
  distance?: number
  decay?: number
  color?: THREE.Color
  luminanceThreshold?: number
  bloomIntensity?: number
  bloomRadius?: number
}

const ShiningPointLight: React.FC<ShiningPointLightProps> = ({ 
  position = [0, 0, 0], 
  intensity = 1,
  distance = 10,
  decay = 2,
  color = new THREE.Color(0.3, 1, 13), // shining blue default
  luminanceThreshold = 2,
  bloomIntensity = 0.2,
  bloomRadius = 0.35
}) => {

    const brightAmber = new THREE.Color(0.5, 0.25, 0);
    color = brightAmber;
  return (
    <group>
      <pointLight
        position={position}
        color={color}
        intensity={intensity}
        distance={distance}
        decay={decay}
      />
      
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={luminanceThreshold}
          intensity={bloomIntensity}
          radius={bloomRadius}
        />
      </EffectComposer>
    </group>
  )
}

export default ShiningPointLight
