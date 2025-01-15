import './App.css'

import { i18n } from '@lingui/core'
import { Trans } from '@lingui/macro'
import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Icons/LoadingSpinner'
import { IpfsSubpathRedirect } from 'components/IpfsSubpathRedirect'
import NavBar from 'components/NavBar'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import DarkModeQueryParamReader from 'theme/components/DarkModeQueryParamReader'
import { flexRowNoWrap } from 'theme/styles'
import { Z_INDEX } from 'theme/zIndex'

import Ethereum from '../assets/img/cryptocurrency/ethereum.svg'
import AccordionArrow from '../assets/img/svg/arrow.svg'
import Footer from './Footer'
import { RouteDefinition, routes, useRouterConfig } from './RouteDefinitions'

const AppChrome = lazy(() => import('./AppChrome'))

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh);
  padding: ${({ theme }) => theme.navHeight}px 0px 5rem 0px;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    min-height: 100vh;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    min-height: 100vh;
  }
`

const MobileBottomBar = styled.div`
  z-index: ${Z_INDEX.sticky};
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  width: calc(100vw - 16px);
  justify-content: space-between;
  padding: 0px 4px;
  height: ${({ theme }) => theme.mobileBottomBarHeight}px;
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  margin: 8px;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    display: none;
  }
`

const HeaderWrapper = styled.div<{ transparent?: boolean; scrollY: number; pathname?: string }>`
  ${flexRowNoWrap};
  background-color: ${({ theme, transparent, pathname }) =>
    !transparent && (pathname === '/support' ? '#FFFFFFF2' : theme.surface1)};
  border-bottom: ${({ theme, transparent, pathname }) =>
    !transparent && `1px solid ${pathname === '/support' ? '#FFFFFFF2' : theme.surface3}`};
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.dropdown};

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    top: 0;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    top: 0;
  }
