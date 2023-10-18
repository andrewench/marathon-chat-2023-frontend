import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'marathon-black': '#00010d',
        'marathon-red': '#e51515',
        'marathon-blue': '#2286ad',
      },
      borderRadius: {
        'marathon-10': '10px',
        'marathon-15': '15px',
        'marathon-20': '20px',
      },
    },
  },
  plugins: [],
}
export default config
