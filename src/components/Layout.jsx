import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box p={6}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout;