import React, { useState } from 'react'
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from 'react-pro-sidebar'
import LogoFullIcon from 'src/assets/images/logo-full-icon.png'
import {
  Box,
  HStack,
  Text,
  Flex,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Image,
} from '@chakra-ui/react'
import { ReactComponent as BuyFamIcon } from 'src/assets/svgs/buy-fam-icon.svg'

import { ReactComponent as FamCircleIcon } from 'src/assets/svgs/fam-circle-icon.svg'
import { ReactComponent as TelegramIcon } from 'src/assets/svgs/telegram-icon.svg'
import { ReactComponent as FaceBookIcon } from 'src/assets/svgs/facebook-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/svgs/twitter-icon.svg'
import { ReactComponent as DarkModeIcon } from 'src/assets/svgs/ic_brightness-icon.svg'
import { ReactComponent as LightModeIcon } from 'src/assets/svgs/ic_wb_sunny.svg'
import { ReactComponent as GlobalIcon } from 'src/assets/svgs/language-icon.svg'
import { ReactComponent as WalletIcon } from 'src/assets/svgs/wallet-icon.svg'
import { ReactComponent as Investment } from 'src/assets/svgs/investment-icon.svg'
import { ReactComponent as CollapsedIcon } from 'src/assets/svgs/collapse-menu-icon.svg'
import { ReactComponent as BlindBoxIcon } from 'src/assets/svgs/blind-box.svg'
import { ReactComponent as NFTSummonIcon } from 'src/assets/svgs/nft-icon.svg'
import { ReactComponent as NFTRecoveryIcon } from 'src/assets/svgs/nft-recovery.svg'

import { ReactComponent as PrivateIDOIcon } from 'src/assets/svgs/private-ido.svg'
import { Link, useLocation } from 'react-router-dom'
import useGetFAMInfo from 'src/hooks/useGetFAMInfo'

import ConnectWalletButton from './ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'src/hooks/useAuth'
import useWalletModal from 'src/hooks/useWalletModal'
import BgImage from 'src/assets/images/bg_website.png'
import NBImage from 'src/assets/images/nav_bar.png'
import { useWindowSize } from 'src/hooks/useWindowSize'

const ListMenu = [
  {
    id: 1,
    link: '#',
    title: 'Buy FAM',
    Icon: BuyFamIcon,
  },
  {
    id: 2,
    link: '#',
    title: 'Blindbox',
    coming: true,
    Icon: BlindBoxIcon,
  },
  {
    id: 3,
    link: '#',
    title: 'NFT Summon',
    coming: true,
    Icon: NFTSummonIcon,
  },
  {
    id: 4,
    link: '/private-ido',
    title: 'Private IDO',
    Icon: PrivateIDOIcon,
  },
  {
    id: 5,
    link: '#',
    coming: true,
    title: 'NFT Recovery',
    Icon: NFTRecoveryIcon,
  },
]

