import localFont from 'next/font/local'

export const roboto = localFont({
  src: [
    {
      path: '../../assets/fonts/Roboto-Light.ttf',
      weight: '300',
    },
    {
      path: '../../assets/fonts/Roboto-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Roboto-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../assets/fonts/Roboto-Bold.ttf',
      weight: '700',
    },
  ],
})
