import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDarkModeManager } from 'theme/components/ThemeToggle'

const initialStyles = {
  width: '200vw',
  height: '200vh',
  transform: 'translate(-50vw, -100vh)',
}
const backgroundResetStyles = {
  width: '100vw',
  height: '100vh',
  transform: 'unset',
}

type TargetBackgroundStyles = typeof initialStyles | typeof backgroundResetStyles

const backgroundRadialGradientElement = document.getElementById('background-radial-gradient')
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[key as keyof typeof backgroundResetStyles] = value
    }
  })

function setDefaultBackground(backgroundRadialGradientElement: HTMLElement, darkMode?: boolean, pathname?: string) {
  setBackground(initialStyles)
  const bgSize = '100% 100%'
  const bgPosition = '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px'
  const bgImage =
    'radial-gradient(10% 20% at 30% 60%, #8F00FF33 0%, #FF000000 99%),radial-gradient(10% 20% at 70% 90%, #8F00FF33 0%, #FF000000 99%),radial-gradient(10% 20% at 20% 60%, #4E55FF1A 1%, #FF000000 99%),radial-gradient(10% 20% at 80% 90%, #4E55FF1A 1%, #FF000000 99%),linear-gradient(0deg, #171A1F 100%, #073AFF00 100%)'
  const bgImage_white = 'linear-gradient(0deg, #FFFFFF 100%, #FFFFFF 100%)'
  const defaultLightGradient =
    'linear-gradient(45deg, rgba(218,227,255,1) 15%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%)'
  const defaultDarkGradient = 'linear-gradient(180deg, #131313 0%, #131313 100%)'
  // backgroundRadialGradientElement.style.background = darkMode ? defaultDarkGradient : defaultLightGradient
  backgroundRadialGradientElement.style.backgroundSize = bgSize
  backgroundRadialGradientElement.style.backgroundPosition = bgPosition
  backgroundRadialGradientElement.style.backgroundImage = pathname === '/support' ? bgImage_white : bgImage
}

export default function RadialGradientByChainUpdater(): null {
  const { chainId } = useWeb3React()
  const [darkMode] = useDarkModeManager()
  const { pathname } = useLocation()

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return
    }

    // switch (chainId) {
    //   case ChainId.ARBITRUM_ONE:
    //   case ChainId.ARBITRUM_GOERLI: {
    //     setBackground(backgroundResetStyles)
    //     const arbitrumLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(205, 232, 251, 0) 0%, rgba(252, 243, 249, 0) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
    //     const arbitrumDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(10, 41, 75, 0) 0%, rgba(34, 30, 48, 0) 49.48%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? arbitrumDarkGradient : arbitrumLightGradient
    //     break
    //   }
    //   case ChainId.OPTIMISM:
    //   case ChainId.OPTIMISM_GOERLI: {
    //     setBackground(backgroundResetStyles)
    //     const optimismLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(255, 251, 242, 0) 0%, rgba(255, 244, 249, 0) 50.52%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
    //     const optimismDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(62, 46, 56, 0) 0%, rgba(44, 31, 45, 0) 50.52%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? optimismDarkGradient : optimismLightGradient
    //     break
    //   }
    //   case ChainId.POLYGON:
    //   case ChainId.POLYGON_MUMBAI: {
    //     setBackground(backgroundResetStyles)
    //     const polygonLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #FFFFFF'
    //     const polygonDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? polygonDarkGradient : polygonLightGradient
    //     break
    //   }
    //   case ChainId.CELO:
    //   case ChainId.CELO_ALFAJORES: {
    //     setBackground(backgroundResetStyles)
    //     const celoLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(186, 228, 210, 0) 0%, rgba(252, 243, 249, 0) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
    //     const celoDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(20, 49, 37, 0) 0%, rgba(12, 31, 23, 0) 49.48%, rgba(31, 33, 40, 0) 100%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? celoDarkGradient : celoLightGradient
    //     break
    //   }
    //   case ChainId.BNB: {
    //     setBackground(backgroundResetStyles)
    //     const bscLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(242 , 186, 8, 0) 0%, rgba(238, 182, 6, 0) 50%, rgba(140, 185, 11, 0) 100%), #FFFFFF'
    //     const bscDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(169, 132, 17, 0) 0%, rgba(128, 100, 14, 0) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? bscDarkGradient : bscLightGradient
    //     break
    //   }
    //   case ChainId.AVALANCHE: {
    //     setBackground(backgroundResetStyles)
    //     const avaxLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(255, 251, 242, 0) 0%, rgba(255, 244, 249, 0.0) 50.52%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
    //     const avaxDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(62, 46, 56, 0) 0%, rgba(44, 31, 45, 0.0) 50.52%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
    //     backgroundRadialGradientElement.style.background = darkMode ? avaxDarkGradient : avaxLightGradient
    //     break
    //   }
    //   case ChainId.BASE: {
    //     setBackground(backgroundResetStyles)
    //     const baseLightGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(0, 82, 255, 0) 0%, rgba(0, 82, 255, 0) 40.0%, rgba(252, 255, 82, 0.00) 100%), rgb(255, 255, 255)'
    //     const baseDarkGradient =
    //       'radial-gradient(100% 100% at 50% 0%, rgba(10, 41, 75, 0) 0%, rgba(0, 82, 255, 0) 40%, rgba(0, 82, 255, 0) 100%), rgb(13, 14, 14)'
    //     backgroundRadialGradientElement.style.background = darkMode ? baseDarkGradient : baseLightGradient
    //     break
    //   }
    //   default: {
    //     setDefaultBackground(backgroundRadialGradientElement, darkMode)
    //   }
    // }

    setDefaultBackground(backgroundRadialGradientElement, darkMode, pathname)
  }, [darkMode, chainId, pathname])
  return null
}
