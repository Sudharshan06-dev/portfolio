export default {
  darkMode: 'class', // <-- THIS MUST BE 'class'
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  animation: {
    'fade-in': 'fadeIn 0.6s ease-out both',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0, transform: 'translateY(-5px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
  },
}

};
