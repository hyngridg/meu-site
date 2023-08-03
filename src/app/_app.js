import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
      rosa: '#FF4081',
      azulEscuro: '#153e75',
      azulClaro: '#2a69ac',
    },
  }

export const theme = extendTheme({ 
  colors,
  components: {
    Button: {
      bg: 'rosa.100',
      color: 'rosa.600',
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;