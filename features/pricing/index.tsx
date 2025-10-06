import React from 'react'
import { PricingCard } from './pricing-cards/PricingCardEnhanced'
import RotatingBorder from './pricing-cards/RotatingBorder'
import { cn } from '@/lib/utils'
import CardWrapper from './pricing-cards/cards-wrapper'
import { pricing_content } from '@/section-contents'
import ScrollReveal from '@/components/animations/scroll-reveal'

const Pricing = () => {

  return (
      <div className='w-full md:h-[1500px] min-h-screen lg:h-screen flex flex-col items-center justify-start lg:justify-center relative mx-auto px-4
      '>

        <ScrollReveal duration={1} start="top 100%">
        <div className='flex flex-col items-center justify-center text-white mb-18 w-full'> 
            <h1 className='heading1 font-bold'>{pricing_content.Texts.heading}</h1>
            <p className='paragraph1'>{pricing_content.Texts.paragraph}</p>
        </div>
        </ScrollReveal>

        <ScrollReveal duration={1} start="top 100%" className='z-10 w-full md:w-[90%] h-[1300px] md:h-[70%]'>
            <CardWrapper plans={pricing_content.cards} />
        </ScrollReveal>
      </div>
      
  )
}

export default Pricing
