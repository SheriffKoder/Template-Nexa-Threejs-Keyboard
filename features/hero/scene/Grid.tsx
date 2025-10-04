"use client"
import React, { useState } from 'react'
import Box from './Box'
import { keyboard_icons } from '@/section-contents'

interface GridProps {
  rows?: number
  columns?: number
  spacing?: number
  boxSize?: [number, number, number]
  color?: string
}

const Grid: React.FC<GridProps> = ({ 
  rows = 8, 
  columns = 8, 
  spacing = 1.2,
  boxSize = [0.8, 0.8, 0.8],
  color = "blue"
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const boxes = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = (col - (columns - 1) / 2) * spacing
      const z = (row - (rows - 1) / 2) * spacing
      
      // Cycle through the available icons
      const iconIndex = (row * columns + col) % keyboard_icons.length
      const iconData = keyboard_icons[iconIndex]
      const boxIndex = row * columns + col
      const isHovered = hoveredIndex === boxIndex
      
      boxes.push(
        <Box
          key={`${row}-${col}`}
          position={[x, 0, z]}
          size={boxSize}
          color={color}
          coloredImageUrl={iconData?.colored}
          greyscaleImageUrl={iconData?.greyscale}
          isHovered={isHovered}
          boxIndex={boxIndex}
          hoveredIndex={hoveredIndex}
          onHover={() => setHoveredIndex(boxIndex)}
        />
      )
    }
  }

  return <>{boxes}</>
}

export default Grid
