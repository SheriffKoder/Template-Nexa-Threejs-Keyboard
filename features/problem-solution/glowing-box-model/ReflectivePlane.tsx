"use client"
import React, { useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import ShiningPointLight from './ShiningPointLight'
import { MeshReflectorMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

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

      // load textures
      const [roughness, normal] = useLoader(TextureLoader, [
        '/textures/roughness.jpg',
        '/textures/normal.jpg',
    ])
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={size} />
        <MeshReflectorMaterial 
        // envMapIntensity={0}
        // normalMap={normal}
        // normalScale={[0.15, 0.15]}
        // roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        // roughness={1.7}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        // resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        // mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        // depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        // reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
    />
      </mesh>
      

    </group>
  )
}

export default ReflectivePlane
