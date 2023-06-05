import React from 'react'
import { Card, Center, HStack, Input, InputGroup, InputRightElement, Select, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import { Box, Button, Container, Flex, Heading, Link, Text, Image } from '@chakra-ui/react'
import Carousel, { CaptionCarousel } from './Carousel';
import Packages from './Packages';
import Reviews from './Reviews';
import Features from './Features';
const Home = () => {
  return (
    <Stack background={'#041126'}>
      <Stack bgColor={{ sm: 'black', md: 'black' }} backgroundImage={`url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg)`} height={{ sm: '100vh', md: '100vh', lg: '110vh', xl: '130vh' }} bgPosition={{ sm: 'center', md: 'bottom', lg: 'initial', xl: 'initial' }} backgroundSize={{ sm: '1000px', md: 'contain', lg: '100%', xl: 'cover' }} backgroundRepeat='no-repeat'>

        <Container p={{ xl: 10, lg: 10, md: 5, sm: 3 }} maxW={1300} color={'white'} >
          <Flex justify={'space-between'} alignItems={'center'}>
            <Flex alignItems={'center'}>
              <Image src='https://us.123rf.com/450wm/wikagraphic/wikagraphic2103/wikagraphic210309186/167440730-initial-logo-letter-ht-with-golden-and-silver-color-with-laurel-and-wreath-vector-logo-for-business.jpg?ver=6' width={'60px'} borderRadius={'full'} />
              <Text fontSize={26} fontWeight={500} px={3}>Hilling</Text>
            </Flex>
            <Flex display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} gap={10}>
              <Link>Our World</Link>
              <Link>Destination</Link>
              <Link>Discover</Link>
              <Link>Contact Us</Link>
            </Flex>
            <Box>
              <Button colorScheme='purple'>Login</Button>
            </Box>
          </Flex>

          <VStack>
            <Box textAlign={'center'} mt={100} mb={30}>
              <Heading fontSize={{ sm: 26, md: 40, lg: 54, xl: 60 }}>
                Escape From Reality
              </Heading>
              <Heading fontSize={{ sm: 26, md: 40, lg: 54, xl: 60 }}>
                Let's Explore The World
              </Heading>
            </Box>
            <Box maxW={550} textAlign={'center'}>
              <Text>
                Get amazing experience here, no matter where in the world you want to go,
                we can help you go there anytime
              </Text>
            </Box>
            <Box pt={35}>
              <Button colorScheme='orange'><Link>Book A Trip</Link></Button>
            </Box>
          </VStack>
          <HStack justifyContent={'center'} height={'100%'}>
            <Box>
              <InputGroup maxW={'880px'} size='lg'>
                <Input
                  // pr='1.5rem'
                  type='text'
                  placeholder='Enter Destination'
                />
                <InputRightElement width='100px'>
                  <Button h='1.75rem' bg={'orange.400'} variant={'solid'} size='sm'>
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* <Box>
                <Text as={'h2'}>Select Recommended Destinations</Text>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Box> */}
            </Box>
          </HStack>
        </Container>
      </Stack>
      <Stack>
        <Container mb={10} maxW={1300} color={'white'} >
          <VStack>
            <Box textAlign={'center'} mt={20} mb={30}>
              <Text mb={30} fontSize={22}>
                Get Amazing Experience
              </Text>
              <Heading fontSize={45}>
                Find Travel Perfection
              </Heading>
            </Box>
            <Box maxW={550} textAlign={'center'}>
              <Text fontSize={22}>
                Get amazing experience here, no matter where in the world you want to go,
                we can help you go there anytime
              </Text>
            </Box>
          </VStack>
          <SimpleGrid minChildWidth={200} pt={50} gap={10}>
            <Card py={10} textAlign={'center'} background={'#101932'} color={'white'}>
              <Center >
                <Image boxSize={70} src='https://cdn-icons-png.flaticon.com/128/7848/7848306.png' />
              </Center>
              <Center>
                <Box maxWidth={'80%'}>
                  <Heading py={5} fontSize={28}>
                    Schedule a Plan
                  </Heading>
                  <Text display={{ xl: 'initial', md: 'initial', sm: 'none' }} color={'grey'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquid porro ab quos quam, debitis.
                  </Text>
                </Box>
              </Center>
            </Card>
            <Card py={10} textAlign={'center'} background={'#101932'} color={'white'} >
              <Center>
                <Image boxSize={70} src='https://cdn-icons-png.flaticon.com/128/2200/2200326.png' />
              </Center>
              <Center>
                <Box maxWidth={'80%'}>
                  <Heading py={5} fontSize={28}>
                    Schedule a Plan
                  </Heading>
                  <Text display={{ xl: 'initial', md: 'initial', sm: 'none' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquid porro ab quos quam, debitis.
                  </Text>
                </Box>
              </Center>
            </Card>
            <Card py={10} textAlign={'center'} background={'#101932'} color={'white'}>
              <Center>
                <Image boxSize={70} src='https://cdn-icons-png.flaticon.com/128/1820/1820042.png' />
              </Center>
              <Center>
                <Box maxWidth={'80%'}>
                  <Heading py={5} fontSize={28}>
                    Schedule a Plan
                  </Heading>
                  <Text display={{ xl: 'initial', md: 'initial', sm: 'none' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquid porro ab quos quam, debitis.
                  </Text>
                </Box>
              </Center>
            </Card>
          </SimpleGrid>
        </Container>
        <Stack bgImage={'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)'} bgPosition={'initial'} bgSize={'100%'} bgRepeat={'no-repeat'}>
          <Features />
        </Stack>
      </Stack>
      <Stack>
        <Container p={10} maxW={1300} textAlign={'center'}>
          <Heading color={'white'} pb={8} as={'h2'}>Recommended Destinations</Heading>
          <SimpleGrid columns={{ xl: 4, lg: 3, md: 2, sm: 1 }} minChildWidth={160} gap={10}>
            <Box>
              <Carousel display={{ lg: 'initial', md: 'initial', sm: 'block' }} autoplayspeed={1000} slidesToScroll={4} />
            </Box>
            <Box>
              <Carousel display={{ lg: 'initial', md: 'initial', sm: 'none' }} autoplayspeed={3000} slidesToScroll={4} />
            </Box>
            <Box>
              <Carousel display={{ lg: 'initial', md: 'none', sm: 'none' }} autoplayspeed={4000} slidesToScroll={4} />
            </Box>
          </SimpleGrid>
        </Container>
      </Stack>
      <Stack textAlign={'center'}>
        <CaptionCarousel />
      </Stack>
      <Stack>
        <Stack>
          <Packages />
        </Stack>
        <Stack>
          <Reviews />
        </Stack>
      </Stack>
      <Stack>

      </Stack>
    </Stack>
  )
}

export default Home;