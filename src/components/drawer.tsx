import { X } from 'phosphor-react'
import {
  DrawerContainer,
  ItemsList,
  ItemsListContainer,
  OrderInformation,
  OrderInformationContainer,
} from '../styles/components/drawer'
import ProductCard from './product-card'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/cart-context'

interface DrawerProps {
  status: 'open' | 'closed'
  changeStatus: (status: 'open' | 'closed') => void
}

export default function Drawer({ status, changeStatus }: DrawerProps) {
  const { products, isCreatingCheckoutSession, handleBuyProduct } =
    useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const isCartEmpty = products?.length === 0 || products === undefined

  useEffect(() => {
    setTotalPrice(products.reduce((acc, num) => acc + num.price, 0))
  }, [products])

  return (
    <DrawerContainer drawer={status}>
      <X size={24} onClick={() => changeStatus('closed')} />
      <div>
        <ItemsListContainer>
          <h2>Sacola de compras</h2>
          <ItemsList>
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />
            })}
          </ItemsList>
        </ItemsListContainer>
        <OrderInformationContainer>
          <div>
            <OrderInformation>
              <span>Quantidade</span>
              <span>{products.length} itens</span>
            </OrderInformation>
            <OrderInformation>
              <span>Valor total</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalPrice)}
              </span>
            </OrderInformation>
          </div>
          <button
            disabled={isCartEmpty || isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Finalizar compra
          </button>
        </OrderInformationContainer>
      </div>
    </DrawerContainer>
  )
}
