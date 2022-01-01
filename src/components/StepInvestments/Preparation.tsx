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

const Preparation = ({}) => {
  const { tab, setTab } = useDetailPrivateIDO()
  return (
    <Box
      bg={'#18171D'}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={tab === 1 ? '#FFFFFF' : '#3A3A3A'}
      borderRadius="8px"
    >
      <Accordion allowToggle onChange={(e) => (!e ? setTab(1) : setTab(0))}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              {tab === 1 ? (
                <Image src="/svgs/step1-active.svg" />
              ) : (
                <Image src="/svgs/step1.svg" />
              )}
              <Box flex="1" ml={'10px'}>
                <HStack>
                  <Text
                    fontSize="24px"
                    lineHeight="34px"
                    fontWeight="bold"
                    color={tab === 1 ? 'white' : '#3A3A3A'}
                    p={'5px'}
                  >
                    Preparation
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon
                color={tab === 1 ? 'white' : '#3A3A3A'}
                fontSize="30px"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" borderColor="#3A3A3A" />
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 1 ? 'white' : '#3A3A3A'}
            >
              To prepare for the IDO, you should:
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 1 ? 'white' : '#3A3A3A'}
            >
              1. Get NFT VIP from{' '}
              <strong style={{ textDecoration: 'underline' }}>Blindbox</strong>{' '}
              or Famcentral{' '}
              <strong style={{ textDecoration: 'underline' }}>
                NFT Marketplace.{' '}
              </strong>
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 1 ? 'white' : '#3A3A3A'}
            >
              2. <strong style={{ textDecoration: 'underline' }}>Go KYC</strong>{' '}
              your account if needed
            </Text>
            <Text
              fontSize="12px"
              lineHeight="22px"
              color={tab === 1 ? 'white' : '#3A3A3A'}
            >
              3. Apply Whitelist to become a winner if needed
            </Text>

            <Box mt="20px">
              <Button
                bg="#3A3A3A"
                borderRadius="18px"
                fontSize="12px"
                lineHeight="22px"
                color={tab === 1 ? 'white' : '#838383'}
                onClick={() => {
                  window.open(
                    'https://gleam.io/3N9Eu/fam-central-private-slot-give-away-easiest-way-to-win',
                  )
                  return
                }}
              >
                Apply Whitelist
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Preparation
