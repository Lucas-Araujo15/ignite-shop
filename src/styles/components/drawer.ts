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

  variants: {
    drawer: {
      open: { right: 0 },
      closed: { right: -500 },
    },
  },
})
