import { Currency } from '@uniswap/sdk-core'
import { ReactComponent as PapersIcon } from 'assets/svg/papers-text.svg'
import { LoaderV3 } from 'components/Icons/LoadingSpinner'
import CurrencyLogo from 'components/Logo/CurrencyLogo'
import { useUnmountingAnimation } from 'hooks/useUnmountingAnimation'
import { useRef } from 'react'
import { CheckCircle, Clock } from 'react-feather'
import styled, { css, keyframes, useTheme } from 'styled-components'

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 50%;
  overflow: visible;
`

const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`
const fadeAndScaleIn = keyframes`
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
`
const fadeInAnimation = css`
  animation: ${fadeIn} ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
`
const fadeAndScaleInAnimation = css`
  animation: ${fadeAndScaleIn} ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0;  }
`
const fadeAndScaleOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0); }
`
const fadeOutAnimation = css`
  animation: ${fadeOut} ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
`
const fadeAndScaleOutAnimation = css`
  animation: ${fadeAndScaleOut} ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
`

export enum AnimationType {
  EXITING = 'exiting',
}

const FadeWrapper = styled.div<{ $scale: boolean }>`
  transition: display ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`},
    transform ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
  ${({ $scale }) => ($scale ? fadeAndScaleInAnimation : fadeInAnimation)}

  &.${AnimationType.EXITING} {
    ${({ $scale }) => ($scale ? fadeAndScaleOutAnimation : fadeOutAnimation)}
  }
`

function FadePresence({
  children,
  className,
  $scale = false,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  $scale?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  useUnmountingAnimation(ref, () => AnimationType.EXITING)
  return (
    <FadeWrapper ref={ref} className={className} $scale={$scale} {...rest}>
      {children}
    </FadeWrapper>
  )
}

const CurrencyLoaderContainer = styled(FadePresence)<{ asBadge: boolean }>`
  z-index: 2;
  border-radius: 50%;
  transition: all ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.inOut}`};
  position: absolute;
  height: ${({ asBadge }) => (asBadge ? '20px' : '100%')};
  width: ${({ asBadge }) => (asBadge ? '20px' : '100%')};
  bottom: ${({ asBadge }) => (asBadge ? '-4px' : 0)};
  right: ${({ asBadge }) => (asBadge ? '-4px' : 0)};
  outline: ${({ theme, asBadge }) => (asBadge ? `2px solid ${theme.background}` : '')};
`

const RaisedCurrencyLogo = styled(CurrencyLogo)`
  z-index: 1;
`

export function CurrencyLoader({ currency, asBadge = false }: { currency?: Currency; asBadge?: boolean }) {
  return (
    <CurrencyLoaderContainer asBadge={asBadge} data-testid={`pending-modal-currency-logo-${currency?.symbol}`}>
      <RaisedCurrencyLogo currency={currency} size="100%" />
    </CurrencyLoaderContainer>
  )
}

const PinkCircle = styled(FadePresence)`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accent1};
  z-index: 1;
`

export function PaperIcon() {
  return (
    <PinkCircle>
      <PapersIcon />
    </PinkCircle>
  )
}

const LoadingIndicator = styled(LoaderV3)`
  stroke: ${({ theme }) => theme.neutral3};
  fill: ${({ theme }) => theme.neutral3};
  top: -4px;
  left: -4px;
  position: absolute;
`

export function LoadingIndicatorOverlay() {
  return (
    <FadePresence>
      <LoadingIndicator />
    </FadePresence>
  )
}

function ConfirmedIcon({ className }: { className?: string }) {
  const theme = useTheme()
  return (
    <FadePresence $scale>
      <CheckCircle width={100} height={100} color="#044BB7" />
    </FadePresence>
  )
}

function SubmittedIcon({ className }: { className?: string }) {
  const theme = useTheme()
  return (
    <FadePresence $scale>
      <Clock width={100} height={100} color="#EEB317" />
    </FadePresence>
  )
}

const IconCss = css`
  position: absolute;
  height: 48px;
  width: 48px;
`

export const AnimatedEntranceConfirmationIcon = styled(ConfirmedIcon)`
  ${IconCss}
`

export const AnimatedEntranceSubmittedIcon = styled(SubmittedIcon)`
  ${IconCss}
`
