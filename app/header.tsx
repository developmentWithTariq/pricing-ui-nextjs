'use client'
import { ChakraProvider } from '@chakra-ui/react'

import React from 'react'
import { Heading, Box, Text, Center } from '@chakra-ui/react'
const Header = () => {
  return (
    <ChakraProvider>
      <Box  pb='28' as='section' >
        <Box textAlign={['left','left','center']} color='gray.50' bg='purple.600' pt='49px' pb='198px' px='8' >          
          <Heading fontWeight='extrabold' fontSize={['3xl','3xl','5xl']}>
            Simple Pricing for you Business
          </Heading>
          <Text fontSize={['lg','lg','2xl']} color='#F7FAFC' pt='4' fontWeight='medium'>
            Plans that are carefully crafted to suit your business.
          </Text>         
        </Box>
      </Box>
     </ChakraProvider>
  )
}

export default Header;