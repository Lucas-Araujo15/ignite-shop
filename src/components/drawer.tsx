import { X } from 'phosphor-react'
import {
  DrawerContainer,
  ItemsList,
  ItemsListContainer,
  OrderInformation,
  OrderInformationContainer,
} from '../styles/components/drawer'
import ProductCard from './product-card'

interface DrawerProps {
  status: 'open' | 'closed'
  changeStatus: (status: 'open' | 'closed') => void
}

export default function Drawer({ status, changeStatus }: DrawerProps) {
  return (
    <DrawerContainer drawer={status}>
      <X size={24} onClick={() => changeStatus('closed')} />
      <div>
        <ItemsListContainer>
          <h2>Sacola de compras</h2>
          <ItemsList>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ItemsList>
        </ItemsListContainer>
        <OrderInformationContainer>
          <div>
            <OrderInformation>
              <span>Quantidade</span>
              <span>3 itens</span>
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
