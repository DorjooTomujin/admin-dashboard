import {
    Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AuthorCard } from "./cards";
import { LineChart } from "./charts";

export const AuthorTable = () => {
  return (
    <TableContainer w='full' p={0}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th >Author</Th>
            <Th isNumeric>CONV.</Th>
            <Th >CHART</Th>
            <Th >VIEW</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr >
            <Td><AuthorCard/></Td>
            <Td isNumeric>78.34%</Td>
            <Td  maxW='200px' h={'auto'}><LineChart/></Td>
            <Td ><Box><BsFillArrowRightSquareFill/></Box></Td>
          </Tr>
          <Tr>
            <Td><AuthorCard/></Td>
            <Td isNumeric>63.83%</Td>
            <Td  maxW='200px' h={'auto'}><LineChart/></Td>
            <Td ><Box><BsFillArrowRightSquareFill/></Box></Td>
          </Tr>
          <Tr>
            <Td><AuthorCard/></Td>
            <Td isNumeric>92.56%</Td>
            <Td  maxW='200px' h={'auto'}><LineChart/></Td>
            <Td ><Box><BsFillArrowRightSquareFill/></Box></Td>
          </Tr>
        </Tbody>

      </Table>
    </TableContainer>
  );
};

export const DefaultTable = ({items, children}) => {
  return (
    <TableContainer w='full' p={0}>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            {items && items.map((i) => {
              return (
                <Th><Text textTransform={'uppercase'} color='gray.secondary'>{i}</Text></Th>
              )
            })}
          </Tr>
        </Thead>
        <Tbody >
            {children}
            
        </Tbody>
      </Table>
    </TableContainer>
  )
}
