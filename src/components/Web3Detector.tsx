import { useEffect } from 'react'

const Web3Detector: React.FC = () => {
  useEffect(() => {
    // Set up Web3 detection for wallets
    if (typeof window !== 'undefined') {
      // Add Web3 application metadata
      window.isWeb3App = true
      window.dappName = 'PepeDex'
      window.dappUrl = window.location.origin
      window.dappDescription = 'A Web3 Decentralized Exchange on Sepolia'

      // Set up wallet detection properties if ethereum exists
      if (window.ethereum) {
        const walletDetectionProps = [
          'isMetaMask',
          'isTrust',
          'isCoinbaseWallet',
          'isBinanceChain',
          'isTokenPocket',
          'isSafePal',
          'isOpera',
          'isBraveWallet',
          'isMathWallet',
          'isCoin98',
          'isBlocto',
        ]

        walletDetectionProps.forEach((prop) => {
          if (!window.ethereum[prop]) {
            window.ethereum[prop] = false
          }
        })
      }

      // Add Web3 provider detection
      if (!window.web3) {
        window.web3 = {}
      }

      // Notify wallets that this is a Web3 application
      const event = new CustomEvent('web3-app-detected', {
        detail: {
          name: 'PepeDex',
          url: window.location.origin,
          description: 'A Web3 Decentralized Exchange',
          chains: ['ethereum', 'bsc', 'arbitrum'],
        },
      })
      window.dispatchEvent(event)

      console.log('Web3 application detected: PepeDex')
    }
  }, [])

  return null
}

export default Web3Detector
