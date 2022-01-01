import { Flex, Image, Text } from '@chakra-ui/react'

const NoData = () => {
  return (
    <Flex
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Image src="/svgs/no-data.svg" />
      <Text color="white">No data !</Text>
    </Flex>
  )
}

export default NoData
