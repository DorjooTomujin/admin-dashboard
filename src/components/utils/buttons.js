import { Button } from "@chakra-ui/react"

export const DefaultButton = ({text}) => {
    return (
        <Button size={'sm'} borderRadius={4}  bg={'gray.main'}>{text}</Button>
    )
}