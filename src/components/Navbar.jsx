import React from 'react';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import uniqid from 'uniqid';

const links = ['About', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <Flex pb={6}>
      <Box pl="2" pr="2">
        <Heading size="xl">
          Ryan McCabe
        </Heading>
      </Box>
      <Spacer />
      <Box mt="2">
        {links.map((link, i) => (
          <Button
            variant="ghost"
            colorScheme="facebook"
            mr={i === links.length - 1 ? "0" : "4"}
            key={uniqid()}>
            {link}
          </Button>
        ))}
      </Box>
    </Flex>
  )
}

export default Navbar