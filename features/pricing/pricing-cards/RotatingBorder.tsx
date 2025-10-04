import React from 'react'
import Image from 'next/image'
import "./gradient-border.css"

const RotatingBorder = ({children, roundedRadius, isActive}: {children: React.ReactNode, roundedRadius: string, isActive: boolean}) => {
  return (

        

        <div className='h-full w-full z-[10] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        style={{
          mixBlendMode: 'screen',
          borderRadius: roundedRadius,
        }}>
            <div className='bg-black h-full relative rounded-sm overflow-hidden'
            style={{
              borderRadius: roundedRadius,
            }}>
              {/* <div className='Gradient_Border'></div> */}
              <div className={`${isActive ? 'gradient_test' : ' '} z-[11] absolute h-[150%] w-[350%] top-[50%] left-[50%]
              translate-x-[-50%] translate-y-[-50%]`}>
              </div>

              <div className='bg-black absolute z-[12] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
              w-[calc(100%-5px)] h-[calc(100%-5px)] rounded-sm'
              style={{
                borderRadius: roundedRadius,
              }}>
              </div>
                

                <div className='absolute z-[13] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
                w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-sm flex items-center justify-center font-bold'
                style={{
                  borderRadius: roundedRadius,
                }}>
                  {children}
                </div>
            </div>





    </div>
  )
}

export default RotatingBorder