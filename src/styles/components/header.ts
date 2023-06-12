import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  background: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',

  svg: {
    color: '$gray300',
  },
})

export const ProductsAmount = styled('span', {
  position: 'absolute',
  background: '$green500',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  // display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  outline: '3px solid $gray900',
  margin: '-38px -38px 0 0',

  variants: {
    state: {
      empty: { display: 'none' },
      full: { display: 'flex' },
    },
  },
})
