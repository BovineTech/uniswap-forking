import { useWeb3React } from '@web3-react/core'
import { Menu } from 'components/AccountDrawer/SlideOutMenu'
import Column from 'components/Column'
import Row from 'components/Row'
import { useCurrency } from 'hooks/Tokens'
import { useActiveLocale } from 'hooks/useActiveLocale'
import useCurrencyBalance from 'lib/hooks/useCurrencyBalance'
import { ReactNode, useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather'
import styled from 'styled-components'
import { ClickableStyle, ThemedText } from 'theme/components'
import { NumberType, useFormatter } from 'utils/formatNumbers'

import Bitcoin from '../../assets/img/cryptocurrency/bitcoin.svg'
import Dogecoin from '../../assets/img/cryptocurrency/dogecoin.svg'
import Ethereum from '../../assets/img/cryptocurrency/ethereum.svg'
import Polygon from '../../assets/img/cryptocurrency/polygon.svg'
// import ArrowBig from '../../assets/img/svg/arrow-big.svg'
// import Card from '../../assets/img/svg/card.svg'
// import View from '../../assets/img/svg/view.svg'
import { GitVersionRow } from './GitVersionRow'

const Container = styled(Column)`
  height: 100%;
`

const SectionTitle = styled(ThemedText.SubHeader)`
  color: ${({ theme }) => theme.neutral2};
  padding-bottom: 24px;
`

const ToggleWrapper = styled.div<{ currencyConversionEnabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: ${({ currencyConversionEnabled }) => (currencyConversionEnabled ? '10px' : '24px')};
`

const SettingsButtonWrapper = styled(Row)`
  ${ClickableStyle}
  padding: 16px 0px;
`

const StyledChevron = styled(ChevronRight)`
  color: ${({ theme }) => theme.neutral2};
`

const LanguageLabel = styled(Row)`
  white-space: nowrap;
`

const SettingsButton = ({
  title,
  currentState,
  onClick,
  testId,
}: {
  title: ReactNode
  currentState: ReactNode
  onClick: () => void
  testId?: string
}) => (
  <SettingsButtonWrapper data-testid={testId} align="center" justify="space-between" onClick={onClick}>
    <ThemedText.SubHeaderSmall color="textPrimary">{title}</ThemedText.SubHeaderSmall>
    <LanguageLabel gap="xs" align="center" width="min-content">
      <ThemedText.LabelSmall color="textPrimary">{currentState}</ThemedText.LabelSmall>
      <StyledChevron size={20} />
    </LanguageLabel>
  </SettingsButtonWrapper>
)

export default function SettingsMenu({ openLanguageSettings }: { openLanguageSettings: () => void }) {
  const activeLocale = useActiveLocale()
  const { formatCurrencyAmount } = useFormatter()
  const { account } = useWeb3React()
  const ethCurrency = useCurrency('ETH')
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, ethCurrency)
  const [balanceDown, setBalanceDown] = useState(false)
  const [walletBalance, setWalletBalance] = useState(
    formatCurrencyAmount({
      amount: selectedCurrencyBalance,
      type: NumberType.TokenNonTx,
    })
  )

  useEffect(() => {
    setWalletBalance(formatCurrencyAmount({ amount: selectedCurrencyBalance, type: NumberType.TokenNonTx }))
  }, [selectedCurrencyBalance, formatCurrencyAmount])


  const [tabItem, setTabItem] = useState('tokens')
  const [tokensList, setTokensList] = useState([
    {
      name: 'Ethereum',
      trend_sum: 2.44,
      icon: Ethereum,
      trend_pc: '+4.73%',
      amount: 7153.13,
      amount_us: 17437.81,
    },
    {
      name: 'Bitcoin',
      trend_sum: 64723.12,
      icon: Bitcoin,
      trend_pc: '-1.22%',
      amount: 12.26,
      amount_us: 620372.13,
    },
    {
      name: 'Polygon',
      trend_sum: 134.44,
      icon: Polygon,
      trend_pc: '+1.22%',
      amount: 12.26,
      amount_us: 620372.13,
    },
    {
      name: 'Dogecoin',
      trend_sum: 134.44,
      icon: Dogecoin,
      trend_pc: '+1.22%',
      amount: 12.26,
      amount_us: 620372.13,
    },
  ])
  const [nftsList, setNftsList] = useState([
    {
      name: 'Dogecoin',
      icon: Dogecoin,
    },
    {
      name: 'Polygon',
      icon: Polygon,
    },
  ])

  return (
    <Menu>
      <Container>
        <div className={`wallet__balance wallet-balance${balanceDown ? '__trend--fall' : ''}`}>
          <label className="wallet-balance__label">Balance</label>
          <div className="wallet-balance__total">
            {walletBalance} {selectedCurrencyBalance?.currency.symbol}
          </div>
          {/* <div className="wallet-balance__trend">
            <img src={ArrowBig} className="wallet-balance__trend-icon" />
            <span className="wallet-balance__trend-sum">$0</span>
            <span className="wallet-balance__trend-pc">(0%)</span>
          </div> */}
        </div>
        {/* <div className="wallet__actions">
          <a href="#" className="wallet__action wallet__action--buy">
            <img src={Card} className="wallet__action-icon" />
            <p className="wallet__action-text">Buy</p>
          </a>
          <a href="#" className="wallet__action wallet__action--view">
            <img src={View} className="wallet__action-icon" />
            <p className="wallet__action-text">View NFTs</p>
          </a>
        </div> */}
        {/* <div className="wallet__line"></div>
        <div className="wallet__tabs">
          <nav className="wallet__tabs-navigation">
            <button
              onClick={() => setTabItem('tokens')}
              className={`wallet__tab-title ${tabItem === 'tokens' ? 'active' : ''}`}
            >
              Tokens
            </button>
            <button
              onClick={() => setTabItem('nfts')}
              className={`wallet__tab-title ${tabItem === 'nfts' ? 'active' : ''}`}
            >
              NFTs
            </button>
            <button
              onClick={() => setTabItem('pools')}
              className={`wallet__tab-title ${tabItem === 'pools' ? 'active' : ''}`}
            >
              Pools
            </button>
            <button
              onClick={() => setTabItem('activity')}
              className={`wallet__tab-title ${tabItem === 'activity' ? 'active' : ''}`}
            >
              Activity
            </button>
          </nav>
          <div className="wallet__tabs-content assets">
            {tabItem === 'tokens' &&
              tokensList.map((item) => (
                <div key={item.name} className="wallet__tabs-body assets__item">
                  <div className="assets__item-token">
                    <img src={item.icon} alt="token" className="assets__item-icon" />
                    <div className="assets__item-info">
                      <p className="assets__item-name">{item.name}</p>
                      <div className="assets__item-trend">
                        <span className="assets__item-trend-sum">${item.trend_sum.toLocaleString()}</span>
                        <span className="assets__item-trend-pc">{item.trend_pc}</span>
                      </div>
                    </div>
                  </div>
                  <div className="assets__item-sum">
                    <span className="assets__item-amount">{item.amount}</span>
                    <span className="assets__item-usd">${item.amount_us.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            {tabItem === 'nfts' &&
              nftsList.map((item) => (
                <div key={item.name} className="wallet__tabs-body assets__item">
                  <div className="assets__item-token">
                    <img src={item.icon} alt="token" className="assets__item-icon" />
                    <div className="assets__item-info">
                      <p className="assets__item-name">{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div> */}
        {/* <GitVersionRow /> */}
      </Container>
    </Menu>
  )
}
