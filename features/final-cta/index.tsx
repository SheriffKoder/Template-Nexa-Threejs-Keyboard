import { Button } from '@/components/ui/button'
import { final_cta_content } from '@/section-contents'
import React from 'react'
import GridBackground from './components/grid-background'
import ScrollReveal from '@/components/animations/scroll-reveal'

const index = () => {
  return (
    <div className='relative flex flex-col items-center justify-center bg-black h-screen text-white'>


      {/* Grid background with mouse tracking background */}
      <div className='absolute inset-0 z-0'>
        <GridBackground />
      </div>

      <div className="h-full absolute top-0 left-0 w-full bg-gradient-to-b to-10% from-black to-transparent" />
      <div className="h-full absolute bottom-0 left-0 w-full bg-gradient-to-t to-10% from-black to-transparent" />
      <div className="h-full absolute bottom-0 right-0 w-full bg-gradient-to-l to-5% from-black to-transparent" />
      <div className="h-full absolute bottom-0 left-0 w-full bg-gradient-to-r to-5% from-black to-transparent" />

      <ScrollReveal duration={1} start="top 100%">
      <div className='relative z-1 flex flex-col items-center justify-center px-4 py-8 gap-4'>
        <h1 className='heading1 text-center'>{final_cta_content.Texts.title}</h1>
        <p className='paragraph1 text-center flex flex-col items-center justify-center gap-2'>
          <span className='opacity-100'>{final_cta_content.Texts.description.split("Nexa")[0]}
            <span className='opacity-100 font-bold'>Nexa</span>
          </span> 
          <span className='opacity-100'>{final_cta_content.Texts.description.split("Nexa")[1]}</span>
        </p>
        
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-[70%] md:w-auto'>
            <Button variant="primary" className='w-full md:w-auto'>{final_cta_content.buttons[0].text}</Button>
            <Button variant="secondary" className='w-full md:w-auto'>{final_cta_content.buttons[1].text}</Button>
        </div>
      </div>
      </ScrollReveal>

    </div>
  )
}

export default index