import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"

export const DefaultMenu = ({setUserDisplay}) => {
    return (
        <Menu>
          <MenuButton
          p={1}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <BsThreeDots/>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setUserDisplay('')}>View</MenuItem>
            <MenuItem onClick={() => setUserDisplay('ban')}>Ban User</MenuItem>
            <MenuItem onClick={() => setUserDisplay('create')}>Create User</MenuItem>
            {/* <MenuItem>Save File</MenuItem> */}
          </MenuList>
        </Menu>
    )
}