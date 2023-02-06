'use client'
import { ElementType } from 'react';
import {Box, Stack, ChakraProvider, HStack , Icon, StackProps, Text} from '@chakra-ui/react';
import { HaselFreeIcon, MoneyBankGuaranteeIcon, MonthlySubscriptionIcon } from '@/icons/Icons';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
  const {icon, children , ...rest} = props;
  return (
    <ChakraProvider>
      <HStack {...rest} spacing='6' align='start'>
        <Icon as={icon} boxSize='12'/>
        <Text textAlign='left' fontSize='lg' fontWeight='bold'>{children}</Text>        
      </HStack>
    </ChakraProvider>
    
  )
}

const Features = () => {
  return (
    <ChakraProvider>
      
    <Box as='section' pt='60px' maxWidth='1024px' margin='auto' pb='8'>

      <Stack direction={['column', 'column', 'row']}
        spacing={['6', '6', '5']} px='12'>
        <Feature icon={MoneyBankGuaranteeIcon}>
        30 days money back Guarantee
        </Feature>
        <Feature icon={HaselFreeIcon}>
        No setup fees 100% hassle-free
        </Feature>
        <Feature icon={MonthlySubscriptionIcon}>
        No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
    </ChakraProvider>
  )
}

export default Features;