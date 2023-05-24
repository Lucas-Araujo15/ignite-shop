import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, laborum
          similique tempore perspiciatis voluptates veritatis incidunt natus
          delectus. Architecto, debitis! Porro modi accusantium non quos nemo
          deserunt unde laboriosam. Voluptatum?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
