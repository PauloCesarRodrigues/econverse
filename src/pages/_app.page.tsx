import type { AppProps } from 'next/app'
import { Header } from '@/components/header/index'
import { Footer } from '@/components/footer/index'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

import '@/styles/carousel.sass'
import '@/styles/globals.sass'
import '@/styles/_variables.sass'
import 'swiper/css'
import 'swiper/css/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}
