/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    colors: {
      transparent: 'transparent',
      'bcg': '#EFF5FF',
      'marine-blue': '#1b3b49',
      'purplish-blue': '#8258fc',
      'pastel-blue': '#c6e1ff',
      'light-blue': '#d2f1ff',
      'strawberry-red': '#e83e74',
      'cool-gray': '#a2abbf',
      'light-gray': '#e1e8f9',
      'magnolia': '#f8fcfe',
      'alabaster': '#fcfdfe',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        'sidebar-desktop': "url('/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}
