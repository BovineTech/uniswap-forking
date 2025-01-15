// import { getBlockchainApiRpcUrl, mainnet, polygon } from '@reown/appkit/networks'
// import { CaipNetwork, createAppKit, Metadata } from '@reown/appkit/react'
// import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiProvider } from 'wagmi'

// const bnbSmartChain: CaipNetwork = {
//   id: 'eip155:56',
//   chainId: 56,
//   name: 'Binance Smart Chain',
//   currency: 'BNB',
//   explorerUrl: 'https://bscscan.com',
//   rpcUrl: getBlockchainApiRpcUrl(56, 'eip155'),
//   chainNamespace: 'eip155',
// }

// // 0. Setup queryClient
// const queryClient = new QueryClient()

// // 1. Get projectId from https://cloud.reown.com
// const projectId = '8d42cd78a902ab24b25021fe54acdac9'

// // 2. Create a metadata object - optional
// const metadata: Metadata = {
//   name: 'AppKit',
//   description: 'AppKit Example',
//   url: 'https://example.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/179229932'],
// }

// // 3. Set the networks
// const networks = [mainnet, polygon, bnbSmartChain]

// // 4. Create Wagmi Adapter
// const wagmiAdapter = new WagmiAdapter({
//   networks,
//   projectId,
//   ssr: true,
// })

// // 5. Create modal
// createAppKit({
//   adapters: [wagmiAdapter],
//   networks,
//   projectId,
//   metadata,
//   features: {
//     email: false,
//     swaps: false,
//     onramp: false,
//     socials: [],
//     analytics: true, // Optional - defaults to your Cloud configuration
//   },
//   themeVariables: {
//     '--w3m-accent': '#c12477',
//   },
// })

// export function AppKitProvider({ children }: { children: JSX.Element }) {
//   return (
//     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   )
// }

export {}
