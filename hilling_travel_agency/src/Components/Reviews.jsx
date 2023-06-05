import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('purple.700', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function Reviews() {
    return (
        <Box bgImage={'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)'} bgPosition={'initial'} bgSize={'100%'} bgRepeat={'no-repeat'}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading color='purple.700'>Our Clients Speak</Heading>
                    <Text color='purple.700'>We have been working with clients around the world</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Affordable & Cool</TestimonialHeading>
                            <TestimonialText>
                                One of the brilliant tour site I have ever seen. Tour guide and the facilities provided were awesome.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Exciting & Adventours</TestimonialHeading>
                            <TestimonialText>
                                One of the brilliant tour site I have ever seen. Tour guide and the facilities provided were awesome.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText>
                                One of the brilliant tour site I have ever seen. Tour guide and the facilities provided were awesome.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}