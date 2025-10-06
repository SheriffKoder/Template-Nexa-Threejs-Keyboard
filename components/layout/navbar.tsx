"use client"
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { NavLink } from './nav-link'
import { navbar_links } from '../../section-contents.js'

interface NavbarItem {
  name: string
  href: string
  type: 'link' | 'button-primary' | 'button-secondary'
}

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLElement | null)[]>([])
  // const { isLoading } = useLoading()

  useEffect(() => {
    // Only start animations when loading is complete
    if (navRef.current) {
      // Filter out null refs
      const validItems = itemsRef.current.filter(item => item !== null)
      
      // Set initial state - hidden and positioned below
      gsap.set(validItems, {
        y: 30,
        opacity: 0
      })

      // Animate items in with stagger
      gsap.to(validItems, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1, // 0.1 second delay between each item
        delay: 0.5 // Start after loading completes
      })
    }
  }, [])

  
  // Separate links and buttons from the constants
  const links = navbar_links.filter((item) => item.type === 'link')
  const buttons = navbar_links.filter((item) => item.type.startsWith('button'))

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[50] px-6 py-3 flex justify-between items-center
      bg-black/10"
    >
      {/* Left side - Logo and Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div 
          ref={(el) => { itemsRef.current[0] = el }}
          className="text-primary text-[24px] font-bold"
        >
          Nexa
        </div>

        {/* Navigation Links */}
        {links.map((link, index) => (
          <NavLink 
            key={link.name}
            ref={(el) => { itemsRef.current[1 + index] = el }}
            href={link.href}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right side - Buttons */}
      <div className="flex items-center gap-0">
        {buttons.map((button, index) => (
          <Button 
            key={button.name}
            ref={(el) => { itemsRef.current[1 + links.length + index] = el }}
            variant={button.type === 'button-primary' ? 'primary' : 'secondary'}
            onClick={() => window.location.href = button.href}
            scale={0.8}
          >
            {button.name}
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar 