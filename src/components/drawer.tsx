import { DrawerContainer } from '../styles/components/drawer'

interface DrawerProps {
  status: 'open' | 'closed'
  changeStatus: () => void
}

export default function Drawer({ status, changeStatus }: DrawerProps) {
  return (
    <DrawerContainer drawer={status}>
      <button onClick={() => changeStatus()}>fechar</button>
      <h1>Sacola de compras</h1>
    </DrawerContainer>
  )
}
