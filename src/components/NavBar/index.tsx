import { Trans } from '@lingui/macro'
import clsx from 'clsx'
import { useAccountDrawer } from 'components/AccountDrawer'
import Web3Status from 'components/Web3Status'
import { useIsPoolsPage } from 'hooks/useIsPoolsPage'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { LogoIcon } from 'nft/components/icons'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Link, NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useIsNavSearchInputVisible } from '../../nft/hooks/useIsNavSearchInputVisible'
import Blur from './Blur'
import * as styles from './style.css'

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 90px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: ${({ theme }) => `${theme.navVerticalPad}px 20px`};
  }
`

const StyledBurgerIcon = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 27px;
  background: transparent;
  margin-left: 15px;
  border: none;
  transition: transform 0.3s ease;

  @media only screen and (max-width: 960px) {
    display: flex;
  }

  .bar {
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(4px, 6px);
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -9px);
  }
`

const MenuRow = styled(Row)`
  @media only screen and (max-width: 960px) {
    position: absolute;
    top: ${({ theme }) => theme.navHeight}px;
    left: 0px;
    background-color: ${({ theme }) => theme.surface3};
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    transition: all 0.3s ease;
    transform: scaleY(0);
    transform-origin: top;

    &.active {
      transform: scaleY(1);
    }
  }
`

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
}

const MenuItem = ({ href, dataTestId, id, isActive, children }: MenuItemProps) => {
  const { pathname } = useLocation()
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : pathname === '/support' ? styles.menuItem_black : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none', overflow: 'hidden', whiteSpace: 'nowrap' }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}

const PageTabs = () => {
  const { pathname } = useLocation()

  const isPoolActive = useIsPoolsPage()

  return (
    <>
      <MenuItem href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem href="/pools" dataTestId="pool-nav-link" isActive={isPoolActive}>
        <Trans>Pool</Trans>
      </MenuItem>
      <MenuItem href="/" isActive={pathname.startsWith('/listing')}>
        <Trans>Listing</Trans>
      </MenuItem>
      <MenuItem href="/buy-crypto" isActive={pathname.startsWith('/buy-crypto')}>
        <Trans>Buy Crypto</Trans>
      </MenuItem>
    </>
  )
}

const Navbar = ({ blur }: { blur: boolean }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isNavSearchInputVisible = useIsNavSearchInputVisible()

  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer()

  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setIsActive(false)
  }, [location.pathname])

  const handleLogoIconClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer()
    }
    navigate({
      pathname: '/',
      search: '?intro=true',
    })
  }, [accountDrawerOpen, navigate, toggleAccountDrawer])

  return (
    <>
      {blur && <Blur />}
      <Nav>
        <Box display="flex" height="full" flexWrap={{ sm: 'wrap', lg: 'nowrap' }}>
          <Box className={styles.leftSideContainer}>
            <Link to="/">
              <Box className={clsx(styles.logoContainer, 'header__logo logo')}>
                <LogoIcon
                  width="48"
                  height="48"
                  data-testid="sawaswap-logo"
                  className={clsx(styles.logo, 'header__logo-icon logo-icon')}
                  onClick={handleLogoIconClick}
                />
                <p
                  className="header__logo-text logo-text"
                  style={{ color: location.pathname === '/support' ? 'black' : '' }}
                >
                  Bamba Swap
                </p>
              </Box>
            </Link>
            {/* <Box display={{ sm: 'flex', lg: 'none' }}>
              <ChainSelector leftAlign={true} />
            </Box> */}
            <MenuRow className={isActive ? 'active' : ''}>
              <PageTabs />
            </MenuRow>
          </Box>
          {/* <Box
            className={styles.searchContainer}
            {...(isNavSearchInputVisible && {
              display: 'flex',
            })}
          ></Box> */}
          {location.pathname !== '/support' && (
            <Box className={styles.rightSideContainer}>
              <Row gap="12">
                {/* <Box position="relative" display={isNavSearchInputVisible ? 'none' : { sm: 'flex' }}></Box>
              <Box className="wallet-header" display={{ sm: 'none', lg: 'flex' }}>
                <ChainSelector />
              </Box> */}
                <Web3Status />
                {/* <w3m-button label='Connect'/> */}
              </Row>
              <StyledBurgerIcon className={isActive ? 'active' : ''} onClick={toggleActive}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </StyledBurgerIcon>
            </Box>
          )}
        </Box>
      </Nav>
    </>
  )
}

export default Navbar
