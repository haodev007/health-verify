import type { AppProps } from 'next/app'
import { providers } from 'ethers'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { connectors } from '../utils/connectors'
import { infuraProvider } from 'wagmi/providers/infura'


const infuraId = process.env.REACT_APP_INFURA_ID
const { provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [infuraProvider({ infuraId })],
)

const client = createClient({
  connectors,
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp
