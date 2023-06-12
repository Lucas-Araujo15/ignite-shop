import { X } from 'phosphor-react'
import {
  DrawerContainer,
  ItemsList,
  ItemsListContainer,
  OrderInformation,
  OrderInformationContainer,
} from '../styles/components/drawer'
import ProductCard from './product-card'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'

interface DrawerProps {
  status: 'open' | 'closed'
  changeStatus: (status: 'open' | 'closed') => void
}

export default function Drawer({ status, changeStatus }: DrawerProps) {
  const { products } = useContext(CartContext)

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
              <span>R$ 270,00</span>
            </OrderInformation>
          </div>
          <button>Finalizar compra</button>
        </OrderInformationContainer>
      </div>
    </DrawerContainer>
  )
}
