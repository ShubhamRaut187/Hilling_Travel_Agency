import React from 'react'
import { Center, SimpleGrid, Stack } from '@chakra-ui/react'
import { Box, Button, Container, Text } from '@chakra-ui/react'
import { List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
function Packages() {
  return (
    <Stack>
    <Container p={10} maxW={1300} >
      <SimpleGrid minChildWidth={'250px'} columnGap={'20px'} columns={4}>
        <Center py={6}>
          <Box
            maxW={'300px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{ bg: '#101932', }}
          >
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text
                fontSize={'sm'}
                fontWeight={500}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                px={3}
                color={'blue.700'}
                rounded={'full'}>
                Price
              </Text>
              <Stack color='green' direction={'row'} align={'center'} justify={'center'}>
                <Text fontSize={'3xl'}>$</Text>
                <Text fontSize={'5xl'} fontWeight={800}>
                  99
                </Text>
                <Text color={'gray.500'}>/month</Text>
              </Stack>
            </Stack>

            <Box _hover={{ bg: '#101932', color: 'white' }} bg={useColorModeValue('white', 'gray.900')} px={6} pb={6}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={'full'}
                bg={'blue.700'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'blue.800',
                }}
                _focus={{
                  bg: 'blue.700',
                }}>
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{ bg: '#101932', }}
          >
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text
                fontSize={'sm'}
                fontWeight={500}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                px={3}
                color={'blue.700'}
                rounded={'full'}>
                Price
              </Text>
              <Stack color='green' direction={'row'} align={'center'} justify={'center'}>
                <Text fontSize={'3xl'}>$</Text>
                <Text fontSize={'5xl'} fontWeight={800}>
                  179
                </Text>
                <Text color={'gray.500'}>/month</Text>
              </Stack>
            </Stack>

            <Box _hover={{ bg: '#101932', color: 'white' }} bg={useColorModeValue('white', 'gray.900')} px={6} pb={6}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={'full'}
                bg={'blue.700'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'blue.800',
                }}
                _focus={{
                  bg: 'blue.700',
                }}>
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center display={{ base: 'initial', lg: 'initial', md: 'none', sm: 'none' }} py={6}>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{ bg: '#101932', }}
          >
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text
                fontSize={'sm'}
                fontWeight={500}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                px={3}
                color={'blue.700'}
                rounded={'full'}>
                Price
              </Text>
              <Stack color='green' direction={'row'} align={'center'} justify={'center'}>
                <Text fontSize={'3xl'}>$</Text>
                <Text fontSize={'5xl'} fontWeight={800}>
                  300
                </Text>
                <Text color={'gray.500'}>/month</Text>
              </Stack>
            </Stack>

            <Box _hover={{ bg: '#101932', color: 'white' }} bg={useColorModeValue('white', 'gray.900')} px={6} pb={6}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={'full'}
                bg={'blue.700'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'blue.800',
                }}
                _focus={{
                  bg: 'blue.700',
                }}>
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center display={{ base: 'initial', lg: 'none', md: 'none', sm: 'none' }} py={6}>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{ bg: '#101932', }}
          >
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text
                fontSize={'sm'}
                fontWeight={500}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                px={3}
                color={'blue.700'}
                rounded={'full'}>
                Price
              </Text>
              <Stack color='green' direction={'row'} align={'center'} justify={'center'}>
                <Text fontSize={'3xl'}>$</Text>
                <Text fontSize={'5xl'} fontWeight={800}>
                  499
                </Text>
                <Text color={'gray.500'}>/month</Text>
              </Stack>
            </Stack>

            <Box _hover={{ bg: '#101932', color: 'white' }} bg={useColorModeValue('white', 'gray.900')} px={6} pb={6}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#101932.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={'full'}
                bg={'blue.700'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'blue.800',
                }}
                _focus={{
                  bg: 'blue.700',
                }}>
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
      </SimpleGrid>
    </Container>
  </Stack>
  )
}

export default Packages