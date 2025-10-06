"use client"
import { Button } from "@/components/ui/button"
import { problem_solution_content } from "@/section-contents"
import ScrollReveal from "@/components/animations/scroll-reveal"
import ModelWrapper from "./coin-model/model-wrapper"
import GlowingBoxWrapper from "@/features/problem-solution/glowing-box-model/MaterialWrapper"
import ConnectionLines from "./ConnectionLines"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProblemSolution = () => {
  const [isConnectionActive, setIsConnectionActive] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!wrapperRef.current) return

    // Create ScrollTrigger for the wrapper div
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "50% 100%", // When top of wrapper reaches 70% of viewport
      end: "bottom 30%", // When bottom of wrapper reaches 30% of viewport
    //   markers: true,
      onEnter: () => {
        console.log("Animation triggered!")
        setIsConnectionActive(true)
      },
      onLeave: () => {
        console.log("Animation stopped!")
        setIsConnectionActive(false)
      },
      onEnterBack: () => {
        console.log("Animation triggered on scroll back!")
        setIsConnectionActive(true)
      },
      onLeaveBack: () => {
        console.log("Animation stopped on scroll back!")
        setIsConnectionActive(false)
      }
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <div 
      ref={wrapperRef}
      className="h-[100vh] min-h-[1200px] lg:h-[1200px] w-full
      flex flex-col items-start justify-start text-white
      text-center md:text-left pt-[10%] relative "
    >

        <div className="flex flex-col lg:flex-row items-start justify-center text-start
        w-full mx-auto gap-4 lg:gap-[8rem] px-4">
            <ScrollReveal duration={1} start="top 100%">
                <h1 className="heading1">{problem_solution_content.Texts.heading}</h1>
            </ScrollReveal>
            <ScrollReveal duration={0.5} start="top 110%">
                <p className="paragraph1 opacity-70">{problem_solution_content.Texts.paragraph}</p>
            </ScrollReveal>
            
            {/* Animation Trigger Button */}
            {/* <div className="mt-4">
                <Button 
                    onClick={() => setIsConnectionActive(!isConnectionActive)}
                    className="bg-primary text-white hover:bg-primary/80"
                >
                    {isConnectionActive ? 'Stop Animation' : 'Start Animation'}
                </Button>
            </div> */}
        </div>

        {/* Coins with Connection Lines */}
        <div className="relative mt-[10%] w-[90%] mx-auto h-full flex flex-col justify-end">


          

        <div className="flex-1 flex flex-col relative">

          <div className="absolute inset-0 flex flex-col items-center justify-center z-1 md:mt-[10%] mx-[5%]">
            {/* Connection Lines Overlay */}
          <ConnectionLines 
            isActive={isConnectionActive} 
            primaryColor="#FF6B00" 
            zIndex={0}
          />

          {/* Connection Lines Overlay */}
          <ConnectionLines 
            isActive={isConnectionActive} 
            primaryColor="#ffb728" 
            zIndex={1}
            isInfinite={true}
            startDelay={3000}
            initialColor="#ffffff"
          />
          </div>

          {/* Single Canvas with all coins */}
          <div className="w-full h-[100px] md:h-[180px] lg:h-[300px] relative z-0">
            <ModelWrapper coinsData={problem_solution_content.coins} />
          </div>
          
          {/* Glowing Box */}
          <div className="hidden md:block mx-auto w-[100vw] md:w-[50%] h-[500px] aspect-square mt-[15%] absolute bottom-0 left-1/2 -translate-x-1/2 z-2">
              <div className="absolute top-0 left-0 w-full h-full primary-radial-gradient-circle pulsate-primary-radial-gradient-circle opacity-30" />
              <GlowingBoxWrapper />
              <div className="h-full absolute bottom-0 left-0 w-full bg-gradient-to-t to-20% from-black to-transparent" />
              <div className="h-[80%] absolute bottom-0 right-0 w-full bg-gradient-to-l to-30% from-black to-transparent" />
              <div className="h-[80%] absolute bottom-0 left-0 w-full bg-gradient-to-r to-20% from-black to-transparent" />
          </div>

          <div className="block md:hidden mx-auto w-[50vw] md:w-[50%] h-[400px] aspect-square mt-[25%] relative z-2">
            <div className="absolute top-0 left-0 w-full h-full primary-radial-gradient-circle pulsate-primary-radial-gradient-circle opacity-30" />
            <Image 
              src="/images/glowing-cube-1.png" 
              alt="Keyboard Hero Background" 
              height={1138} // Actual image height to prevent incorrect resizing
              width={902} // Actual image width to prevent incorrect resizing
              className="object-cover w-full h-full" 
              quality={100} // Maximum quality (default is 75) for crisp image
              priority // Load immediately for better performance on mobile
              unoptimized // Bypass Next.js optimization that can reduce quality
            />
          </div>

          <div className="flex absolute bottom-[5%] md:bottom-[15%] left-0 w-full h-[150px] md:h-[200px] z-4
          flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center px-4">

                <h1 className="heading1 md:w-[25%]">
                  <ScrollReveal duration={1} start="top 110%">  {problem_solution_content.Texts.heading2} </ScrollReveal>
                </h1>
                <div className="paragraph1 md:w-[25%]">
                  <ScrollReveal duration={1} start="top 110%">
                    <p className="text-sm md:text-3xl font-extralight flex flex-row md:flex-col items-center md:items-start justify-center md:justify-center gap-0">
                      {problem_solution_content.Texts.paragraph2.split('.').map((sentence, index) => (
                        <span key={index} className="ml-1">
                          {sentence.trim()}
                          {index < problem_solution_content.Texts.paragraph2.split('.').length - 1 && '.'}
                          {index < problem_solution_content.Texts.paragraph2.split('.').length - 1 && <br className="hidden md:block" />}
                        </span>
                      ))}
                    </p>
                  </ScrollReveal>
                </div>
          </div>

          </div>

        </div>

    </div>  
  )
}

export default ProblemSolution