import {
  Box,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react'

import { FC } from 'react'

import { useWindowSize } from 'src/hooks/useWindowSize'

type IProps = {
  days: Number
  hours: Number
  minutes: Number
  seconds: Number
  title?: string
  showDetail?: boolean
}

const CustomTimeShow = ({ title, time }) => {
  const { width } = useWindowSize()
  return (
    <VStack align="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#2C3138"
        borderRadius="8px"
        w={width <= 320 ? '50px' : '64px'}
        lineHeight="46px"
      >
        <Text color="#EFBF1C" fontWeight="bold" fontSize="36px" my="8px">
          {time < 10 ? `0${time}` : time}
        </Text>
      </Box>
      <Text
        lineHeight="30px"
        fontSize={{
          base: '10px',
          lg: '20px',
        }}
        color="#838383"
        mt="12px"
      >
        {title}
      </Text>
    </VStack>
  )
}

const CountDown: FC<IProps> = (props: IProps) => {
  const { days, hours, minutes, seconds, title, showDetail = false } = props
  const { width } = useWindowSize()

  if (showDetail) {
    return (
      <Box display="flex" position={'relative'}>
        <HStack spacing={5}>
          <CustomTimeShow title="Days" time={days} />
          <CustomTimeShow title="Hours" time={hours} />
          <CustomTimeShow title="Minutes" time={minutes} />
          <CustomTimeShow title="Seconds" time={seconds} />

          {title && (
            <VStack
              align="center"
              mt={{
                base: 3,
                lg: 5,
                xl: 5,
              }}
            >
              <Text
                fontSize={width <= 768 ? '10px' : '15px'}
                color="#CCCCCC"
                fontWeight={400}
              >
                {title}
              </Text>
            </VStack>
          )}
        </HStack>
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="space-around">
      <Box
        justifyContent={'space-around'}
        flex="1"
        textAlign="left"
        p={{ base: 2, lg: 5, xl: 5 }}
        mt={{ base: -3, lg: 5, xl: 5 }}
      >
        <StatGroup
          ml={{
            lg: -20,
            xl: -20,
          }}
        >
          <Stat align="center" borderRightWidth={1}>
            <StatNumber color="#EFBF1C" fontWeight="bold">
              {days < 10 ? `0${days}` : days}
            </StatNumber>
            <StatLabel fontSize={width <= 768 ? '10px' : '15px'}>
              Days
            </StatLabel>
          </Stat>

          <Stat align="center" borderRightWidth={1}>
            <StatNumber color="#EFBF1C" fontWeight="bold">
              {hours < 10 ? `0${hours}` : hours}
            </StatNumber>
            <StatLabel fontSize={width <= 768 ? '10px' : '15px'}>
              Hours
            </StatLabel>
          </Stat>
          <Stat align="center" borderRightWidth={1}>
            <StatNumber color="#EFBF1C" fontWeight="bold">
              {minutes < 10 ? `0${minutes}` : minutes}
            </StatNumber>
            <StatLabel fontSize={width <= 768 ? '10px' : '15px'}>
              Minutes
            </StatLabel>
          </Stat>
          <Stat align="center">
            <StatNumber color="#EFBF1C" fontWeight="bold">
              {seconds < 10 ? `0${seconds}` : seconds}
            </StatNumber>
            <StatLabel fontSize={width <= 768 ? '10px' : '15px'}>
              Seconds
            </StatLabel>
          </Stat>
          {title && (
            <Stat
              align="center"
              mt={{
                base: 3,
                lg: 5,
                xl: 5,
              }}
            >
              <StatLabel
                fontSize={width <= 768 ? '10px' : '15px'}
                color="#CCCCCC"
                fontWeight={400}
              >
                {title}
              </StatLabel>
            </Stat>
          )}
        </StatGroup>
      </Box>
    </Box>
  )
}
export default CountDown
