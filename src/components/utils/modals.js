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
                <UserCard img={u.img} title={u.name} text={u.email} battles={u.battles} elfc={u.elfc} />
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




