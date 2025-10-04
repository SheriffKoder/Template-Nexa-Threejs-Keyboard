'use client'
import React from 'react'
import { footer_content } from '@/section-contents'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2  bg-white/5 rounded-md p-2 md:p-4">
            <h3 className="text-xl font-bold text-primary mb-3">{footer_content.company.name}</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">{footer_content.company.description}</p>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-2 md:flex md:space-x-4">
              {footer_content.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className='p-2 md:p-4'>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {footer_content.links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className='p-2 md:p-4'>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footer_content.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className='p-2 md:p-4'>
            <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-3">
              {footer_content.links.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className='p-2 md:p-4'>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footer_content.links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2 text-sm">{footer_content.newsletter.title}</h4>
            <p className="text-gray-400 text-sm mb-4">{footer_content.newsletter.description}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={footer_content.newsletter.placeholder}
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                {footer_content.newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} {footer_content.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer