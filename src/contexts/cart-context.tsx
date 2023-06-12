import axios from 'axios'
import { ReactNode, createContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
}

interface CartContextType {
  products: Product[]
  isCreatingCheckoutSession: boolean
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
  handleBuyProduct: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const priceIdList = products.map((product) => {
        return product.defaultPriceId
      })

      const response = await axios.post('/api/checkout', {
        priceIdList,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(true)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

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
    <CartContext.Provider
      value={{
        products,
        isCreatingCheckoutSession,
        addProduct,
        removeProduct,
        handleBuyProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
