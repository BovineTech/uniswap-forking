import { t, Trans } from '@lingui/macro'
import { Settings } from 'components/Icons/Settings'
import Row from 'components/Row'
import { useUserSlippageTolerance } from 'state/user/hooks'
import { SlippageTolerance } from 'state/user/types'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'
import { useFormatter } from 'utils/formatNumbers'
import validateUserSlippageTolerance, { SlippageValidationResult } from 'utils/validateUserSlippageTolerance'

const Icon = styled(Settings)`
  height: 24px;
  width: 24px;
  > * {
    fill: ${({ theme }) => theme.accent1};
  }
`

const Button = styled.button<{ isActive: boolean }>`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  :not([disabled]):hover {
    opacity: 0.7;
  }

  ${({ isActive }) => isActive && `opacity: 0.7`}
`

const IconContainer = styled(Row)`
  padding: 6px 12px;
  border-radius: 6px;
`

const IconContainerWithSlippage = styled(IconContainer)<{ displayWarning?: boolean }>`
  div {
    color: ${({ theme, displayWarning }) => (displayWarning ? theme.deprecated_accentWarning : theme.neutral2)};
  }

  background-color: ${({ theme, displayWarning }) =>
    displayWarning ? theme.deprecated_accentWarningSoft : 'transparent'};
`
const SlippageText = styled(ThemedText.BodySmall)`
  @media (max-width: 500px) {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const ButtonContent = () => {
  const [userSlippageTolerance] = useUserSlippageTolerance()
  const { formatSlippage } = useFormatter()

  if (userSlippageTolerance === SlippageTolerance.Auto) {
    return (
      <IconContainer>
        <Icon />
      </IconContainer>
    )
  }

  const isInvalidSlippage = validateUserSlippageTolerance(userSlippageTolerance) !== SlippageValidationResult.Valid

  return (
    <IconContainerWithSlippage data-testid="settings-icon-with-slippage" gap="sm" displayWarning={isInvalidSlippage}>
      <SlippageText>
        <Trans>{formatSlippage(userSlippageTolerance)} slippage</Trans>
      </SlippageText>
      <Icon />
    </IconContainerWithSlippage>
  )
}

export default function MenuButton({
  disabled,
  onClick,
  isActive,
}: {
  disabled: boolean
  onClick: () => void
  isActive: boolean
}) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      isActive={isActive}
      id="open-settings-dialog-button"
      data-testid="open-settings-dialog-button"
      aria-label={t`Transaction Settings`}
    >
      <ButtonContent />
    </Button>
  )
}
