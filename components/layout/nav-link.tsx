import React from 'react'

interface NavLinkProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

const NavLink = React.forwardRef<HTMLDivElement, NavLinkProps>(({ 
  children, 
  href, 
  onClick, 
  className = '' 
}, ref) => {
  const baseStyles = "text-white text-[18px] font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          // behavior: 'smooth',
          block: 'start'
        })
      }
    }
    
    if (onClick) {
      onClick()
    }
  }
  
  if (href) {
    return (
      <a 
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`${baseStyles} ${className}`}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }
  
  return (
    <div 
      ref={ref}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
})

NavLink.displayName = 'NavLink'

export { NavLink }
