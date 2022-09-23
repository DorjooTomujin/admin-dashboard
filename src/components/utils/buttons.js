import { AccordionButton, Button } from "@chakra-ui/react"
import { BsFillArrowRightSquareFill } from "react-icons/bs"

export const DefaultButton = ({text}) => {
    return (
        <Button size={'sm'} borderRadius={4} textTransform='capitalize' bg={'gray.main'}>{text}</Button>
    )
}

export const ModalButton = ({ onOpen, children, bg}) => {
    return (
        <Button variant={"unstyled"} size={'sm'} onClick={onOpen} borderRadius={4} bg={bg != undefined ? bg : 'transparent'}>{children}</Button>
    )
}