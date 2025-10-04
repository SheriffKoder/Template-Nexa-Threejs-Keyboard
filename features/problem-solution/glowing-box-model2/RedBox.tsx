"use client"
import React from 'react'
import { useControls } from 'leva'
import { MeshTransmissionMaterial } from '@react-three/drei'

interface RedBoxProps {
  position?: [number, number, number]
  size?: [number, number, number]
}

const RedBox: React.FC<RedBoxProps> = ({ 
  position = [0, 0, 0], 
  size = [1, 1, 1] 
}) => {
  const materialProps = {
    color: '#979797',
    metalness: 0.23,
    thickness: 0,
    roughness: 1,
    transmission: 0.5,
    opacity: 0,
    transparent: false,
    ior: 1.2,
    chromaticAberration: 0.1,
    backside: true,
    clearcoat: 0,
    clearcoatRoughness: 0,
    reflectivity: 0.5,
    envMapIntensity: 1,
  }

  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <MeshTransmissionMaterial 
        color={materialProps.color}
        metalness={materialProps.metalness}
        thickness={materialProps.thickness}
        roughness={materialProps.roughness}
        transmission={materialProps.transmission}
        opacity={materialProps.opacity}
        transparent={materialProps.transparent}
        ior={materialProps.ior}
        chromaticAberration={materialProps.chromaticAberration}
        backside={materialProps.backside}
        clearcoat={materialProps.clearcoat}
        clearcoatRoughness={materialProps.clearcoatRoughness}
        reflectivity={materialProps.reflectivity}
        envMapIntensity={materialProps.envMapIntensity}
      />
    </mesh>
  )
}

export default RedBox
