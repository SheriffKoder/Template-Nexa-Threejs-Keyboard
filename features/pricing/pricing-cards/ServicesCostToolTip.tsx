// import { RECOMMENDATION_COST, REMOVAL_CHANCE_COST } from '@/data/token-credits'
import { Coins } from 'lucide-react'
import React from 'react'

/**
 * ServicesCostToolTip Component
 * 
 * Displays the cost of serices when the user hovers over the "i" icon.
 */
const ServicesCostToolTip = ({info}: {info: string}) => {
  return (
    <div className="group/tooltip cursor-pointer relative bg-white/10 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs font-base">
                    
    <span className="italic">i</span>

    {/* Tooltip */}
    <div className="hidden group-hover/tooltip:flex absolute top-[150%] right-[50%] translate-x-[50%] bg-black flex-col 
    px-2 py-2 font-normal rounded-md
    items-start justify-center text-xs font-base w-[160px] gap-1 text-primary">
      <div className="flex flex-row items-center justify-center gap-1">{info} <Coins className="w-3 h-3" /></div>
    </div>
  
  </div>
  )
}

export default ServicesCostToolTip