const MainLayout: React.FC = ({ children }) => {
  const { width } = useWindowSize()
  const [collapsed, setCollapsed] = useState(true)
  const location = useLocation()
  const { priceFormat } = useGetFAMInfo()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentAccountModal } = useWalletModal(login, logout, account)

  return (
    <Flex overflow="hidden" position="relative">
      <Box
        style={{
          transition: 'left 0.3s',
        }}
        position="absolute"
        top="10px"
        left={collapsed ? '68px' : '270px'}
        zIndex="1010"

        display={width <= 768 ? 'none' : 'block'}
        onClick={() => {
          setCollapsed((currentState) => !currentState)
        }}
      >
        <CollapsedIcon />
      </Box>

      <Box
        h="100vh"
        bgImage={NBImage}
        position={{ base: 'absolute', md: 'relative' }}
        zIndex={20}
      >
        <ProSidebar collapsed={collapsed} collapsedWidth={0}>
          <SidebarHeader>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box w={121} mt="40px">
                <img src={LogoFullIcon} alt="LogoFullIcon" />
              </Box>
            </Box>
          </SidebarHeader>
          <SidebarContent style={{ marginTop: 20 }}>
            <Menu iconShape="square">
              {ListMenu.map((item, index) => {
                const { Icon, title, id, link, coming = false } = item
                return (
                  <MenuItem
                    key={index}
                    icon={<Icon />}
                    active={location.pathname === link}
                  >
                    <Box

                    >
                      <Link to={link}>
                        <Text
                          fontSize="16px"
                          lineHeight="28px"
                          color={
                            location.pathname === link ? 'white' : '#838383'
                          }
                        >
                          {title}{' '}
                          {coming ? (
                            <span style={{ fontSize: 10 }}>(Coming Soon)</span>
                          ) : (
                            ''
                          )}
                        </Text>
                      </Link>
                    </Box>
                  </MenuItem>
                )
              })}
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <Box
          style={{
            opacity: collapsed ? 0 : 1,
            display: collapsed ? 'none' : 'block',
            transition: 'opacity 0.2s',
          }}
          p="16px"
          position="absolute"
          bottom="0px"
          left="0px"
          zIndex={1010}
        >
          <HStack spacing="13px">
            <FamCircleIcon />
            <Text color="white" fontSize="24px" fontWeight="bold">
              {priceFormat}
            </Text>
          </HStack>
          <HStack mt="23px">
            <Text color="white" fontSize="20px" fontWeight="bold" mr="26px">
              Media:
            </Text>
            <HStack spacing="26px">
              <FaceBookIcon
                onClick={() => {
                  window.open('https://www.facebook.com/famcentralofficial')
                }}
              />
              <TelegramIcon
                onClick={() => {
                  window.open('https://t.me/famcentralchatgroup')
                }}
              />
              <TwitterIcon
                onClick={() => {
                  window.open('https://twitter.com/fam_central')
                }}
              />
            </HStack>
          </HStack>
          <Flex mt="23px" flex="1">
            <HStack>
              <LightModeIcon /> <Text>/</Text> <DarkModeIcon />
            </HStack>
            <Spacer />

            <Popover
              placement="top-start"
              strategy="absolute"
              preventOverflow={false}
            >
              <PopoverTrigger>
                <HStack>
                  <GlobalIcon />
                  <Text color="white" fontSize="20px" fontWeight="bold">
                    ENG
                  </Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent width="100px">
                <PopoverBody>
                  <Text>English</Text>
                  <Text>Vietnam</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
      </Box>

      <Box
        backgroundSize="cover"
        overflow="hidden"
        width="100%"
        backgroundImage={BgImage}
      >
        <HStack
          flexDir="row"
          px={{
            base: '20px',
            lg: '44px',
          }}
          mt="20px"
          mb="20px"
        >
          <Box>
            <Box display={width <= 768 ? 'block' : 'none'}>
              <HStack>
                <Image
                  src="/svgs/hamburger-menu.svg"
                  onClick={() => setCollapsed((current) => !current)}
                  zIndex={2000}
                />
                <Image src="/svgs/yellow-logo-fam.svg" />
              </HStack>
            </Box>
          </Box>
          <Spacer />
          {!account ? (
            <ConnectWalletButton />
          ) : (
            <Button
              px="15px"
              m="0"
              bg="white"
              color="#000"
              _focus={{
                backgroundColor: 'white',
              }}
              _hover={{
                backgroundColor: 'white',
              }}
              _active={{
                backgroundColor: 'white',
              }}
            >
              <WalletIcon />{' '}
              <Text
                fontSize="16px"
                lineHeight="16px"
                ml="5px"
                onClick={onPresentAccountModal}
              >
                Connected: {account?.substring(0, 12) ?? ''}...
              </Text>
            </Button>
          )}
        </HStack>
        <Box width="100%">{children}</Box>
      </Box>
    </Flex>
  )
}

export default MainLayout
