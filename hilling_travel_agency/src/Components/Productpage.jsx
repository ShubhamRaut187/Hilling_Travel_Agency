import React, { useState, useEffect } from 'react'
import { Box, Button } from '@chakra-ui/react'
import LeftSideFilters from './Product Pge/LeftSideFilters'

export default function Productpage() {

  const [data, setdata]=useState([]);

   useEffect(()=>{

    axios.get('').then((res)=>{

      

    })

  }, [])
 
  return (
    <Box bg='#F5F5F5'>
      <LeftSideFilters/>
      
    </Box>
  )
}
