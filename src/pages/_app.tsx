import { ResetCSS, ToastListener } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import GlobalCheckClaimStatus from 'components/GlobalCheckClaimStatus'
import { NetworkModal } from 'components/NetworkModal'
import { FixedSubgraphHealthIndicator } from 'components/SubgraphHealthIndicator/FixedSubgraphHealthIndicator'
import { useAccountEventListener } from 'hooks/useAccountEventListener'
import useEagerConnect from 'hooks/useEagerConnect'
import useEagerConnectMP from 'hooks/useEagerConnect.bmp'
import useSentryUser from 'hooks/useSentryUser'
import useThemeCookie from 'hooks/useThemeCookie'
import useUserAgent from 'hooks/useUserAgent'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, useStore } from 'state'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { Blocklist, Updaters } from '..'
import { SentryErrorBoundary } from '../components/ErrorBoundary'
import Menu from '../components/Menu'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'
import Web3Detector from '../components/Web3Detector'

const EasterEgg = dynamic(() => import('components/EasterEgg'), { ssr: false })

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  usePollCoreFarmData()
  useUserAgent()
  useAccountEventListener()
  useSentryUser()
  useThemeCookie()
  return null
}

function MPGlobalHooks() {
  usePollBlockNumber()
  useEagerConnectMP()
  usePollCoreFarmData()
  useUserAgent()
  useAccountEventListener()
  useSentryUser()
  return null
}

function MyApp(props: AppProps<{ initialReduxState: any }>) {
  const { pageProps, Component } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="Cheap?" />
        <meta name="theme-color" content="#3a8a37" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content="st." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="K-Force Dex V2 - The Greenest DEX for PoI." />
        <title>Sepolia V2 Interface</title>

        {/* Web3 Provider Detection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Web3 Provider Detection
              if (typeof window !== 'undefined') {
                // Ensure ethereum object exists
                if (!window.ethereum) {
                  window.ethereum = {};
                }
                
                // Add common wallet detection properties
                window.ethereum.isMetaMask = window.ethereum.isMetaMask || false;
                window.ethereum.isTrust = window.ethereum.isTrust || false;
                window.ethereum.isCoinbaseWallet = window.ethereum.isCoinbaseWallet || false;
                window.ethereum.isBinanceChain = window.ethereum.isBinanceChain || false;
                window.ethereum.isTokenPocket = window.ethereum.isTokenPocket || false;
                window.ethereum.isSafePal = window.ethereum.isSafePal || false;
                
                // Add Web3 detection
                window.web3 = window.web3 || {};
                
                // Notify that this is a Web3 application
                window.isWeb3App = true;
                window.dappName = 'PepeDex';
                window.dappUrl = window.location.origin;
              }
            `,
          }}
        />

        {(Component as NextPageWithLayout).mp && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="https://public.bnbstatic.com/static/js/mp-webview-sdk/webview-v1.0.0.min.js" id="mp-webview" />
        )}
      </Head>
      <Providers store={store}>
        <Blocklist>
          {(Component as NextPageWithLayout).mp ? <MPGlobalHooks /> : <GlobalHooks />}
          <Web3Detector />
          <ResetCSS />
          <GlobalStyle />
          <GlobalCheckClaimStatus excludeLocations={[]} />
          <PersistGate loading={null} persistor={persistor}>
            <Updaters />
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>
  /** render component without all layouts */
  pure?: true
  /** is mini program */
  mp?: boolean
  /**
   * allow chain per page, empty array bypass chain block modal
   * @default [ChainId.BSC]
   * */
  chains?: number[]
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? SentryErrorBoundary : Fragment

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component.pure) {
    return <Component {...pageProps} />
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  const ShowMenu = Component.mp ? Fragment : Menu

  return (
    <ProductionErrorBoundary>
      <ShowMenu>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShowMenu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <FixedSubgraphHealthIndicator />
      <NetworkModal pageSupportedChains={Component.chains} />
    </ProductionErrorBoundary>
  )
}

export default MyApp
