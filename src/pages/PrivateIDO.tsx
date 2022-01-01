import { Box, SimpleGrid, Text, Center } from '@chakra-ui/react'
import Panel from 'src/components/Pannel'
import IDOItem from 'src/components/IDOItem'

const PrivateIDODetail = () => {
  return (
    <Box px="20px" zIndex="1000">
      <Panel />
      <Center mt={[10, 20, 30]}>
        <Text
          fontSize="36px"
          lineHeight="40px"
          bgGradient="linear-gradient(223.51deg, #F3D17C 0%, #EFBF1C 102.75%)"
          bgClip="text"
        >
          On Going
        </Text>
      </Center>
      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
          lg: 2,
          xl: 3,
        }}
        spacing={{
          base: 10,
          lg: 5,
        }}
        mt={10}
      >
        <IDOItem />
        <IDOItem />
        <IDOItem />
        <IDOItem />
      </SimpleGrid>
      <Center mt={10}>
        <Text
          fontSize="36px"
          lineHeight="40px"
          bgGradient="linear-gradient(223.51deg, #F3D17C 0%, #EFBF1C 102.75%)"
          bgClip="text"
        >
          Completed
        </Text>
      </Center>
      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
          lg: 2,
          xl: 3,
        }}
        spacing={10}
        mt={10}
        mx={10}
      >
        <IDOItem />
        <IDOItem />
        <IDOItem />
        <IDOItem />
      </SimpleGrid>
    </Box>
  )
}

export default PrivateIDODetail
