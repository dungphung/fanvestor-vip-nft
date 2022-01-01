import { Box, HStack, Flex, Text, Image, VStack } from '@chakra-ui/react'
import InvesmentImg from 'src/assets/images/investment-img.png'
import Avatar from 'src/assets/images/avatar.png'
import { useNavigate } from 'react-router-dom'

const TimeContainer = ({ number, title }) => {
  return (
    <VStack>
      <Box
        maxWidth="48px"
        // h="36px"
        borderRadius="8px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="20px"
          //   lineHeight="30px"
          color="#F5D800"
          fontWeight="bold"
        >
          {number}
        </Text>
      </Box>
      <Text
        fontSize="12px"
        lineHeight="22px"
        style={{ marginTop: '0px' }}
        color="#838383"
      >
        {title}
      </Text>
    </VStack>
  )
}

const IDOItem = () => {
  const navigate = useNavigate()
  return (
    <Box
      bg="#212125"
      borderRadius="12px"
      position="relative"
      onClick={() => navigate('/private-ido/123')}
      cursor="pointer"
    >
      <Box
        bg="#2F2F2F"
        display="inline-block"
        position="absolute"
        right="10px"
        top="4px"
        px="10px"
        py="2px"
        borderRadius="30px"
      >
        <Text fontSize="12px" lineHeight="22px" color="#CCCCCC">
          Preparation
        </Text>
      </Box>
      <Image
        src={InvesmentImg}
        alt="InvesmentImg"
        w="100%"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      />

      <Box p="16px">
        <Flex>
          <Box>
            <img src={Avatar} alt="Avatar" />
          </Box>
          <Box ml="16px">
            <Text
              fontSize="24px"
              lineHeight="34px"
              fontWeight="bold"
              color="#FFFFFF"
            >
              Luna Rush (LUS)
            </Text>
            <Text mt="16px" fontSize="16px" lineHeight="26px" color="#838383">
              Community Pool (100 NFTs)
            </Text>
            <HStack mt="16px">
              <TimeContainer number="03" title="Day" />
              <Box style={{ marginLeft: 16 }}>
                <TimeContainer number="03" title="Hour" />
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <TimeContainer number="03" title="Minute" />
              </Box>
              <Box style={{ marginLeft: 14 }}>
                <TimeContainer number="03" title="Seconds" />
              </Box>

              <Text fontSize="14px" lineHeight="22px" color="#838383">
                to start join pool
              </Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default IDOItem
