import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  scale?: number
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  scale = 1
}, ref) => {
  const baseStyles = "buttonText cursor-pointer text-white rounded-[10px] px-7 py-3 text-[16px] font-bold uppercase leading-[90%] localfont2 transition-colors duration-300"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary to-primary-2 text-white border hover:border-primary border-white/0 hover:from-primary/70 hover:to-primary-2/70 hover:to-primary-2/70 ",
    secondary: "bg-white/15 border border-white/0 hover:border-white/10 hover:bg-white/10"
  }

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      style={{ scale: scale }}
    >
      <div className='pt-1'>
        {children}
      </div>
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
