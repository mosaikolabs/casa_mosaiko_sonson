/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': {
          DEFAULT: 'var(--color-primary)', // terra-cotta
          foreground: 'var(--color-primary-foreground)' // white
        },
        
        // Secondary Colors
        'secondary': {
          DEFAULT: 'var(--color-secondary)', // stone-gray
          foreground: 'var(--color-secondary-foreground)' // white
        },
        
        // Accent Colors
        'accent': {
          DEFAULT: 'var(--color-accent)', // bronze
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        // Background Colors
        'background': 'var(--color-background)', // natural-linen
        'foreground': 'var(--color-foreground)', // aged-black
        
        // Surface Colors
        'card': {
          DEFAULT: 'var(--color-card)', // pure-white
          foreground: 'var(--color-card-foreground)' // aged-black
        },
        'popover': {
          DEFAULT: 'var(--color-popover)', // pure-white
          foreground: 'var(--color-popover-foreground)' // aged-black
        },
        
        // Muted Colors
        'muted': {
          DEFAULT: 'var(--color-muted)', // beige
          foreground: 'var(--color-muted-foreground)' // stone-gray
        },
        
        // Border and Input
        'border': 'var(--color-border)', // stone-gray
        'input': 'var(--color-input)', // white
        'ring': 'var(--color-ring)', // terra-cotta
        
        // Status Colors
        'success': {
          DEFAULT: 'var(--color-success)', // forest-green
          foreground: 'var(--color-success-foreground)' // white
        },
        'warning': {
          DEFAULT: 'var(--color-warning)', // warm-orange
          foreground: 'var(--color-warning-foreground)' // white
        },
        'error': {
          DEFAULT: 'var(--color-error)', // crimson
          foreground: 'var(--color-error-foreground)' // white
        },
        'destructive': {
          DEFAULT: 'var(--color-destructive)', // crimson
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // Text Colors
        'text-primary': 'var(--color-text-primary)', // aged-black
        'text-secondary': 'var(--color-text-secondary)' // stone-gray
      },
      
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900'
      },
      
      boxShadow: {
        'heritage': '0 4px 12px rgba(210, 105, 30, 0.15)',
        'card': '0 8px 24px rgba(47, 47, 47, 0.08)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none'
      },
      
      transitionDuration: {
        '250': '250ms',
        '300': '300ms'
      },
      
      transitionTimingFunction: {
        'heritage': 'ease-out'
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite'
      },
      
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300'
      }
    }
  },
  plugins: []
}