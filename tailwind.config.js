/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'card-bg': 'var(--card-bg)',
        'primary-bg': 'var(--primary-bg)',
        'heading-color': 'var(--heading-color)',
        'paragraph-color': 'var(--paragraph-color)',
        'item-bg': 'var(--item-bg)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'border-light': 'var(--border-light)',
        'text-default': 'var(--text-default)',
        'button-text-color': 'var(--button-text-color)',
        'home-card-bg': 'var(--home-card-bg)',
        'home-card-border': 'var(--home-card-border)'
        
      },
      backgroundImage: {
        'light': "url('./src/assets/light-theme-bg.jpg')",
        // 'avatar': "url('./src/assets/avatar.jpg')",
        'dark': "url('./src/assets/dark-theme-bg.jpg')",
        'page-bg-img': 'var(--page-bg-img)'
      },
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /text|bg|border-(red|orange|green|yellow|blue|indigo|pink|purple)-(100|500)/,
    },
  ],
}

