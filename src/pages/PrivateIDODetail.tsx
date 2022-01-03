import { FC } from 'react'
import {
  Box,
  SimpleGrid,
  Center,
  Text,
  Grid,
  GridItem,
  HStack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Divider,
  Spacer,
  Tag,
  TagLabel,
  Image,
  Flex,
  VStack,
} from '@chakra-ui/react'

import OpenLinkIcon from 'src/components/Svg/Icons/OpenNew'
import { useTimer } from 'react-timer-hook'
import CountDown from 'src/components/CountDown'
import TableRightInvestment from 'src/components/TableRightInvestment'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { stringDateToUTCDate } from 'src/utils/helpers'
import useModalStackNFT from 'src/hooks/useModalStackNFT'

type IProps = {}

const time = stringDateToUTCDate('2022/01/04 04:00:00')

const IdoDetailView: FC<IProps> = (props: IProps) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn('onExpire called'),
  })
  const { width } = useWindowSize()

  return (
    <Box
      pb="50px"
      px={{
        base: '20px',
      }}
    >
      <Box
        flex={1}
        m={{
          base: 5,
          lg: 10,
          xl: 10,
        }}
        // mx={{
        //   base: '10px',
        //   '2xl': '400px',
        // }}
      >
        <Grid
          templateRows="repeat(2, 0fr)"
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(12, 1fr)',
            lg: 'repeat(5, 1fr)',
            xl: 'repeat(3, 1fr)',
            '2xl': 'repeat(4, 1fr)',
          }}
        >
          <GridItem
            rowSpan={0}
            colSpan={{
              base: 2,
              md: 5,
              lg: 2,
              xl: 1,
              '2xl': 1,
            }}
          >
            <Image src={'/svgs/img.svg'} alt="DemoImg" />
          </GridItem>

          <GridItem
            rowSpan={0}
            colSpan={{
              base: 2,
              md: 7,
              lg: 3,
              xl: 2,
              '2xl': 3,
            }}
            ml="10px"
          >
            <Box>
              <Flex w={'full'}>
                <Image src={'/svgs/avatar.svg'} />
                <Center>
                  <Text
                    fontWeight="bold"
                    fontSize={width <= 768 ? '16px' : '24px'}
                    lineHeight="34px"
                    color="#EFBF1C"
                    ml={{
                      lg: '15px',
                      xl: '15px',
                      '2xl': '15px',
                    }}
                  >
                    Luna Rush (LUS)
                  </Text>
                </Center>
              </Flex>

              <Box>
                <Flex>
                  <SimpleGrid
                    columns={{
                      base: 2,
                      md: 4,
                      lg: 4,
                      xl: 4,
                      '2xl': 4,
                    }}
                    ml={{
                      lg: '80px',
                      xl: '80px',
                      '2xl': '80px',
                    }}
                  >
                    {[
                      {
                        id: 1,
                        title: 'Telegram Group',
                        icon: '/svgs/logo-telegram.svg',
                        href: 'https://t.me/lunarush_official',
                      },
                      {
                        id: 2,
                        title: 'Telegram ANN',
                        icon: '/svgs/logo-telegram.svg',
                        href: 'https://t.me/lunarushchannel',
                      },
                      {
                        id: 3,
                        title: 'Twitter',
                        icon: '/svgs/logo-twitter.svg',
                        href: 'twitter.com/LunaRush_LUS',
                      },
                      {
                        id: 4,
                        title: 'Facebook',
                        icon: '/svgs/logo-facebook.svg',
                        href: 'www.facebook.com/lunarush.lus',
                      },
                      {
                        id: 5,
                        title: 'Medium',
                        icon: '/svgs/logo-medium.svg',
                        href: 'https://medium.com/@lunarush',
                      },
                      {
                        id: 6,
                        title: 'Youtube',
                        icon: '/svgs/logo-youtube.svg',
                        href: 'https://www.youtube.com/channel/UCWxgGBof3NtjcXLrWKswCbQ',
                      },
                      {
                        id: 7,
                        title: 'Discord',
                        icon: '/svgs/logo-discord.svg',
                        href: 'https://discord.gg/xdzjQbvYrV',
                      },
                    ].map((item) => (
                      <HStack
                        key={item.id}
                        border="1px solid #3A3A3A"
                        borderRadius="5"
                        maxW="150px"
                        spacing="6px"
                        padding="1"
                        ml={2}
                        mb={2}
                        onClick={() => {
                          window.open(item.href, '_blank')
                        }}
                        style={{ cursor: 'pointer' }}
                        justifyContent={'space-around'}
                      >
                        <Image src={item.icon} />
                        <Text fontSize="12px" color="white">
                          {item.title}
                        </Text>
                        <OpenLinkIcon size={12} />
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Flex>

                <Box mt="16px">
                  <Text fontSize="16px" color="#838383">
                    Total Supply: 350,000,000 LUS
                  </Text>

                  <Box mt="16px" maxWidth={'max-content'}>
                    <Text fontSize="16px" color="#838383">
                      Address: 0xde301D6a2569aEfcFe271B9d98f318BAee1D30a4
                    </Text>
                  </Box>
                  <Text mt="16px" fontSize="16px" color="#838383">
                    Luna Rush is an idle RPG game based on blockchain
                    technology. You can fight other players, team up with
                    friends, win a tournament and earn money with your strategy
                    and luck.
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt="36px">
          <GridItem
            rowSpan={{
              base: 1,
              md: 1,
              lg: 1,
              xl: 1,
              '2xl': 1,
            }}
            colSpan={{
              base: 10,
              md: 3,
              lg: 3,
              xl: 3,
              '2xl': 3,
            }}
          >
            <Text fontSize="24px" lineHeight="34px" fontWeight="bold">
              Community Pool
            </Text>

            <Box mt={'15px'}>
              <Box>
                <Tag
                  size="lg"
                  variant="subtle"
                  bg="#3A3A3A"
                  border="1px solid #CCCCCC"
                >
                  <Image src="/svgs/busd.svg" />
                  <TagLabel>
                    <Text
                      fontSize="10px"
                      lineHeight="22px"
                      color="white"
                      ml="5px"
                    >
                      BUSD
                    </Text>
                  </TagLabel>
                </Tag>

                <Tag
                  size="lg"
                  variant="subtle"
                  bg="#3A3A3A"
                  border="1px solid #CCCCCC"
                  ml={width <= 320 ? 0 : '10px'}
                  mt={width <= 320 ? '5px' : 0}
                >
                  <TagLabel>
                    <Text fontSize="12px" lineHeight="22px" color="white">
                      Apply Whitelist Required: Yes
                    </Text>
                  </TagLabel>
                </Tag>

                <Box mt="5px">
                  <Text
                    text="16px"
                    lineHeight="26px"
                    mt="24px"
                    // mb={{
                    //   base: '10px',
                    //   lg: '-20px',
                    //   xl: '-20px',
                    //   '2xl': '-20px',
                    // }}
                    color="#838383"
                  >
                    Pool is open to join in
                  </Text>
                  <CountDown
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    showDetail={true}
                  />
                </Box>
              </Box>

              <TableRightInvestment />
            </Box>
          </GridItem>

          <GridItem
            colSpan={{
              base: 10,
              md: 2,
              lg: 2,
              xl: 2,
              '2xl': 2,
            }}
          >
            <Box
              bg="#0C0A00"
              px="12px"
              py="24px"
              borderRadius="8px"
              border="1px solid #3A3A3A"
            >
              <HStack>
                <Text fontSize="16px" lineHeight="26px" color="#838383">
                  Pool Allocation:
                </Text>
                <Spacer />
                <Box display={'flex'}>
                  <Image src={'/svgs/lus.svg'} alt="DemoImg" pr="5px" />
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    color="white"
                    fontWeight={'bold'}
                  >
                    166,666.667 LUS
                  </Text>
                </Box>
              </HStack>
              <HStack mt="20px">
                <Text fontSize="16px" lineHeight="26px" color="#838383">
                  Swap Rate:
                </Text>
                <Spacer />
                <Text
                  fontSize="16px"
                  lineHeight="26px"
                  color="white"
                  fontWeight={'bold'}
                >
                  1 LUS = 0.06 BUSD
                </Text>
              </HStack>
              <Divider my="32px" borderColor="#3A3A3A" />
              <Text fontSize="16px" lineHeight="26px" color="#838383">
                Swap progress
              </Text>
              <Slider aria-label="slider-ex-4" defaultValue={50}>
                <SliderTrack bg="#E3E3E3">
                  <SliderFilledTrack bg="#EFBF1C" />
                </SliderTrack>
                <SliderThumb boxSize={6} style={{ background: 'transparent' }}>
                  <Image src={'/svgs/rocket-icon.svg'} />
                </SliderThumb>
              </Slider>
              <HStack>
                <Text fontSize="12px" lineHeight="22px" color="#838383">
                  00%
                </Text>
                <Spacer />
                <Text fontSize="12px" lineHeight="22px" color="#838383">
                  50%
                </Text>
                <Spacer />
                <Text fontSize="12px" lineHeight="22px" color="#838383">
                  100%
                </Text>
              </HStack>
              <Divider my="32px" borderColor="#3A3A3A" />
              <Text
                fontSize="16px"
                lineHeight="30px"
                fontWeight="bold"
                color="#838383"
              >
                Your Balance:
              </Text>
              <HStack mt="12px">
                <Image src={'/svgs/fam.svg'} alt="DemoImg" pr="5px" />
                <Text fontSize="16px" lineHeight="26px" fontWeight="bold">
                  <strong>-</strong> FAM
                </Text>
              </HStack>
              <HStack mt="12px">
                <Image src={'/svgs/busd.svg'} alt="DemoImg" pr="5px" />
                <Text fontSize="16px" lineHeight="26px" fontWeight="bold">
                  <strong>-</strong> BUSD
                </Text>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
export default IdoDetailView
