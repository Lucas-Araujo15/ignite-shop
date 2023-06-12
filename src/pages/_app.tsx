import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import Drawer from '../components/drawer'
import { useState } from 'react'
import { CartContextProvider } from '../contexts/cart-context'
import Header from '../components/header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [drawerStatus, setDrawerStatus] = useState<'open' | 'closed'>('closed')

  function handleSetDrawerStatus(status: 'open' | 'closed') {
    setDrawerStatus(status)
  }

  return (
    <Container>
      <CartContextProvider>
        <Drawer status={drawerStatus} changeStatus={handleSetDrawerStatus} />
        <Header setDrawerStatus={handleSetDrawerStatus} />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
