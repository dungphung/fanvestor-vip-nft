import { Box, Text } from '@chakra-ui/react'

const Panel = () => {
  return (
    <Box px="32px" py="22px" bg="#100E15" borderRadius="8px" mt="32px">
      <Text fontSize="36px" lineHeight="46px" color="white">
        Investment
      </Text>
      <Text fontSize="16px" lineHeight="30px" mt="2px" color="#CCCCCC">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
    </Box>
  )
}

export default Panel
