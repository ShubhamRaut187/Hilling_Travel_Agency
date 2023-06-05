import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        textAlign={'center'}
        bgGradient="linear(to-t, blue.100, blue.900)"
      >  
        <Stack align={'center'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Features() {
    return (
      <Box p={10}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Features We Provide
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            What we provide to our costumers is what nature provides that is only beauty of Hills, Mountains, Beaches and many more. Apart from that below are the services we provide to you.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6}  justify="center">
              
            <Card
              heading={'24/7 Assistent'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Basic Services'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Affordable'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Best Tour Guide'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Designed Tour'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }