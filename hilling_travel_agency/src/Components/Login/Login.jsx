import React, { useState } from 'react';
import { Input, Checkbox, Text, Container, Center, Box, Button, Heading, Flex, InputGroup, InputRightElement, StepSeparator } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, useToast } from '@chakra-ui/react';
import { FaGoogle, FaTwitter, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {store} from '../../Redux/store'
import Swal from 'sweetalert2';


export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    navigate('/signup');
  };

  const handleButtonClick = () => {
    if (email === '') {
      toast({
        title: "Error",
        description: "Please enter valid email.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      onClose();
    } else {
      toast({
        title: "Success",
        description: "The reset link has been sent to your email.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      onClose();
      setEmail('');
    }
  };

  const storeData = useSelector((store)=>{
      return store.users;
  })

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleCreateButtonClick = () => {
    navigate('/signup')
  };
  

  const handleLogin= () => {
      const matchFound = storeData.find((ele)=>ele.email===email && ele.password===password)
      const partialMatchFound = storeData.find((ele)=>ele.email===email || ele.password===password)
     // const localData = JSON.parse(localStorage.getItem('allUsers'))||[];
    //  console.log('local',localData);
    //if ()
      console.log(storeData,"EMAIL",email,"PASS",password)
      if(matchFound) 
      {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Succesfull',
          showConfirmButton: false,
          timer: 2000
        })
        navigate('/signup')
      }
      else if(partialMatchFound) {
        Swal.fire({
          icon: 'warning',
          title: 'Invalid email or password',
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          showConfirmButton: false,
          text: 'This Account does not exists!',
          footer:`<a href="" id="createButton" style="color: white; text-decoration: none; background-color: teal; padding: 10px; border-radius: 5px;">Create Now</a>`,
          didOpen: () => {
            const createButton = document.getElementById('createButton');
            createButton.addEventListener('click', handleCreateButtonClick);
          },
        })
      }
      // const localMatchFound = localData.find((ele)=>ele.email===email && ele.password===password)
      // if(localMatchFound) 
      // {
      //   alert("Login successful")
      //   navigate('/signup')
      // }
      // else {
      //   alert('Account does not exist')
      // }
  }

  return (
    <Box my="100px">
      <Center>
        <Container
          p="20px"
          h="600px"
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <Center>
            <Heading as="h4" size="md" mb={8}>
              Login To Your Account
            </Heading>
          </Center>
          <Input onChange={handleEmail} type='email' variant="flushed" placeholder="Enter Your Email" mb={4} />
          <InputGroup mb={4}>
            <Input
              type={showPassword ? 'text' : 'password'}
              variant="flushed"
              placeholder="Enter Your Password"
              onChange={handlePassword}
            />
            <InputRightElement>
              <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Button onClick={onOpen} colorScheme="teal" variant="link">
              Forgot Password?
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Password Reset Link</ModalHeader>
                <ModalBody>
                  <Input onChange={(e) => handleEmail(e)} type='email' placeholder={"Enter your email"} />
                </ModalBody>
                <ModalFooter>
                  <Button w={'full'} colorScheme='blue' mr={3} onClick={handleButtonClick}>Send Reset Link</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Checkbox colorScheme="teal" variant="link"> Remember Me </Checkbox>
          </Flex>
          <Center>
            <Button w={'full'} onClick={handleLogin} variant="solid" colorScheme="teal" size="lg" mb={6}>
              Login
            </Button> 
          </Center>
          <Text fontFamily="sans-serif" textAlign="center" fontWeight="600" mb={4}>
            Don't have an account? <Button colorScheme="teal" variant="link" onClick={handleClick}>Click here</Button>
          </Text>
          <Center>
            <Box fontWeight="600" w="40px" h="40px" bg="black" color="white" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" fontSize="lg" mb={4}>
              OR
            </Box>
          </Center>
          <Center>
            <Text fontFamily="sans-serif" fontWeight="bold" textAlign="center" mb={2}>
              Sign up using
            </Text>
          </Center>
          <Flex justify="center">
            <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid" mr={2}>
              Google
            </Button>
            <Button leftIcon={<FaTwitter />} colorScheme="blue" variant="solid" mr={2}>
              Twitter
            </Button>
            <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
              LinkedIn
            </Button>
          </Flex>
        </Container>
      </Center>
    </Box>
  );
};
