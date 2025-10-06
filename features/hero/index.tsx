import { Button } from "@/components/ui/button"
import { hero_content } from "@/section-contents"
import ScrollReveal from "@/components/animations/scroll-reveal"

const Hero = () => {
  return (
    <div className="h-screen md:min-h-[700px] w-full
    flex flex-col items-start justify-center md:justify-end text-white
    text-center md:text-left px-4 md:px-[5%] pb-[5%]">
        
        <div className="flex flex-col items-start justify-center md:max-w-[60%]">
            <ScrollReveal duration={1}>
                <h1 className="heading1">{hero_content.Texts.heading}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1} duration={1}>
                <p className="paragraph1 opacity-70">{hero_content.Texts.paragraph}</p>
            </ScrollReveal>
        </div>
        <div className="flex flex-row items-center justify-center md:justify-start gap-4 mt-4 w-full pointer-events-auto">
            <Button variant="primary">{hero_content.Buttons[0].text}</Button>
            <Button variant="secondary">{hero_content.Buttons[1].text}</Button>
        </div>

    </div>  
  )
}

export default Hero