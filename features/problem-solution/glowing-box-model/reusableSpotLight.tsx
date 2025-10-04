'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight } from 'three'
import * as THREE from 'three'
import { useControls } from 'leva'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper, AxesHelper } from 'three'

interface ResuableSpotLightProps {
  showControls?: boolean
  color?: [number, number, number]
  intensity?: number
  angle?: number
  penumbra?: number
  position?: [number, number, number]
  target?: [number, number, number]
  castShadow?: boolean
  shadowBias?: number
  distance?: number
  decay?: number
  maxMultiplier?: number
  minMultiplier?: number
  showHelpers?: boolean
  helperSize?: number
}

const ResuableSpotLight: React.FC<ResuableSpotLightProps> = ({
  showControls = true,
  color = [1, 1, 1],
  intensity = 100,
  angle = 0.6,
  penumbra = 0.5,
  position = [0, 5, 0],
  target = [0, 0, 0],
  castShadow = true,
  shadowBias = -0.0001,
  distance = 0,
  decay = 2, // put decay to 0 if not want to make intesity get affect by distance
  maxMultiplier = 20,
  minMultiplier = 0.1,
  showHelpers = false,
  helperSize = 1
}) => {
  const spotlightRef = useRef<THREE.SpotLight>(null)
  const targetRef = useRef<THREE.Object3D>(null)

  // Calculate dynamic ranges based on multipliers
  const intensityRange = {
    min: intensity * minMultiplier,
    max: intensity * maxMultiplier
  }
  
  const positionRange = {
    min: -20 * maxMultiplier,
    max: 20 * maxMultiplier
  }

  // Leva controls - only show if showControls is true
  const controls = {
    color: { r: color[0] * 255, g: color[1] * 255, b: color[2] * 255 },
    intensity: intensity,
    angle: angle,
    penumbra: penumbra,
    positionX: position[0],
    positionY: 5,
    positionZ: position[2],
    targetX: target[0],
    targetY: target[1],
    targetZ: target[2],
    distance: distance,
    decay: decay,
    castShadow: castShadow,
    showHelpers: showHelpers
  }

  // Add helpers when enabled
  useHelper(showControls && (controls.showHelpers || showHelpers) ? spotlightRef as React.RefObject<THREE.Object3D> : null, SpotLightHelper, 'orange')

  // Update spotlight target on each frame
  useFrame(() => {
    if (spotlightRef.current && showControls) {
      spotlightRef.current.target.position.set(
        controls.targetX,
        controls.targetY,
        controls.targetZ
      )
      spotlightRef.current.target.updateMatrixWorld()
    } else if (spotlightRef.current) {
      spotlightRef.current.target.position.set(target[0], target[1], target[2])
      spotlightRef.current.target.updateMatrixWorld()
    }
  })

  const finalColor = showControls 
    ? [controls.color.r / 255, controls.color.g / 255, controls.color.b / 255] as [number, number, number]
    : color

  const finalPosition = showControls 
    ? [controls.positionX, controls.positionY, controls.positionZ] as [number, number, number]
    : position

  const finalTarget = showControls 
    ? [controls.targetX, controls.targetY, controls.targetZ] as [number, number, number]
    : target

  const shouldShowHelpers = showControls ? controls.showHelpers : showHelpers

  return (
    <group>
      <spotLight
        ref={spotlightRef}
        color={finalColor}
        intensity={showControls ? controls.intensity : intensity}
        angle={showControls ? controls.angle : angle}
        penumbra={showControls ? controls.penumbra : penumbra}
        position={finalPosition}
        castShadow={showControls ? controls.castShadow : castShadow}
        shadow-bias={shadowBias}
        distance={showControls ? controls.distance : distance}
        decay={showControls ? controls.decay : decay}
      />
      
      {/* Axis helper at spotlight position */}
      {shouldShowHelpers && (
        <axesHelper 
          args={[helperSize]} 
          position={finalPosition}
        />
      )}
      
      {/* Target position indicator */}
      {shouldShowHelpers && (
        <group position={finalTarget}>
          <axesHelper args={[helperSize * 0.5]} />
          <mesh>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </group>
      )}
    </group>
  )
}

export default ResuableSpotLight 