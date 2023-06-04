import React, { useState, useEffect } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
  Flex, Spacer, Heading, Menu,
  MenuButton,
  MenuList,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  Option,
  Text,
  Input, ButtonGroup, Checkbox, Stack, Radio, RadioGroup
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Pagination from './Pagination'
import axios from 'axios';


import Leftsidefilters from './Leftsidefilters';
import Cards from './Cards';
import Loding from './Loding'



export default function Product_Page() {


  const [data, setdata] = useState([]);

  const [value, setValue] = React.useState('1')
  const [pricerange1, setPricerange1] = useState(30000);
  const [pricerange2, setPricerange2] = useState(100000);

  const [daysrange1, setdaysrange1] = useState(3);
  const [daysrange2, setdaysrange2] = useState();

  const [page, setpage] = useState(1)
  const [totalpage, settotalpage] = useState();






  useEffect(() => {
    logJSONData(page)


  }, [page,])

  async function logJSONData(pageno = 1) {
    const response = await fetch(`https://hillingtravelagency.onrender.com/Tours?_page=${pageno}&_limit=4`);
    const jsonData = await response.json();
    setdata(jsonData);

  }



  const getpricerange1= (e) => {
    axios.get(`https://hillingtravelagency.onrender.com/Tours?Price_gte=${pricerange1}&Price_lte=${e.target.value}?_page=1&_limit=4`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
        setPricerange1(e.target.value)
       


      })


  }
  


  const getdaysrange1 = (e) => {
    console.log(e.target.value)
    axios.get(`https://hillingtravelagency.onrender.com/Tours?Price_gte=${daysrange1}&Price_lte=${e.target.value}?_page=1&_limit=4`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
        setdaysrange1(e.target.value)
       


      })

  }
  const getdaysrange2 = (e) => {
    console.log(e.target.value)
    setdaysrange1(9)
    setdaysrange2(12)

  }
  const getdaysrange3 = (e) => {
    console.log(e.target.value)
    setdaysrange1(12)
    setdaysrange2(15)

  }
  const getdaysrange4 = (e) => {
    console.log(e.target.value)
    setdaysrange1(15)
    setdaysrange2(15)

  }






  return (
    <Box bg='#F5F5F5' >

      <Box display='flex'>
        <Box m='10' p='20' bg='#FFF' boxShadow='0 0 10px #00000012' display={{ base: "none", md: "block" }}>
          <Flex>
            <Box p='4' >

              <Heading as='h6' size='xs'>
                Filter Your Tour
              </Heading>
            </Box>
            <Spacer />
            <Box p='4' >
              <Link to={"/product_page" }>Clear All</Link>

            </Box>


          </Flex>
          <hr />

          <Select  p='4' placeholder={<Heading as='h6' size='xs' >
                Price Range
              </Heading> } variant='unstyled' onChange={getpricerange1}>
            <option value='40000'>30000-40000</option>
            <option value='50000'>40000-50000</option>
            <option value='60000'>50000-60000</option>
            <option value='1000000'>60000 & above</option>
          </Select>
          

          <hr />
          <Select  p='4' placeholder={<Heading as='h6' size='xs' >
                Price Range
              </Heading>} variant='unstyled' onChange={getdaysrange1}>
            <option value='3'>3-4 Days</option>
            <option value='6'>4-6 Days</option>
            <option value='10'>6-10 Days</option>
            <option value='15'>10-15 Days</option>
          </Select>
          <hr/>

          <Box className='filter3' paddingTop='10px' pb='10px'>
            <Menu>
              <MenuButton

              >
                <Flex>
                  <Box p='4'>
                    <Text >Depart Between</Text>
                  </Box>
                  <Spacer />
                  <Box p='4'>
                    <Heading  size='xs'>
                      <ChevronDownIcon ml={'16'} />
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
          <hr />


          <Box className='filter4' paddingTop='10px' pb='10px'>
            <Menu>
              <MenuButton

              >
                <Flex>
                  <Box p='4'>
                    <Text >Departure City</Text>
                  </Box>
                  <Spacer />
                  <Box p='4'>
                    <Heading as='h6' size='xs'>
                      <ChevronDownIcon  ml={'16'}  />
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
          <hr />

          <Box className='filter5' paddingTop='10px' pb='10px'>
            <Menu>
              <MenuButton

              >
                <Flex>
                  <Box p='4'>
                    <Text>Package Type</Text>
                  </Box>
                  <Spacer />
                  <Box p='4'>
                    <Heading as='h6' size='xs'>
                      <ChevronDownIcon  ml={'16'}/>
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
          <hr />

          <Box className='filter6' paddingTop='10px' pb='10px'>
            <Menu>
              <MenuButton

              >
                <Flex>
                  <Box p='4'>
                    <Text>Speciality Tour</Text>
                  </Box>
                  <Spacer />
                  <Box p='4'>
                    <Heading as='h6' size='xs'>
                      <ChevronDownIcon  ml={'16'}/>
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
          <hr />



        </Box>

        {
          data.length> 0 ? <Box>
          <Cards data={data} />
          <Pagination action={setpage} totalPages={totalpage} page={page} />

        </Box> : <Loding/>
        }

        

      </Box>





    </Box>
  )
}
