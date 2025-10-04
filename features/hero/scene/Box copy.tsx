"use client"
import React, { useState } from 'react'
import { useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { KeyboardButtonModel } from './keyboard-model'

interface BoxProps {
  position?: [number, number, number]
  size?: [number, number, number]
  color?: string
}

const Box: React.FC<BoxProps> = ({ 
  position = [0, 0, 0], 
  size = [1, 1, 1], 
  color = "red" 
}) => {
  const [hovered, setHovered] = useState(false)
  
  // const materialProps = useControls({
  //   thickness: { value: 0.1, min: 0, max: 0.2, step: 0.05 },
  //   roughness: { value: 0.5, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.5, min: 0, max: 3, step: 0.1 },
  //   metalness: { value: 0, min: 0, max: 1, step: 0.001 },
  //   //////
  //   iridescence: { value: 0, min: 0, max: 1, step: 0.001 },
  //   iridescenceIOR: { value: 1.644, min: 0, max: 2, step: 0.001 },
  //   iridescenceThicknessRange: { value: [100, 425], min: 0, max: 1000, step: 1 },
  //   opacity: { value: 0.8, min: 0, max: 1, step: 0.001 },
  //   color: { value: '#ffffff' },
  // })

  const { scaleY, boxColor, roughness, opacity } = useSpring({
    scaleY: hovered ? 2 : 1,
    boxColor: hovered ? color : color, // amber color when hovered
    roughness: hovered ? 1 : 1, // smooth when hovered, rough when not
    opacity: hovered ? 1 : 1, // fully opaque when hovered, slightly transparent when not
    config: { tension: 300, friction: 20 }
  })

  // const { scaleY, boxColor, roughness, opacity } = useSpring({
  //   scaleY: hovered ? 1.5 : 1,
  //   boxColor: hovered ? '#FFBF00' : color, // amber color when hovered
  //   roughness: hovered ? 0.5 : 1, // smooth when hovered, rough when not
  //   opacity: hovered ? 0.8 : 1, // fully opaque when hovered, slightly transparent when not
  //   config: { tension: 300, friction: 20 }
  // })

  return (
    <animated.group 
      position={position}
      scale-y={hovered ? 2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <KeyboardButtonModel 
        scale={size}
      />
      <pointLight 
        position={[0, 1, 0]}
        scale={hovered ? 1.5 : 1}
        intensity={hovered ? 50 :0} 
        distance={20} 
        decay={6}
        color="#ffbc35"
      />
    </animated.group>
  )
}

export default Box
