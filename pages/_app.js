
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import Layout from '../src/components/layout'
import { useState } from 'react'
import Login from './login'
function MyApp({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <ChakraProvider resetCSS theme={theme}>
      {
        !isLogged ? (<Layout>
          <Component {...pageProps} />
        </Layout>) : <Login/>
      }
    </ChakraProvider>
  )
}

export default MyApp
