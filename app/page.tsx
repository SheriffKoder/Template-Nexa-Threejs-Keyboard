import { ThemeButtons } from "@/components/ui/ThemeToggler_Button";
import Hero from "@/features/hero";
import Navbar from "@/components/layout/navbar";
import MobileNav from "@/components/layout/mobile-nav";
import SceneWrapper from "@/features/hero/scene/keyboard-scene";
import ProblemSolution from "@/features/problem-solution";
import HowItWorks from "@/features/how-it-works";
import Pricing from "@/features/pricing";
import Testimonials from "@/app/development/testimonials/page";
import FinalCta from "@/features/final-cta";
import Footer from "@/components/layout/footer";
import Image from "next/image";
export default function Home() {
  return (
    <div className="
    flex flex-col items-center justify-center bg-black">

      <div className="hidden md:block absolute top-0 left-0 w-full h-screen z-0">
        <SceneWrapper />
        <div className="pointer-events-none bg-gradient-to-t from-black to-20% to-transparent absolute inset-0 z-1" />
      </div>

      <div className="block md:hidden absolute top-0 left-0 w-full h-screen z-0">
        <Image 
          src="/images/hero-background-1.png" 
          alt="Keyboard Hero Background" 
          height={1138} // Actual image height to prevent incorrect resizing
          width={902} // Actual image width to prevent incorrect resizing
          className="object-cover w-full h-full" 
          quality={100} // Maximum quality (default is 75) for crisp image
          priority // Load immediately for better performance on mobile
          unoptimized // Bypass Next.js optimization that can reduce quality
        />
      </div>


      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden w-full">
        <MobileNav />
      </div>


      <div className="max-w-[1500px] pointer-events-none mx-auto px-4 md:px-[5%] relative z-1">
        <Hero />
      </div>

      <div className="max-w-[1500px] mx-auto md:px-[5%] z-1">
        <ProblemSolution />
      </div>

      <div className="w-full px-4 z-1">
        <HowItWorks />
      </div>

      <div className="max-w-[1500px] px-4 w-full mx-auto z-1">
        <Pricing />
      </div>

      <div className="max-w-[1500px] px-4 w-full mx-auto z-1 mt-8 md:mt-0">
        <Testimonials />
      </div>

      <div className="h-screen px-4 w-full">
        <FinalCta />
      </div>

      <div className="w-full px-4 z-1 h-fit bg-black">
        <Footer />
      </div>

    </div>
  );
}
