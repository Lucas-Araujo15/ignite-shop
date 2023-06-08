import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { HandbagSimple } from 'phosphor-react'
import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from '../styles/pages/app'

import Image from 'next/image'
import Drawer from '../components/drawer'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [drawerStatus, setDrawerStatus] = useState<'open' | 'closed'>('closed')

  function handleSetDrawerStatus(status: 'open' | 'closed') {
    setDrawerStatus(status)
  }

  return (
    <Container>
      <Drawer status={drawerStatus} changeStatus={handleSetDrawerStatus} />
      <Header>
        <Image priority src={logoImg} alt="" />
        <CartButton onClick={() => setDrawerStatus('open')}>
          <span>1</span>
          <HandbagSimple weight="bold" size={24} />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
