import {
  ProductCardContainer,
  ProductInfo,
} from '../styles/components/product-card'

export default function ProductCard() {
  return (
    <ProductCardContainer>
      <div>
        <p>Imagem</p>
      </div>
      <ProductInfo>
        <h3>Camiseta muito bonita</h3>
        <span>R$ 79,90</span>
        <button>Remover</button>
      </ProductInfo>
    </ProductCardContainer>
  )
}
