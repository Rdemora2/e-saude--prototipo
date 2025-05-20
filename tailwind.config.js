/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#faae2b',
        tertiary: '#00B4D8',
        darkBlue: '#003559',
        lightBlue: '#EEF6FB',
        grayText: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 53, 89, 0.6), rgba(0, 53, 89, 0.6)), url('https://esaude.nexxt.work/wp-content/uploads/2025/05/online-telemedicine.jpg')",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'btn': '0 4px 14px rgba(250, 174, 43, 0.3)',
      },
    },
  },
  plugins: [],
};