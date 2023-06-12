import { ReactNode, createContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextType {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function addProduct(product: Product) {
    console.log(products)
    setProducts((state) => [...state, product])
  }

  function removeProduct(id: string) {
    setProducts((state) => {
      return state.filter((product) => product.id !== id)
    })
  }

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
