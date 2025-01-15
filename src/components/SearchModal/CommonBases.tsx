import { Currency } from '@uniswap/sdk-core'
import CurrencyLogo from 'components/Logo/CurrencyLogo'
import { AutoRow } from 'components/Row'
import { COMMON_BASES } from 'constants/routing'
import { useTokenInfoFromActiveList } from 'hooks/useTokenInfoFromActiveList'
import { Text } from 'rebass'
import styled from 'styled-components'
import { currencyId } from 'utils/currencyId'

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 6px;
  display: flex;
  padding: 6px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 12px;
  line-height: 0px;
  user-select: 'none';

  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && 'pointer'};
    background-color: ${({ theme, disable }) => !disable && theme.deprecated_hoverDefault};
  }

  color: ${({ theme, disable }) => disable && theme.accent1};
  background-color: #363A41;
`

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: number
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  const bases = chainId !== undefined ? COMMON_BASES[chainId] ?? [] : []

  return bases.length > 0 ? (
    <AutoRow gap="4px">
      {bases.map((currency: Currency) => {
        const isSelected = selectedCurrency?.equals(currency)

        return (
          <BaseWrapper
            tabIndex={0}
            onKeyPress={(e) => !isSelected && e.key === 'Enter' && onSelect(currency)}
            onClick={() => !isSelected && onSelect(currency)}
            disable={isSelected}
            key={currencyId(currency)}
            data-testid={`common-base-${currency.symbol}`}
          >
            <CurrencyLogoFromList currency={currency} />
            <Text fontWeight={400} fontSize={16} lineHeight="16px">
              {currency.symbol}
            </Text>
          </BaseWrapper>
        )
      })}
    </AutoRow>
  ) : null
}

/** helper component to retrieve a base currency from the active token lists */
function CurrencyLogoFromList({ currency }: { currency: Currency }) {
  const token = useTokenInfoFromActiveList(currency)

  return <CurrencyLogo currency={token} style={{ marginRight: 8 }} />
}
