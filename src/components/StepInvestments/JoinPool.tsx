import {
  Box,
  HStack,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Image,
} from '@chakra-ui/react'
import { useDetailPrivateIDO } from 'src/hooks/useDetailPrivateIDO'

const JoinPool = ({}) => {
  const { tab, setTab } = useDetailPrivateIDO()
  return (
    <Box
      bg={'#18171D'}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={tab === 2 ? '#FFFFFF' : '#3A3A3A'}
      borderRadius="8px"
    >
      <Accordion allowToggle onChange={(e) => (!e ? setTab(2) : setTab(0))}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              {tab === 2 ? (
                <Image src="/svgs/step2-active.svg" />
              ) : (
                <Image src="/svgs/step2.svg" />
              )}
              <Box flex="1" textAlign="left" ml="10px">
                <HStack>
                  <Text
                    fontSize="24px"
                    lineHeight="34px"
                    fontWeight="bold"
                    color={tab === 2 ? 'white' : '#3A3A3A'}
                    p={'5px'}
                  >
                    Join Pool
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon
                color={tab === 2 ? 'white' : '#3A3A3A'}
                fontSize="30px"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" borderColor="#3A3A3A" />
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              Pool is opening to join
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              From: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              To: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              Winner Announcement: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              Your Allocation: 100 <strong>FAM</strong>
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 2 ? 'white' : '#3A3A3A'}
            >
              Your Staked: 100 <strong>FAM</strong>
            </Text>

            <Box mt="20px">
              <HStack>
                <Button
                  bg="#2C3138"
                  borderRadius="18px"
                  fontSize="12px"
                  lineHeight="22px"
                  color={tab === 2 ? '#EFBF1C' : '#3A3A3A'}
                >
                  Stake NFT
                </Button>
                <Button
                  bg="#2C3138"
                  borderRadius="18px"
                  fontSize="12px"
                  lineHeight="22px"
                  color={tab === 2 ? '#EFBF1C' : '#3A3A3A'}
                >
                  Withdraw NFT
                </Button>
              </HStack>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default JoinPool
