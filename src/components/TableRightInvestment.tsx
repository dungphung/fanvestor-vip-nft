import { useEffect } from 'react'

import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { useDetailPrivateIDO } from 'src/hooks/useDetailPrivateIDO'
import StepInvestments from './StepInvestments'

const dataPoolAllocation = [
  {
    id: 1,
    items: 'NFT Genesis',
    amount: '50',
    swapRate: '50 CT',
  },
  {
    id: 2,
    items: 'NFT Fanvestor - SSR',
    amount: '500',
    swapRate: '50 CT',
  },
  {
    id: 3,
    items: 'NFT Fanvestor - SR',
    amount: '50',
    swapRate: '50 CT',
  },
  {
    id: 4,
    items: 'NFT Fanvestor - S',
    amount: '500',
    swapRate: '50 CT',
  },
  {
    id: 5,
    items: 'NFT Legend',
    amount: '500',
    swapRate: '50 CT',
  },
]

const TableRightInvestment = () => {
  const { setTab } = useDetailPrivateIDO()

  useEffect(() => {
    setTab(0)
  }, [])

  return (
    <Tabs ml={'-5px'} mt="10px">
      <TabList>
        <Tab
          fontSize="16px"
          lineHeight="26px"
          fontWeight="bold"
          _selected={{
            color: 'white',
            borderBottomColor: '#EFBF1C',
            borderBottomWidth: '4px',
          }}
        >
          Steps
        </Tab>
        <Tab
          fontSize="16px"
          lineHeight="26px"
          fontWeight="bold"
          _selected={{
            color: 'white',
            borderBottomColor: '#EFBF1C',
            borderBottomWidth: '4px',
          }}
        >
          Discovering
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={'5px'} justifyContent={'center'}>
          <StepInvestments />
        </TabPanel>

        <TabPanel>
          <Box bg="white" color="#000" borderRadius="8px" p="24px">
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <br />

            <Text fontWeight="bold">Where does it come from?</Text>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
            <br />
            <Text>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Text>
            <br />
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TableRightInvestment
