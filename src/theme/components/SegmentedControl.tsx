import Row, { AutoRow } from 'components/Row'
import { PropsWithChildren } from 'react'
import { Icon } from 'react-feather'
import styled, { css } from 'styled-components'
import { ThemedText } from 'theme/components'

const SegmentWrapper = styled(AutoRow)<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  cursor: pointer;

  border-radius: 12px;
  padding: 6px;
  color: ${({ theme }) => theme.neutral2};
  gap: 4px;

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.accent2};
      color: ${({ theme }) => theme.accent1};
    `};

  :hover {
    background-color: ${({ theme, active }) => (active ? theme.surface3 : theme.surface2)};
    color: ${({ theme }) => theme.neutral1};
  }

  transition: ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.ease}`};
`

type SegmentProps<T> = PropsWithChildren<{
  active?: boolean
  value: T
  Icon?: Icon
  onSelect?: (v: T) => void
  testId?: string
}>
export function Segment<T>({ active, value, Icon, onSelect, testId, children }: SegmentProps<T>) {
  return (
    <SegmentWrapper active={active} onClick={() => onSelect?.(value)} data-testid={testId}>
      {Icon && <Icon size={20} stroke="currentColor" />}
      <ThemedText.SubHeader color="currentColor">{children}</ThemedText.SubHeader>
    </SegmentWrapper>
  )
}

const SegmentedControlWrapper = styled(Row)`
  border-radius: 6px;
  gap: 4px;
  padding: 4px;
  outline: 1px solid ${({ theme }) => theme.surface3};
  outline-offset: -1px;
`

export function SegmentedControl<T>({
  selected,
  onSelect,
  children,
}: {
  selected: T
  onSelect: (v: T) => void
  children: React.ReactElement<SegmentProps<T>>[]
}) {
  return (
    <SegmentedControlWrapper>
      {/* Defaults child segment onSelect & active props based on control parent input */}
      {children.map((segment, index) => {
        if (segment?.type != Segment) {
          console.warn('<SegmentedControl> children must be of type <Segment>')
          return null
        }
        return (
          <Segment
            {...segment.props}
            onSelect={segment.props.onSelect ?? onSelect}
            active={segment.props.active ?? segment.props.value === selected}
            key={`segment ${index}`}
          />
        )
      })}
    </SegmentedControlWrapper>
  )
}
