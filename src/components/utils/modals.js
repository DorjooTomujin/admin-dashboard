import {
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

export const DefaultModal = ({ users, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Users</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH={'500px'} overflowY='auto'>
          {
            users && users.map((u, index) => {
              return (
                <>
                <UserCard img={u.img} title={u.name} text={u.email} battles={u.battles} elfc={u.elfc}/>
          {users.length - 1 != index && (<Divider/>)}
                </>
              )
            })
          }

        </ModalBody>


      </ModalContent>
    </Modal>
  );
};
