import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1e6f9f',
        'blue-regular': '#4ea8de',
        'purple-dark': '#5e60ce',
        'purple-regular': '#8284fa',

        'gray-700': '#0d0d0d',
        'gray-600': '#1a1a1a',
        'gray-600-65': 'hsl(0 0% 10% 0.65)',
        'gray-500': '#262626',
        'gray-400': '#333333',
        'gray-300': '#808080',
        'gray-200': '#d9d9d9',
        'gray-100': '#f2f2f2',

        danger: '#e25858',
        'danger-2': 'hsl(0 70% 62% 0.8)',
      },

      keyframes: {
        'overlay-fade-in': {
          from: {
            opacity: '0',
          },

          to: {
            opacity: '1',
          },
        },
        'modal-fade-in': {
          from: {
            opacity: '0',
            transform: 'translate(-50%, calc(-50% - 2rem))',
          },

          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%)',
          },
        },
      },

      animation: {
        'overlay-fade-in':
          'overlay-fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-fade-in': 'modal-fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
