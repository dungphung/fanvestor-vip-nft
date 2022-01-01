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
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'
import { useDetailPrivateIDO } from 'src/hooks/useDetailPrivateIDO'
import { useWindowSize } from 'src/hooks/useWindowSize'

interface Item {
  phrase: string
  discount: number
  amount: string
}

const CLAIMS = [
  { phrase: 'Phrase 1:  2022/01/05 16:45:00 UTC', discount: 20, amount: 'LUS' },
  { phrase: 'Phrase 2:  2022/02/05 16:45:00 UTC', discount: 20, amount: 'LUS' },
  { phrase: 'Phrase 3:  2022/03/05 16:45:00 UTC', discount: 20, amount: 'LUS' },
  { phrase: 'Phrase 4:  2022/04/05 16:45:00 UTC', discount: 20, amount: 'LUS' },
  { phrase: 'Phrase 5:  2022/05/05 16:45:00 UTC', discount: 20, amount: 'LUS' },
]

const Claim = ({ isActive = false }) => {
  const { tab, setTab } = useDetailPrivateIDO()
  const { width } = useWindowSize()
  return (
    <Box
      bg={'#18171D'}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={tab === 4 ? '#FFFFFF' : '#3A3A3A'}
      borderRadius="8px"
    >
      <Accordion allowToggle onChange={(e) => (!e ? setTab(4) : setTab(0))}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              {tab === 4 ? (
                <Image src="/svgs/step4-active.svg" />
              ) : (
                <Image src="/svgs/step4.svg" />
              )}
              <Box flex="1" textAlign="left" ml="10px">
                <HStack>
                  <Text
                    fontSize="24px"
                    lineHeight="34px"
                    fontWeight="bold"
                    color={tab === 4 ? 'white' : '#3A3A3A'}
                    p={'5px'}
                  >
                    Claim
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon
                color={tab === 4 ? 'white' : '#3A3A3A'}
                fontSize="30px"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" borderColor="#3A3A3A" />
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 4 ? 'white' : '#3A3A3A'}
            >
              Claim Policy: TGE Vesting 20% on 05/01/2022 16:30:00 UTC. 4 months
              after, 20% each month.
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 4 ? 'white' : '#3A3A3A'}
            >
              Claim Start Date: 05-01-2022 16:30:00 UTC
            </Text>
            {width > 768 ? (
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td fontSize="12px" color={tab === 4 ? 'white' : '#3A3A3A'}>
                      Phrase
                    </Td>
                    <Td fontSize="12px" color={tab === 4 ? 'white' : '#3A3A3A'}>
                      %
                    </Td>
                    <Td fontSize="12px" color={tab === 4 ? 'white' : '#3A3A3A'}>
                      Amount
                    </Td>
                    <Td
                      fontSize="12px"
                      color={tab === 4 ? 'white' : '#3A3A3A'}
                    ></Td>
                  </Tr>
                  {CLAIMS.map((item: Item, idx) => (
                    <Tr key={idx}>
                      <Td
                        fontSize="12px"
                        color={tab === 4 ? 'white' : '#3A3A3A'}
                      >
                        {item.phrase}
                      </Td>
                      <Td
                        fontSize="12px"
                        color={tab === 4 ? 'white' : '#3A3A3A'}
                      >
                        {item.discount} %
                      </Td>
                      <Td
                        fontSize="12px"
                        color={tab === 4 ? 'white' : '#3A3A3A'}
                      >
                        - {item.amount}
                      </Td>
                      <Td>
                        <Box mt="20px" align={'center'}>
                          <Button
                            bg="#2C3138"
                            borderRadius="18px"
                            fontSize="12px"
                            lineHeight="22px"
                            color={tab === 4 ? '#EFBF1C' : '#838383'}
                            fontWeight="bold"
                            style={{
                              padding: '1px 60px',
                            }}
                            disabled
                          >
                            Claim
                          </Button>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <>
                {CLAIMS.map((item: Item, idx) => (
                  <Box
                    key={idx}
                    borderWidth="2px"
                    borderStyle="solid"
                    borderColor={'#3A3A3A'}
                    borderRadius="8px"
                    p={3}
                    mt={5}
                  >
                    <Text fontSize="12px" lineHeight="22px" color="white">
                      {item.phrase}
                    </Text>
                    <Box display={'flex'} justifyContent={'space-between'}>
                      <Text fontSize="12px" lineHeight="22px" color="white">
                        %
                      </Text>
                      <Text fontSize="12px" lineHeight="22px" color="white">
                        {item.discount}%
                      </Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                      <Text fontSize="12px" lineHeight="22px" color="white">
                        Amount
                      </Text>
                      <Text fontSize="12px" lineHeight="22px" color="white">
                        - {item.amount}
                      </Text>
                    </Box>
                    <Box mt="20px" align={'center'}>
                      <Button
                        bg="#2C3138"
                        borderRadius="18px"
                        fontSize="12px"
                        lineHeight="22px"
                        color="#EFBF1C"
                        fontWeight="bold"
                        style={{
                          padding: '1px 60px',
                        }}
                        disabled
                      >
                        Claim
                      </Button>
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Claim
