import type { AppProps } from 'next/app'
import '@/pages/home/components/relatedProducts/components/carousel/plus.sass'
import { Header } from '@/components/header/index'
import { Footer } from '@/components/footer/index'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import '@/styles/globals.sass'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}
