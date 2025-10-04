import React from 'react'
import { PricingCard } from './PricingCardEnhanced'
import RotatingBorder from './RotatingBorder'
import { cn } from '@/lib/utils'

const CardWrapper = ({ plans }: { plans: any[] }) => {
  return (
    <div className='z-2
    relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4
      h-full w-full'>
            {plans.map((plan, index) => (
                <div className='relative w-full h-full group ' key={index}>
                    
                    {plan.id === "professional" && (
                    <div
                    style={{
                        filter: "blur(10px)",
                    }}
                    className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2",
                        "px-4 py-1.5 rounded-full",
                        "bg-primary text-white font-medium text-xs",
                        "transform transition-transform duration-300",
                        "group-hover:scale-105 text-nowrap"
                    )}
                    >
                        20% OFF – Early Access
                    </div>)}

                    {plan.id === "professional" && (
                    <div
                    style={{
                        filter: "brightness(2)",
                    }}
                    className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2",
                        "px-4 py-1.5 rounded-full",
                        "bg-primary/20 text-white font-medium text-xs",
                        "transform transition-transform duration-300",
                        "group-hover:scale-105 text-nowrap"
                    )}
                    >
                        20% OFF – Early Access
                    </div>)}

                    <RotatingBorder roundedRadius={'16px'} isActive={plan.id === "professional"}>
                        <PricingCard plan={plan} index={index} 
                        billingPeriod="monthly" 
                        popularPlan="professional" 
                        popularPlanText="Most Popular"
                        />
                    </RotatingBorder>
                </div>
            ))}
        </div>
  )
}

export default CardWrapper
