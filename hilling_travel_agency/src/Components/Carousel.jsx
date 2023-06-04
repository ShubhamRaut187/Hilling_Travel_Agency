import React from 'react';
import { Box, IconButton, Heading, Stack, Container, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel({autoplayspeed,slidesToScroll, display}) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    // const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    // const top = useBreakpointValue({ base: '90%', md: '50%' });
    // const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [
        'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        'https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/9955404/pexels-photo-9955404.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/40513/forest-moss-norway-40513.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];

    return (
        <Box
            position={'relative'}
            display={display}
            height={'330px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings} autoplayspeed={autoplayspeed} slidesToScroll={slidesToScroll}>
                {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'2xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    />
                ))}
            </Slider>
        </Box>
    );
}

export function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Rajasthan Tour Package',
            text:
                "The tour is an exclusive resource for fun and adventours way to know the Land of sand dunes and sacrifice. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
        },
        {
            title: 'Meghalaya Tour Package',
            text:
                "The tour of Meghalaya is one of its kind Tour. A heart felling Adventour that stunned you by its beauty of Hills and Mountains and those big greenlands",
            image:
                'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Kashmir Tour Package',
            text:
                "The Paradise of earth resides in the Beauty of Bharatiya Mountains. You will get the great exposure to feel the cool breeze and experience the Beautiful Mountains",
            image: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Maharastra Tour Package',
            text:
                "The Paradise of earth resides in the Beauty of Bharatiya Mountains. You will get the great exposure to feel the cool breeze and experience the Beautiful Mountains",
            image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Karnataka Tour Package',
            text:
                "The Paradise of earth resides in the Beauty of Bharatiya Mountains. You will get the great exposure to feel the cool breeze and experience the Beautiful Mountains",
            image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ];
   
    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
            {/* Right Icon */}
            <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'100vh'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="100%"
                        backgroundImage={`url(${card.image})`}>
                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative">
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)">
                                <Heading color={'black.700'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="whitesmoke">
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}