"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/navbar"
import MobileNav from "@/components/layout/mobile-nav"
import SceneWrapper from "@/features/hero/scene/keyboard-scene"
import ScrollReveal from "@/components/animations/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      {/* Background - Desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-screen z-0">
        <SceneWrapper />
        <div className="pointer-events-none bg-gradient-to-t from-black to-20% to-transparent absolute inset-0 z-1" />
      </div>

      {/* Background - Mobile */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-screen z-0">
        <Image 
          src="/images/hero-background-1.png" 
          alt="Keyboard Hero Background" 
          height={1138}
          width={902}
          className="object-cover w-full h-full" 
          quality={100}
          priority
          unoptimized
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden w-full">
        <MobileNav />
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8">
        <ScrollReveal duration={1} start="top 80%">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <ScrollReveal duration={1} delay={0.1}>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Welcome Back
                </h1>
              </ScrollReveal>
              <ScrollReveal duration={1} delay={0.2}>
                <p className="text-gray-400 text-sm md:text-base">
                  Sign in to your Nexa account
                </p>
              </ScrollReveal>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <ScrollReveal duration={1} delay={0.3}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal duration={1} delay={0.4}>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal duration={1} delay={0.5}>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary bg-white/5 border-white/10 rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-400">Remember me</span>
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal duration={1} delay={0.6}>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-3 text-lg font-medium"
                >
                  Sign In
                </Button>
              </ScrollReveal>
            </form>

            {/* Footer */}
            <ScrollReveal duration={1} delay={0.7}>
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Don't have an account?{" "}
                  <Link 
                    href="/signup" 
                    className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
