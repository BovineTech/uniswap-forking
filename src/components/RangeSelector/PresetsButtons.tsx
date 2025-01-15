import { Trans } from '@lingui/macro'
import { ButtonOutlined } from 'components/Button'
import { AutoRow } from 'components/Row'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'

const Button = styled(ButtonOutlined).attrs(() => ({
  padding: '0px 6px',
  $borderRadius: '5px',
}))`
  color: #cd2677;
  flex: 1;
  border: 1px solid #cd2677;
`

interface PresetsButtonsProps {
  onSetFullRange: () => void
}

export default function PresetsButtons({ onSetFullRange }: PresetsButtonsProps) {
  return (
    <AutoRow gap="4px" width="auto">
      <Button data-testid="set-full-range" onClick={onSetFullRange}>
        <ThemedText.DeprecatedBody color="#cd2677" fontSize={12}>
          <Trans>Full range</Trans>
        </ThemedText.DeprecatedBody>
      </Button>
    </AutoRow>
  )
}
