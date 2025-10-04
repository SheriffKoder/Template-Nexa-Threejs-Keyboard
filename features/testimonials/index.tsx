'use client'
import React, { useState, useRef, useEffect } from 'react'
import { testimonials_content } from '@/section-contents'
import ProofCardGsapWrapper from './proof-card-gsap-wrapper'
import ProofCardWrapperMobile from './proof-card-wrapper-mobile'

const page = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (sectionRef.current) {
      setIsMounted(true)
    }
  }, [])

  return (
    <div ref={sectionRef} className='overflow-hidden w-full h-auto md:h-screen bg-gradient-to-b from-black via-[#0A0A0A] to-[#1A1A1A] flex flex-col items-start justify-start
    text-white relative
    md:px-[5%] md:pt-[10%] md:pb-8 px-4 py-8'>

        {/* radial gradient circle absolute */}
        <div className='absolute inset-0 z-[0]' 
        style={{
            background: 'radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
        }}/>

        <div className='absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-black via-[#0A0A0A] to-[#1A1A1A]'
        style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
        }}/>


        <div className='relative z-[10]'>
        <h2 className="text-xl mb-1 text-primary">Testimonials</h2>
            <h3 className="heading1 font-bold">
                {testimonials_content.Texts.title}
            </h3>
            <p className="paragraph1">
                {testimonials_content.Texts.description}
            </p>
        </div>

        <div className='hidden md:flex relative w-full flex-1 mt-8 items-center justify-center'>
        {isMounted && <ProofCardGsapWrapper sectionRef={sectionRef as React.RefObject<HTMLDivElement>} />}
        </div>

        <div className='flex md:hidden relative w-full flex-1 mt-8 flex-col items-center justify-center'>
        {isMounted && <ProofCardWrapperMobile sectionRef={sectionRef as React.RefObject<HTMLDivElement>} />}
        </div>

    </div>  
  )
}

export default page