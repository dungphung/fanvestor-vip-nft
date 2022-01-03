import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  SimpleGrid,
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'

const ItemStackNFT = ({ isNotStacked, onClick }) => {
  return (
    <Box
      minH="202px"
      bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(/images/demo-stack-item.png)"
      p="8px"
      borderRadius="12px"
    >
      <VStack align="start" h="100%" w="100%">
        <div />
        <Spacer />
        <Box w="100%">
          <Text
            fontSize="14px"
            color="white"
            lineHeight="14px"
            fontWeight="bold"
          >
            Trophy #999
          </Text>
          <Text fontSize="14px" color="#CCCCCC" lineHeight="14px" mt="8px">
            FAM LEGEND
          </Text>
          <Text fontSize="12px" color="#CCCCCC" lineHeight="12px" mt="8px">
            Famcentral Private IDO Hashrate: 16
          </Text>
          <Button
            mt="12px"
            bg="#2F2F2F"
            _focus={{
              backgroundColor: '#2F2F2F',
            }}
            _hover={{
              backgroundColor: '#2F2F2F',
            }}
            _active={{
              backgroundColor: '#2F2F2F',
            }}
            h="21px"
            w="100%"
            onClick={onClick}
          >
            <Text
              bgGradient="linear-gradient(223.51deg, #F3D17C 0%, #EFBF1C 102.75%)"
              bgClip="text"
              fontSize="12px"
              lineHeight="22px"
            >
              {isNotStacked ? 'Stack' : 'Unstack'}
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

const ModalStackNFT = ({
  isOpen = false,
  onDismiss: onClose = () => {
    return null
  },
}) => {
  const [listNFT, setListNFT] = useState([1, 2, 3])
  const [listStack, setListStack] = useState<number[]>([])

  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen}>
      <ModalOverlay bg="#18171D" />
      <ModalContent bg="#18171D">
        <ModalCloseButton />
        <ModalBody bg="#18171D" pt="50px">
          <Flex h="100%">
            <Box flex={1}>
              <Flex justify="center">
                <Text
                  fontSize="20px"
                  lineHeight="20px"
                  color="white"
                  fontWeight="bold"
                >
                  My Bag
                </Text>
              </Flex>
              <Box border="1px solid #2F2F2F" p="16px" mt="16px" h="100%">
                {listNFT.length === 0 ? (
                  <Flex
                    flex={1}
                    direction="column"
                    justify="center"
                    align="center"
                    w="100%"
                    h="100%"
                  >
                    <Image w="100px" src="/svgs/no-data-white.svg" />
                    <Text
                      mt="16px"
                      fontSize="20px"
                      color="white"
                      fontWeight="500"
                      lineHeight="20px"
                    >
                      No data !
                    </Text>
                  </Flex>
                ) : (
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                      xl: 3,
                    }}
                    spacing={5}
                  >
                    {listNFT.map((item) => {
                      return (
                        <ItemStackNFT
                          isNotStacked
                          onClick={() => {
                            if (listNFT.length > 0) {
                              setListNFT((currentState) => {
                                const cloneList = [...currentState]
                                cloneList.pop()
                                return cloneList
                              })

                              setListStack((currentState) => {
                                const cloneList = [...currentState]
                                cloneList.push(currentState.length)
                                return cloneList
                              })
                            }
                          }}
                        />
                      )
                    })}
                  </SimpleGrid>
                )}
              </Box>
            </Box>

            <Box
              px="26px"
              display="flex"
              justifyItems="center"
              alignItems="center"
            >
              <Image src="/svgs/swap-icon.svg" />
            </Box>

            <Box flex={1}>
              <Flex justify="center">
                <Text
                  fontSize="20px"
                  lineHeight="20px"
                  color="white"
                  fontWeight="bold"
                >
                  My Bag
                </Text>
              </Flex>
              <Box border="1px solid #2F2F2F" p="16px" mt="16px" h="100%">
                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                    xl: 3,
                  }}
                  spacing={5}
                >
                  {listStack.map((item) => {
                    return (
                      <ItemStackNFT
                        isNotStacked={false}
                        onClick={() => {
                          if (listNFT.length > 0) {
                            setListStack((currentState) => {
                              const cloneList = [...currentState]
                              cloneList.pop()
                              return cloneList
                            })

                            setListNFT((currentState) => {
                              const cloneList = [...currentState]
                              cloneList.push(currentState.length)
                              return cloneList
                            })
                          }
                        }}
                      />
                    )
                  })}
                </SimpleGrid>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalStackNFT
