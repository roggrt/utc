/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#FF0000',
        'gray-100': '#F5F7FA',
        'gray-200': '#E4E7EB',
        'gray-300': '#CBD2D9',
        'gray-400': '#9AA5B1',
        'gray-500': '#616E7C',
        'gray-600': '#3E4C59',
        'gray-700': '#2D3748',
        black: '#1A202C',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};