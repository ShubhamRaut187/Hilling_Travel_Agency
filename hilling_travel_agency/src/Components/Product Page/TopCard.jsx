import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function TopCard() {
  return (
    <div>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>


















<Box className='filter1' paddingTop='10px' pb='10px'>
              <Menu>
                <MenuButton

                >
                  <Flex>
                    <Box p='4'>
                      <Heading as='h6' size='xs'>Price Range</Heading>
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
                    <Button onClick={getpricerange1( )} value={40000}>33000-40000</Button>
                    <Button onClick={getpricerange2}>40000-50000</Button>
                  </ButtonGroup>
                  <Box pt={5} pl={3}>
                    <ButtonGroup>
                      <Button onClick={getpricerange3}>50000-60000</Button>
                      <Button onClick={getpricerange4}>60000 & above</Button>
                    </ButtonGroup>
                  </Box>
                </MenuList>
              </Menu>
            </Box>






















      <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
    </div>
  )
}
