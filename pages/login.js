import { Avatar, Box, Button, Container, FormControl, Heading, Input, VStack } from "@chakra-ui/react"

export default function Login  ()  {
    return (
        <Box h='100vh' w='100vw' overflow={'hidden'} bgSize='cover' bgPos={'center'} bgRepeat={'no-repeat'} bgImage='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80' pos='relative'>
            <Box pos='absolute' inset='0' zIndex={1} bg='white' opacity={0.5}/>
                <Container w={'100%'} maxW='400px' borderRadius={12} bgGradient='linear( #F1416C, #F3D6EF)' zIndex={10} pos='relative' top={'50%'} transform={'translateY(-50%)'}>
                    <VStack px={8} py={10}>
                        <Avatar w={'100px'} h='100px' src="https://tiny-ivory.vercel.app/assets/img/tiny-logo.svg"/>
                        <Heading fontWeight={600} fontSize='28px' textTransform={'uppercase'} color='white'>Log in</Heading>
                        <Box h={4}/>
                        <FormControl display={'flex'} flexDir='column' gap={4}>
                            <Input type={'email'} placeholder='Email'/>
                            <Input type={'password'} placeholder='Password'/>
                            <Button mt={6} px={8} borderRadius={'30px'} mx='auto' bg={'pink.main'} color='white'>Login</Button>
                        </FormControl>
                    </VStack>
                </Container>

        </Box>
    )
}