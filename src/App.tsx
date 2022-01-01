import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react'
import { useMemo } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { QueryParamProvider } from 'use-query-params'
import { Web3ReactProvider } from '@web3-react/core'
import MainLayouts from 'src/components/MainLayouts'
import Footer from './components/Footer'
import Header from './components/Header'
import useEagerConnect from 'src/hooks/useEagerConnect'
import PrivateIDOPages from './pages/PrivateIDO'
import PrivateIDODetailPages from './pages/PrivateIDODetail'
import { getLibrary } from './utils/web3React'
import { RefreshContextProvider } from './contexts/RefreshContext'
import ModalProvider from './contexts/ModalContext'

const customTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none', background: 'transparent' },
        _active: { background: 'transparent', boxShadow: 'none' },
        _hover: { bg: 'transparent' },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    lineColor: '#7878AE',
    blueLinkColor: '#00A3FF',
  },
  shadows: {
    ...theme.shadows,
    outline: 'none',
  },
})

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const RouteAdapter = ({ children }: { children: any }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const adaptedHistory = useMemo(
    () => ({
      replace(location: any) {
        navigate(location, { replace: true, state: location.state })
      },
      push(location: any) {
        navigate(location, { replace: false, state: location.state })
      },
    }),
    [navigate],
  )
  return children({ history: adaptedHistory, location })
}

function App() {
  useEagerConnect()
  return (
    <ChakraProvider theme={customTheme}>
      <QueryParamProvider ReactRouterRoute={RouteAdapter as any}>
        <RefreshContextProvider>
          <ModalProvider>
            <MainLayouts>
              <Routes>
                <Route path="/" element={<PrivateIDOPages />} />
                <Route path="/private-ido" element={<PrivateIDOPages />} />
                <Route
                  path="/ido-detail/:id"
                  element={<PrivateIDODetailPages />}
                />
              </Routes>
            </MainLayouts>
          </ModalProvider>
        </RefreshContextProvider>
      </QueryParamProvider>
    </ChakraProvider>
  )
}

const ContainerApp = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3ReactProvider>
  )
}

export default ContainerApp
