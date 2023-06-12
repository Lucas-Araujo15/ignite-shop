import Image from 'next/image'
import {
  CartButton,
  HeaderContainer,
  ProductsAmount,
} from '../styles/components/header'
import logoImg from '../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'
import { Handbag } from 'phosphor-react'

interface HeaderProps {
  setDrawerStatus: (status: 'open' | 'closed') => void
}

export default function Header({ setDrawerStatus }: HeaderProps) {
  const { products } = useContext(CartContext)

  const isCartEmpty = products?.length === 0 || products === undefined

  return (
    <HeaderContainer>
      <Image priority src={logoImg} alt="" />
      <CartButton onClick={() => setDrawerStatus('open')}>
        <ProductsAmount state={isCartEmpty === true ? 'empty' : 'full'}>
          {products?.length}
        </ProductsAmount>
        <Handbag size={24} weight="bold" />
      </CartButton>
    </HeaderContainer>
  )
}
