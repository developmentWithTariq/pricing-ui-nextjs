'use client'
import React from 'react'
import { Stack, HStack, StackProps, Icon, Heading, Flex, Box, Text, Button, ChakraProvider } from '@chakra-ui/react'
import CheckIcon from '@/icons/Icons'

const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='5' {...rest} align='flex-start'>
            <Icon as={CheckIcon} w='22px' h='22px'></Icon>
            <Text textAlign={['left','left','center']} align='start'>{children}</Text>
        </HStack>
    )
}



const Pricing = () => {
    return (
        <ChakraProvider>
            <Box mx='6' as='section'>

            <Box 
            maxW={'994px'} 
            m='auto' 
            mt='-256px' 
            borderRadius='4px' 
            overflow='hidden' 
            textAlign='center'            
            boxShadow='box-shadow: 0px 10px 10px -5px #0000000A; box-shadow: 0px 20px 25px -5px #0000001A;'>
                <Flex direction={['column','column','row']}>
                    <Box 
                    p={['28px', '6opx', '60px']}
                    bg='#F0EAFB'>
                        <Text 
                        color={'#171923'} 
                        fontSize='24px' 
                        fontWeight='800'>Premium PRO</Text>
                        <Heading color={'#171923'} fontWeight='800' fontSize={['5xl', '5xl', '6xl']}>$329</Heading>
                        <Text fontWeight='500' fontSize='18px' mt='8px'>billed just once</Text>
                        <Button colorScheme={'purple'} w={['auto', '282px', '282px']} mt='24px' size={'lg'} >Get Started</Button>
                    </Box>
                    <Box p={['32px', '32px', '60px']} fontSize={'18px'} bg='white'>
                        <Text w='520px' textAlign={'left'}>Access these features when you get this pricing package for your business.</Text>
                        <Stack as='ul' pt='24px' spacing='20px'>

                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
                    </Box>
        </ChakraProvider>
    )
}

export default Pricing