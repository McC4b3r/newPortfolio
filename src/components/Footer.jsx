import { Box, Center, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import { ImLinkedin } from "@react-icons/all-files/im/ImLinkedin";

const Footer = () => {
  return (
    <Box>
      <Center h="100px">
        <HStack spacing="20px">
          <a
            href="https://github.com/mcc4b3r"
            target="_blank"
            rel="noopener noreferrer" >
            <Icon
              as={GoMarkGithub}
              w={8}
              h={8} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-mccabe-089/"
            target="_blank"
            rel="noopener noreferrer">
            <Icon
              as={ImLinkedin}
              w={8}
              h={8} />
          </a>
        </HStack>
      </Center>
    </Box>
  )
}

export default Footer;