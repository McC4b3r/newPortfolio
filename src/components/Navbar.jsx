import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex pb={6}>
      <Box pl="2" pr="2">
        <Heading size="xl">
          Ryan McCabe
        </Heading>
      </Box>
    </Flex>
  )
}

export default Navbar