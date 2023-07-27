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
      'marine-blue': '#02295a',
      'dark-blue': '#174A8B',
      'purplish-blue': '#473dff',
      'pastel-blue': '#adbeff',
      'light-blue': '#bfe2fd',
      'strawberry-red': '#ed3548',
      'cool-gray': '#9699ab',
      'light-gray': '#d6d9e6',
      'magnolia': '#f0f6ff',
      'alabaster': '#fafbff',
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