`

function PoweredBy() {
  return (
    <div className="swap__protocol">
      Powered{' '}
      <a href="https://uniswap.org/" className="swap__protocol-link link-red">
        by Uniswap
      </a>{' '}
      Protocol V3
    </div>
  )
}
function InfoBlocks() {
  const listOfItems = [
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
    { name: 'Ethereum', shortName: 'ETH', logo: Ethereum, percent: '0.28%', value: '$2,909,56' },
  ]

  const handleAccordionClick = (event: any) => {
    const target = event.target
    const item = target.closest('.accordion__item')
    item.classList.toggle('active')
  }

  const currentLanguage = i18n.locale

  return (
    <div className="main-info">
      <div className="exchange-provide">
        <div className="container container--mini">
          <div className="exchange-provide__inner">
            <div className="exchange-provide__columns">
              {/* <div className="exchange-provide__made">
                <p className="exchange-provide__made-label">Exchange made easier</p>

                <ul className="exchange-provide__made-list">
                  {listOfItems.map((item, index) => (
                    <li className="exchange-provide__made-item" key={index}>
                      <div className="exchange-provide__made-info">
                        <img
                          className="exchange-provide__made-icon"
                          width="30"
                          height="30"
                          src={item.logo}
                          alt="token icon"
                        />
                        <p className="exchange-provide__made-name">{item.name}</p>
                        <p className="exchange-provide__made-network">{item.shortName}</p>
                      </div>

                      <div className="exchange-provide__made-sums">
                        <p className="exchange-provide__made-sum exchange-provide__made-sum--green">{item.percent}</p>
                        <p className="exchange-provide__made-sum">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="exchange-provide__empty">
                <p className="exchange-provide__empty-text">
                  Provide liquidity to pools on the Uniswap protocol and earn commissions on swaps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <a href="#" className="main-info__item main-info__item--rwa">
          <p className="cards__name">RWA marketplace</p>
        </a>
        <a href="#" className="main-info__item main-info__item--sawa">
          <div className="cards__name">Bambaswap Expert</div>
        </a>
        <a href="#" className="main-info__item main-info__item--twitter">
          <div className="cards__name">Twitter</div>
        </a>
      </div>
      <section className="faq">
        <div className="container container--mini">
          <div className="faq__inner">
            <div className="faq__head">
              <h3 className="faq__title">
                <Trans>Frequently asked questions</Trans>
              </h3>
              {/* <h4 className="faq__subtitle">The most popular questions</h4> */}
            </div>

            <div
              className="faq__accordion"
              style={currentLanguage === 'he-IL' ? { direction: 'rtl' } : { direction: 'ltr' }}
            >
              <div className="accordion">
                <div onClick={(event) => handleAccordionClick(event)} className="accordion__item" data-accordion-item>
                  <div className="accordion__header">
                    <h4 className="accordion__header-title">
                      <Trans>What is AMM</Trans>
                    </h4>
                    <div className="accordion__header-line">
                      <img src={AccordionArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="accordion__content">
                    <p className="accordion__text">
                      <Trans>
                        An Automated Market Maker (AMM) is a smart system found in Decentralized Exchanges (DEX), which
                        replaces the traditional order book with automated liquidity management. Instead of relying on
                        buyers and sellers creating bid and ask trade orders, AMM uses mathematical formulas to
                        determine asset prices. The role of AMM is to ensure that there is constant liquidity in the
                        market and to calculate the price according to the quantities of assets available in the pool.
                        Thus, the process becomes more automated and simpler, and enables continuous trade between
                        assets without depending on specific orders.
                      </Trans>
                    </p>

                    {/* <a className="accordion__link-video" href="#">
                      Watch the video
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z"
                          fill="#848484"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>

                <div onClick={(event) => handleAccordionClick(event)} className="accordion__item" data-accordion-item>
                  <div className="accordion__header">
                    <h4 className="accordion__header-title">
                      <Trans>What is a liquidity pool</Trans>
                    </h4>
                    <div className="accordion__header-line">
                      <img src={AccordionArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="accordion__content">
                    <p className="accordion__text">
                      <Trans>
                        A liquidity pool/repository is a group of tokens locked inside a smart contract and used to
                        trade between assets on a decentralized exchange (DEX) like BambaSwap.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        In traditional finance, liquidity is organized through a central order book where buyers and
                        sellers create orders (trades) sorted by price and demand.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        The AMM of the BambaSwap protocol determines the prices for the liquidity pools using the
                        mathematical formula x*y=k.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        Prices are determined by the amount of each token in the pool, where x and y represent the two
                        tokens in the liquidity pool. You can read more about it here: How are the prices determined? It
                        is important to assess the liquidity available in the pool before exchanging tokens. A pool with
                        low liquidity will not provide you with an optimal price, and may lead to a loss.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        To estimate the liquidity available in a liquidity pool, visit
                        https://info.bambaswap.com/#/pools and search for the pool or token you wish to exchange.
                      </Trans>
                    </p>

                    <a
                      className="accordion__link-video"
                      href="https://info.bambaswap.com/#/pools"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://info.bambaswap.com/#/pools
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z"
                          fill="#848484"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div onClick={(event) => handleAccordionClick(event)} className="accordion__item" data-accordion-item>
                  <div className="accordion__header">
                    <h4 className="accordion__header-title">
                      <Trans>What is an LP token</Trans>
                    </h4>
                    <div className="accordion__header-line">
                      <img src={AccordionArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="accordion__content">
                    <p className="accordion__text">
                      <Trans>
                        LP token (Liquidity Provider Token) is a token given to liquidity providers (LPs) in exchange
                        for providing liquidity to a liquidity pool in an automated market maker (AMM) system. When an
                        LP provides assets to a pool, he receives an LP token that represents his share of the pool and
                        his share of the liquidity he provided. LP tokens are proof of LPs' participation in the pool
                        and can be used for various purposes, such as exchanging back to the original assets or
                        participating in protocol incentives. They also provide information on LP's share of the pool
                        and allow tracking of value and relative share of liquidity.
                      </Trans>
                    </p>

                    {/* <a className="accordion__link-video" href="#">
                      Watch the video
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z"
                          fill="#848484"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>

                <div onClick={(event) => handleAccordionClick(event)} className="accordion__item" data-accordion-item>
                  <div className="accordion__header">
                    <h4 className="accordion__header-title">
                      <Trans>Fee</Trans>
                    </h4>
                    <div className="accordion__header-line">
                      <img src={AccordionArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="accordion__content">
                    <p className="accordion__text">
                      <Trans>
                        The BambaSwap protocol is developed on smart contracts in the Polygon network. When trading or
                        exchanging tokens, fees are charged that can be divided into 3 stages:
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>1. Fee set by the "LPs" (liquidity provider).</Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        This is the fee that the liquidity provider sets when providing its liquidity for
                        trading/exchange (0.01%, 0.03%, 0.5%, 1.00%)
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>2. Network fee (gas fee).</Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        Each network charges its own fee for transfers (transactions/trades/adding or removing
                        liquidity, etc.) The Ethereum network has its own gas price, in the Polygon network it is tens
                        of times lower, and varies from network to network.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        *the developers of BamabSwap chose the "Polygon" network as the main development network, which
                        is the Ethereum Network of the second level - L2 (developed specifically to increase the speed
                        and reduce the cost of processing transactions in the blockchain network).
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>3. Token/Coin Creator Fees</Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        Tokens that charge a fee are also known as tokens with a transfer fee. These fees are set and
                        collected by the token issuer. BambaSwap does not receive any share of these fees. Tokens that
                        charge a fee do not allow swaps to be made unless a buy and/or sell fee is paid. If the token
                        you are swapping has a buy or sell fee higher than 0.00%, then the token will charge a fee when
                        bought, sold or transferred on the blockchain network regardless of the platform.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <Trans>
                        * USDT creators have specified in the contract "to charge a fee of 2.00% of the transaction
                        amount", this variable is not enabled at the moment. But if USDT creators decide to enable it,
                        then any USDT transfer transaction will cost Gas + 2.00% of the transaction amount, even for P2P
                        transfers.
                      </Trans>
                    </p>

                    {/* <a className="accordion__link-video" href="#">
                      Watch the video
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z"
                          fill="#848484"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>

                <div onClick={(event) => handleAccordionClick(event)} className="accordion__item" data-accordion-item>
                  <div className="accordion__header">
                    <h4 className="accordion__header-title">
                      <Trans>Profit for Liquidity Providers (LPs)</Trans>
                    </h4>
                    <div className="accordion__header-line">
                      <img src={AccordionArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="accordion__content">
                    <p className="accordion__text">
                      <Trans>
                        Liquidity Providers (LPs) earn based on the formula x*y=k through fees charged on transactions
                        that occur in their liquidity pool. Here's how it is in progress:
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>Transaction fees</Trans>
                    </p>
                    <p className="accordion__text">
                      <span>
                        <Trans>The commission mechanism:</Trans>
                      </span>
                      <br />
                      <Trans>
                        Platforms like BambaSwap V3 charge a commission for each transaction that takes place in the
                        liquidity pool. The fees are divided among the LPs according to their share of the pool.
                        Example: If an LP provides liquidity in a pool and clients make conversions between assets in
                        that pool, each conversion generates a fee. This fee (eg, 0.30%) is divided among the LPs
                        according to their contribution to the liquidity in the pool.
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>Selection of liquidity ranges</Trans>
                    </p>
                    <p className="accordion__text">
                      <span>
                        <Trans>Concentrated liquidity:</Trans>
                      </span>
                      <br />
                      <Trans>
                        In BambaSwap V3 and similar systems, LPs can choose specific price ranges in which they want to
                        provide liquidity. This allows LPs to concentrate their assets in price ranges where
                        transactions are more likely to occur, potentially increasing their profits. Advantages: If an
                        LP chooses a price range with high trading activity, their share of transaction fees may be
                        higher, as the liquidity in this range is used more actively.
                      </Trans>
                    </p>
                    <p className="accordion__subtitle">
                      <Trans>Profit calculation</Trans>
                    </p>
                    <p className="accordion__text">
                      <span>
                        <Trans>Transaction Fees:</Trans>
                      </span>
                      <br />
                      <Trans>
                        LPs earn based on the fees from each transaction. The LP profit is calculated as the sum of fees
                        collected over a period of time, less any temporary losses or changes in the value of assets.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <span>
                        <Trans>Impermanent Loss:</Trans>
                      </span>
                      <br />
                      <Trans>
                        This is a potential loss resulting from changes in the price ratio of the assets in the pool
                        compared to their value if the LP had held the assets separately. Although this reduces overall
                        profit, proper liquidity allocation and active range selection may help minimize these losses.
                      </Trans>
                    </p>
                    <p className="accordion__text">
                      <span>
                        <Trans>An example of LP profit:</Trans>
                      </span>
                      <br />
                      <Trans>
                        Suppose LP provides pool liquidity for a token pair A and B. The commission for a transaction is
                        0.30%. If $1,000 worth of pool is traded in one day, and the fee is 0.30%, the total fee
                        collected will be $3.00. If the LP holds 10% of the total liquidity pool, their portion of the
                        fees will be 10% of $3.00, i.e. $0.30. If the LP has selected a price range with active trading,
                        he can earn more in commissions while keeping temporary losses to a minimum if the assets remain
                        in the selected range. In summary, LPs profit by providing liquidity and collecting transaction
                        fees from the transactions that are executed in their pool/repository. Their profit depends on
                        the pool trading activity, the effective selection of liquidity ranges and the management of
                        temporary losses.
                      </Trans>
                    </p>

                    {/* <a className="accordion__link-video" href="#">
                      Watch the video
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z"
                          fill="#848484"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const { pathname } = location
  const [scrollY, setScrollY] = useState(0)
  const scrolledState = scrollY > 0
  const routerConfig = useRouterConfig()

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrollY(0)
  }, [pathname])

  useEffect(() => {
    const scrollListener = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  // useEffect(() => {
  //   const handleUrlChange = () => {
  //     const url = new URL(window.location.href)
  //     const scheme = url.protocol
  //     if (scheme === 'wc:') {
  //       // Handle the WalletConnect URL here
  //       console.log('WalletConnect URL detected:', window.location.href)
  //       // You may need to extract parameters and use them
  //     }
  //   }

  //   window.addEventListener('popstate', handleUrlChange)
  //   handleUrlChange() // Initial check

  //   return () => {
  //     window.removeEventListener('popstate', handleUrlChange)
  //   }
  // }, [])

  const isHeaderTransparent = !scrolledState

  const blockedPaths = document.querySelector('meta[property="x:blocked-paths"]')?.getAttribute('content')?.split(',')
  const shouldBlockPath = blockedPaths?.includes(pathname) ?? false
  if (shouldBlockPath && pathname !== '/swap') {
    return <Navigate to="/swap" replace />
  }

  return (
    <ErrorBoundary>
      <IpfsSubpathRedirect />
      <DarkModeQueryParamReader />
      <HeaderWrapper transparent={isHeaderTransparent} scrollY={scrollY} pathname={pathname}>
        <NavBar blur={isHeaderTransparent} />
      </HeaderWrapper>
      <BodyWrapper>
        <Suspense>
          <AppChrome />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route: RouteDefinition) =>
              route.enabled(routerConfig) ? (
                <Route key={route.path} path={route.path} element={route.getElement(routerConfig)}>
                  {route.nestedPaths.map((nestedPath) => (
                    <Route path={nestedPath} key={`${route.path}/${nestedPath}`} />
                  ))}
                </Route>
              ) : null
            )}
          </Routes>
        </Suspense>
        {/* <PoweredBy /> */}
        {pathname === '/swap' && <InfoBlocks />}
      </BodyWrapper>
      <Footer />
      {/* <MobileBottomBar>
        <PageTabs />
      </MobileBottomBar> */}
    </ErrorBoundary>
  )
}
