import theme from './src/config/theme.json';

export default {
  content: [
    "./index.html",
    "./404.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        display: ['Manrope Variable', 'Readex Pro', 'system-ui', 'sans-serif'],
        body: ['Readex Pro', 'Manrope Variable', 'system-ui', 'sans-serif']
      },
      borderRadius: theme.radius,
      spacing: theme.spacing,
      transitionTimingFunction: theme.easing,
      transitionDuration: theme.durations,
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        doorway: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        },
        fadeLight: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.8 }
        }
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        slide: 'slide 0.8s 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        doorway: 'doorway 0.6s 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        fadeLight: 'fadeLight 0.8s 1.4s ease forwards'
      }
    },
  },
  plugins: [],
};