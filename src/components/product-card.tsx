import { useContext } from 'react'
import {
  ProductCardContainer,
  ProductInfo,
} from '../styles/components/product-card'
import { CartContext, Product } from '../contexts/cart-context'
import Image from 'next/image'

interface ProductCartProps {
  product: Product
}

export default function ProductCard({ product }: ProductCartProps) {
  const { removeProduct } = useContext(CartContext)

  return (
    <ProductCardContainer>
      <div>
        <Image src={product.imageUrl} width={95} height={95} alt="" />
      </div>
      <ProductInfo>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <button onClick={() => removeProduct(product.id)}>Remover</button>
      </ProductInfo>
    </ProductCardContainer>
  )
}
