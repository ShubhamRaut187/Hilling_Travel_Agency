import React from 'react'
import { Stack } from '@chakra-ui/react'
import Home from '../Components/Home'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <Stack background={'#041126'}>
        <Home />
        
        <Footer />
    </Stack>
  )
}

export default HomePage