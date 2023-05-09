import { styled } from '../styles'

// Estilização aplicada somente em Runtime (Tempo de execução)
const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
