import React from 'react'
import {
  Box, Image, Link,
  Button, PopoverCloseButton,
  Badge,
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text
} from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'

export default function Cards({ data }) {
  console.log(data)
  return (
    <div>
      

      {
        data.map((e) => {
          return (
            <Box m={'7'} display={{ lg: 'flex' }} bg='#FFF' boxShadow='0 0 10px #00000012' direction={{ base: 'column', md: 'row' }}
            overflow='hidden'
            variant='outline'
            height={'20%'}>
              <Box display='flex' >

                <Box>
                  <Image
                    
       
                    objectFit='cover'
                    maxW={{ base: '80%', md: '200px' }}
                    h={'100%'}
                    borderRadius={'10'}
                    src={e.Image_5}
                    alt='Woman paying for a purchase'
                  />
                </Box>

                <Box ml={'30'}>
                  <Text
                    fontWeight='bold'

                    fontSize='md'
                    letterSpacing='wide'

                  >
                    {e.Tour_Name}
                  </Text>
                  <Box>
                    <Box>
                      <Popover>
                        <PopoverTrigger>
                          <Button variant='ghost' fontSize='xs'> {e.Days} Travel
                            Days | 1 Country  | {e.City
                            } Cities</Button>


                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader fontWeight='bold'>6 Cities
                            you will visit
                          </PopoverHeader>
                          <PopoverBody >
                            <Text fontSize='xs' color='gray.500'>Turtuk---
                              Tsomoriri---
                              Leh
                              (2N)---
                              Nubra Valley
                              (2N)---
                              Pangong Tso
                              (1N)---
                              Hanle
                              (1N)---
                              Leh
                              (3N)
                            </Text></PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>

                    <Box>
                      <Popover>
                        <PopoverTrigger>
                          <Button variant='ghost' fontSize='xs' color='purple'>
                            1 Departure City | 1 Departure Date</Button>



                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader fontWeight='bold'>Available departure city (1)

                          </PopoverHeader>
                          <PopoverBody >
                            <Text fontSize='xs' color='gray.500'>
                              Mumbai
                            </Text></PopoverBody>

                          <PopoverHeader fontWeight='bold'>All 1 departure
                          </PopoverHeader>
                          <PopoverBody >

                            <Badge colorScheme='green'>25 Aug</Badge>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>
                    <Box display='flex' mt={'5'} pl='5'>
                      <Badge colorScheme='orange' > <Box display='flex'>
                        <StarIcon /><Text>{e.Rating}</Text>
                      </Box></Badge>
                      <Text pl='5'  fontSize='xs' fontWeight='bold'> 11 Reviews</Text>
                    </Box>
                  </Box>



                </Box>
              </Box>
              <Box   bg='#b1c2ec33' textAlign={'end'} ml={{lg:'40'}} pr={'3'} w={{lg:"30%"}} >
                <Text

                  textTransform='uppercase'

                  color='green.300'
                  fontWeight='bold'
                  mt={'5'}

                >
                  Super deal price

                </Text>



                <Text mt={3} color='gray.500'>
                  Start from

                </Text>
                <Text fontSize='md' fontWeight='bold'>
                  {e.Price}

                </Text>
                <Text fontSize='xs'  mt={3}  color='gray.500'>
                  per person on twin shearing

                </Text>
                <Link to={'/'}>
                <Button colorScheme='purple' size='md'>
                  View Details
                </Button>
                </Link>
                

              </Box>
            </Box>

          )

        })


      }


    </div>
  )
}
