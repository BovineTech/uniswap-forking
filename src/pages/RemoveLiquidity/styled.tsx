import { MaxButton } from 'pages/Pool/styled'
import { Text } from 'rebass'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`

export const SmallMaxButton = styled(MaxButton)`
  font-size: 12px;
  color: ${({ theme, value, buttonValue }) => (value === buttonValue ? '#ffffff' : theme.neutral1)};
  border-radius: 50px;
  border: 2px solid ${({ theme, value, buttonValue }) => (value === buttonValue ? theme.accent1 : theme.neutral1)};
  background-color: ${({ theme, value, buttonValue }) => (value === buttonValue ? theme.accent1 : theme.surface1)};

  &:hover {
    border: 2px solid ${({ theme }) => theme.accent1};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.accent1};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.accent1};
  }
`

export const ResponsiveHeaderText = styled(Text)`
  font-size: 40px;
  font-weight: 535;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`
