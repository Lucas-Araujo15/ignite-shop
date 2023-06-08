import { styled } from '..'

export const DrawerContainer = styled('div', {
  height: '100%',
  width: 480,
  right: -500,
  position: 'fixed',
  zIndex: 999,
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  transition: 'right 0.2s',
  padding: '2.5rem 2.5rem 3rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',

  svg: {
    cursor: 'pointer',
    marginLeft: 'calc(100% - 24px)',
  },

  h2: {
    fontSize: '$lg',
    fontWeight: 'bold',
  },

  '&>div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },

  variants: {
    drawer: {
      open: { right: 0 },
      closed: { right: -500 },
    },
  },
})

export const ItemsListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const ItemsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const OrderInformationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.4375rem',

  '&>div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },

  button: {
    background: '$green500',
    height: '4.3125rem',
    border: 'none',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: '$md',
    color: '$white',
    cursor: 'pointer',
    transition: 'background 0.2s',

    '&:hover': {
      transition: 'background 0.2s',
      background: '$green300',
    },
  },
})

export const OrderInformation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '&:nth-child(1) span:nth-child(2)': {
    color: '$gray300',
  },

  '&:nth-child(2)': {
    fontWeight: 'bold',
    fontSize: '$xl',
  },
})
