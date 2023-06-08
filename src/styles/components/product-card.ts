import { styled } from '..'

export const ProductCardContainer = styled('div', {
  height: '5.875rem',
  width: '100%',
  display: 'flex',
  gap: '1.25rem',

  '&>div:nth-child(1)': {
    width: '6.375rem',
    height: '100%',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  h3: {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    color: '$green500',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    },
  },
})
