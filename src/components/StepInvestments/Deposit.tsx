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

const Deposit = ({}) => {
  const { tab, setTab } = useDetailPrivateIDO()
  return (
    <Box
      bg={'#18171D'}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={tab === 3 ? '#FFFFFF' : '#3A3A3A'}
      borderRadius="8px"
    >
      <Accordion allowToggle onChange={(e) => (!e ? setTab(2) : setTab(0))}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              {tab === 3 ? (
                <Image src="/svgs/step3-active.svg" />
              ) : (
                <Image src="/svgs/step3.svg" />
              )}
              <Box flex="1" textAlign="left" ml="10px">
                <HStack>
                  <Text
                    fontSize="24px"
                    lineHeight="34px"
                    fontWeight="bold"
                    color={tab === 3 ? 'white' : '#3A3A3A'}
                    p={'5px'}
                  >
                    Deposit
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon
                color={tab === 3 ? 'white' : '#3A3A3A'}
                fontSize="30px"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" borderColor="#3A3A3A" />
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 3 ? 'white' : '#3A3A3A'}
            >
              Deposit your BUSD here and you will get back LUS tokens in step 3
              - Claim.
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 3 ? 'white' : '#3A3A3A'}
            >
              Deposit Start Date: 2022/01/04 04:00:00 UTC
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 3 ? 'white' : '#3A3A3A'}
            >
              Deposit End Date: 2022/01/05 10:00:00 UTC
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 3 ? 'white' : '#3A3A3A'}
            >
              Deposit Fee: 0%
            </Text>
            {/* <Text fontSize="12px" lineHeight="22px"  color={tab === 3 ? 'white' : '#3A3A3A'}>
              To: 2021-10-12 22:00:00 UTC +7
            </Text> */}
            <Divider my="20px" borderColor="#3A3A3A" />
            <Box>
              <Text
                fontSize="12px"
                lineHeight="22px"
                color={tab === 3 ? 'white' : '#3A3A3A'}
              >
                Your Allocation: <strong>- BUSD</strong>
              </Text>
              <Text
                fontSize="12px"
                lineHeight="22px"
                color={tab === 3 ? 'white' : '#3A3A3A'}
              >
                Your Deposited: <strong>- BUSD</strong>
              </Text>
            </Box>

            <Box mt="20px">
              <Button
                bg="#2C3138"
                borderRadius="18px"
                fontSize="12px"
                lineHeight="22px"
                color={tab === 3 ? '#EFBF1C' : '#838383'}
                fontWeight="bold"
                style={{
                  padding: '1px 60px',
                }}
                disabled
              >
                Deposit
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Deposit
