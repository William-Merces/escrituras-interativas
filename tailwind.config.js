/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card-background)',
      },
      backgroundColor: {
        background: 'var(--background)',
        card: 'var(--card-background)',
      },
      textColor: {
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|from|to)-(primary|secondary)-(50|100|500|600|700|800|900)/,
    },
    {
      pattern: /dark:(bg|text|border)-(slate|gray)-(700|800|900)/,
    },
  ],
}