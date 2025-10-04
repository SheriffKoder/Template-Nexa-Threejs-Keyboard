"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MouseRotatorProps {
  children: React.ReactNode
  sensitivity?: number
}

const MouseRotator: React.FC<MouseRotatorProps> = ({ 
  children, 
  sensitivity = 0.5 
}) => {
  const groupRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      // Rotate the group based on mouse position
      const targetRotationY = mousePosition.x * sensitivity
      const targetRotationX = mousePosition.y * sensitivity * 0.6 // Slightly less rotation on X axis
      
      // Smoothly interpolate to target rotation
      groupRef.current.rotation.y = targetRotationY
      groupRef.current.rotation.x = targetRotationX
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default MouseRotator
