import React from 'react'

import { Box } from '@chakra-ui/react'
import Preparation from './Preparation'
import JoinPool from './JoinPool'
import Deposit from './Deposit'
import Claim from './Claim'

const Container = () => {
  return (
    <Box mt="48px">
      <Preparation />
      <Box mt="48px">
        <JoinPool />
      </Box>
      <Box mt="48px">
        <Deposit />
      </Box>
      <Box mt="48px">
        <Claim isActive={false} />
      </Box>
    </Box>
  )
}

export default Container
