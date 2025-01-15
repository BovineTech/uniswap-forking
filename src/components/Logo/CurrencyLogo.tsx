import { ChainId, Currency } from '@uniswap/sdk-core'
import { TokenInfo } from '@uniswap/token-lists'
import { getChainInfo } from 'constants/chainInfo'
import styled from 'styled-components'

import AssetLogo, { AssetLogoBaseProps } from './AssetLogo'

export default function CurrencyLogo(
  props: AssetLogoBaseProps & {
    currency?: Currency | null
  }
) {
  const ChainLogo = styled.img`
    width: calc(${props.size ?? '100%'} / 2);
    height: calc(${props.size ?? '100%'} / 2);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
  `
  return (
    <div style={{ position: 'relative' }}>
      <AssetLogo
        isNative={props.currency?.isNative}
        chainId={props.currency?.chainId}
        address={props.currency?.wrapped.address}
        symbol={props.symbol ?? props.currency?.symbol}
        backupImg={(props.currency as TokenInfo)?.logoURI}
        hideL2Icon={props.hideL2Icon ?? true}
        {...props}
      />
      {ChainId.MAINNET !== props.currency?.chainId && (
        <ChainLogo
          src={getChainInfo(props.currency?.chainId)?.squareLogoUrl}
          alt={getChainInfo(props.currency?.chainId)?.label}
        />
      )}
    </div>
  )
}
