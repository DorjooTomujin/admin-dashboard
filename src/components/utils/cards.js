import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"

export const AuthorCard = () => {
    return (
        <HStack gap={0.5}>
            <Image w={'50px'} h='50px' objectFit={'cover'} src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" borderRadius={12}/>
            <VStack alignItems={'start'}>
                <Text fontWeight={700}>Guy Hawkins</Text>
                <Text>Haiti</Text>
            </VStack>
        </HStack>
    )
}