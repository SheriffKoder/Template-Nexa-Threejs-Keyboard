"use client";
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
const GridBackground = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [gridLength, setGridLength] = useState(96);
    const imageRef = useRef<HTMLDivElement>(null);
    
    // Responsive grid length
    useEffect(() => {
        const updateGridLength = () => {
            if (window.innerWidth < 768) { // md breakpoint
                setGridLength(40);
            } else {
                setGridLength(96);
            }
        };

        updateGridLength();
        window.addEventListener('resize', updateGridLength);
        
        return () => {
            window.removeEventListener('resize', updateGridLength);
        };
    }, []);

    // Global mouse tracking - listens to entire screen
    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
            }
        };

        // Add global mouse listener
        document.addEventListener('mousemove', handleGlobalMouseMove);
        
        // Cleanup on unmount
        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, []);
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        // Implement the logic to handle click event
        console.log("Mouse Position", "X:", mousePosition.x.toFixed(2), "Y:", mousePosition.y.toFixed(2))
    };

  return (
    <div className='relative w-full h-full flex items-center justify-center'>
        <div 
            className="h-full w-full group overflow-visible bg-black
            mix-blend-plus-darker
            "
            ref={imageRef}
            onClick={handleClick}
            style={{
        }}>

          {/* div with many more boxes - 12x8 grid */}

            <div className='absolute inset-0 opacity-15'
            style={{
                background: `radial-gradient(circle 380px at ${mousePosition.x}% ${mousePosition.y}%, #FF6B00, #FF6B00, rgba(0, 0, 0, 0))`
            }}
            ></div>
                    
            {/* <div className="absolute bottom-0 left-0 bg-black/70 text-white p-1 text-xs">
                Position: {mousePosition.x.toFixed(2)}% left, {mousePosition.y.toFixed(2)}% top
            </div> */}

            <div className='absolute inset-0 h-full w-full grid grid-cols-4 md:grid-cols-12 grid-rows-8'>
            {Array.from({ length: gridLength }, (_, index) => (
              <div key={index} className='cursor-pointer border-r border-b border-white/5 last:border-r-0'>
                <div className='w-full h-full bg-black flex items-center justify-center'
                >
                  <span className='font-bold text-primary opacity-10'>Nexa</span>
                </div>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default GridBackground
