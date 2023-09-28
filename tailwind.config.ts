import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'marathon-black': '#00010d',
      },
    },
  },
  plugins: [],
}
export default config
