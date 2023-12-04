import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      gridTemplateColumns: {
        'auto-fit-400': 'repeat(auto-fit, minmax(400px, 1fr))',
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))'
      },
      colors: {
        primary: '#4E42D4',
        secondary: '#808080',
        light: '#F5FFFA',
        dark: '#222222'
      },
      rotate: {
        '360': '360deg'
      }
    }
  },
  plugins: []
};
export default config;
