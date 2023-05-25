import React from 'react'

import { Box, Button } from '@chakra-ui/react'
import { Flex, Spacer, Heading, Menu,
  MenuButton,
  MenuList,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input, ButtonGroup, Checkbox, Stack, Radio, RadioGroup } from '@chakra-ui/react'
  import {ChevronDownIcon  } from '@chakra-ui/icons'
import { useState } from 'react'

export default function LeftSideFilters() {
    const [value, setValue] = React.useState('1')
  return (
    <div>
         <Box w='30%' bg='#FFF' boxShadow='0 0 10px #00000012' >
    <Flex>
         <Box p='4' >
        
         <Heading as='h6' size='xs'>
         Filter Your Tour
         </Heading>
         </Box>
           <Spacer />
         <Box p='4' >
         <Heading as='h6' size='xs'>
         Clear All
         </Heading>
           
         </Box>


    </Flex>
    <hr/>
       
     <Box className='filter1'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Price Range</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
  <MenuList >
  <ButtonGroup pt={5} pl={3}>
    <Button>33000-40000</Button>
    <Button>40000-50000</Button>
    </ButtonGroup>
    <Box pt={5} pl={3}>
      <ButtonGroup>
    <Button>50000-60000</Button>
    <Button>60000 & above</Button>
    </ButtonGroup>
    </Box>
  </MenuList>
</Menu>
</Box>
    <hr/>

<Box className='filter2'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Tour Duration </Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
 
  <MenuList >
  <Slider aria-label='slider-ex-1' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
    <ButtonGroup pt={5} pl={3}>
    <Button>6-9  days</Button>
    <Button>9-12 days</Button>
    </ButtonGroup>
    <Box pt={5} pl={3}>
      <ButtonGroup>
    <Button>12-15 days</Button>
    <Button>15-15 days</Button>
    </ButtonGroup>
    </Box>
    
  </MenuList>
</Menu>
</Box>

<hr/>
  
<Box className='filter3'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Depart Between</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
  <MenuList >
  <Input
 placeholder="start date"
 
 size="lg"
 type="date"
/>
  </MenuList>
</Menu>
</Box>
    <hr/>


    <Box className='filter4'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Departure City</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
  <MenuList >
  <Box>
  <Checkbox defaultChecked>Bangalore</Checkbox>
  </Box>
  <Box> <Checkbox defaultChecked>Mumbai</Checkbox></Box>
  <Box>
  <Checkbox defaultChecked>Pune</Checkbox>

  </Box>
  

  
  </MenuList>
</Menu>
</Box>
    <hr/>

    <Box className='filter5'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Package Type</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
  <MenuList >
  <Box>
  <Checkbox defaultChecked>All</Checkbox>
  </Box>
  <Box> <Checkbox defaultChecked>Group Tour</Checkbox></Box>
  <Box>
  <Checkbox defaultChecked>Customized Holidays</Checkbox>

  </Box>
  

  
  </MenuList>
</Menu>
</Box>
    <hr/>

    <Box className='filter6'  paddingTop='10px' pb='10px'>
    <Menu>
  <MenuButton
   
  >
    <Flex>
      <Box p='4'>
      <Heading  as='h6' size='xs'>Speciality Tour</Heading>
      </Box>
      <Spacer />
      <Box p='4'>
        <Heading as='h6' size='xs'>
        <ChevronDownIcon />
        </Heading>
      
      </Box>
    
    </Flex>
  </MenuButton>
  <MenuList >
  <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Radio value='1'>Customized Holiday</Radio>
        <Radio value='2'>Family</Radio>
        <Radio value='3'>Women's Special</Radio>
        <Radio value='3'>Honeymoon Special</Radio>
        <Radio value='3'>YOLO Adventures</Radio>
        <Radio value='3'>Road Trips</Radio>
      </Stack>
    </RadioGroup>
  

  
  </MenuList>
</Menu>
</Box>
    <hr/>



       </Box>
      
    </div>
  )
}
