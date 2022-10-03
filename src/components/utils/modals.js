import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { DefaultCard, UserCard } from "./cards";
import {TableAccordian} from './accordians'
export const DefaultModal = ({ data, modal, head,  isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modal == 'battle' ? '3xl' : 'md'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={'capitalize'}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH={modal == 'battle' ? '700px' : '500px'}  overflowY='auto'>
          {
            modal != 'battle' && data && data.map((u, index) => {
              return (
                <Box key={index}>
                <UserCard img={u.img} title={u.username} text={u.email} health={u.health} level={u.level} />
          {data.length - 1 != index && (<Divider/>)}
                </Box>
              )
            })
          }
          {
            modal == 'battle' && data && head && (
              <TableAccordian data={data} head={head} isFull={true} />
            )
          }

        </ModalBody>


      </ModalContent>
    </Modal>
  );
};

export const UserModal = ({userDisplay, setUserDisplay}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>


<Modal isOpen={!isOpen} onClose={() => {
  onOpen(),
  setUserDisplay('')
}}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>{userDisplay}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={(() => {
        onOpen(),
        setUserDisplay('')
      })}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal></>
  )
}




