import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ColorfulStat } from "./stats";

export const AuthorCard = () => {
  return (
    <HStack gap={0.5}>
      <Image
        w={"50px"}
        h="50px"
        objectFit={"cover"}
        src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        borderRadius={12}
      />
      <VStack alignItems={"start"}>
        <Text fontWeight={700}>Guy Hawkins</Text>
        <Text>Haiti</Text>
      </VStack>
    </HStack>
  );
};

export const DefaultCard = ({ img, title, text }) => {
  return (
    <HStack gap={0.5}>
      <Image
        w={"50px"}
        h="50px"
        objectFit={"cover"}
        src={img}
        borderRadius={12}
      />
      <VStack alignItems={"start"}>
        <Text fontWeight={700}>{title}</Text>
        <Text>{text}</Text>
      </VStack>
    </HStack>
  );
};

export const ImageCard = ({ img, text, text1, children, bg }) => {
  return (
    <VStack borderRadius={"10px"} w="full" bg={bg} p={6}>
      {children}
      <Image src={img} />
      <Text fontSize={24} fontWeight={600}>
        {text}
      </Text>
      <Text fontSize={20}>{text1}</Text>
    </VStack>
  );
};

export const UserCard = ({ img, title, text, health, level }) => {
  return (
    <HStack gap={0.5} py={4} w="full" justifyContent={"space-between"}>
      <HStack>
        <Image
          w={"40px"}
          h="40px"
          objectFit={"cover"}
          src={img ? img : 'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}
          borderRadius={"full"}
        />
        <VStack alignItems={"start"}>
          <Text fontWeight={700}>{title}</Text>
          <Text sx={{ marginTop: "0 !important" }}>{text}</Text>
        </VStack>
      </HStack>

      <VStack alignItems={"end"}>
        {health && (
          <Text fontWeight={600} fontSize="20px">
            {health} health
          </Text>
        )}
        <Text sx={{ marginTop: "0 !important" }}>
          {level != undefined ? level : 0} level
        </Text>
      </VStack>
    </HStack>
  );
};

export const AccordionPnl = ({ data }) => {
  return (
    <>
      <GridItem
        py={2}
        justifyContent="center"
        gridColumnStart={1}
        gridColumnEnd={3}
      >
        <DefaultCard img={data.img} title={data.name} text={data.rank} />
      </GridItem>
      <GridItem>
        <VStack h='full'><Text m='auto'>{data.reward}</Text></VStack>
      </GridItem>
      <GridItem>
        <VStack h='full'><Text m='auto'>{data.reward}</Text></VStack>
      </GridItem>
      <GridItem>
        <VStack h={'full'}><Text m='auto'>{data.reward}</Text></VStack>
      </GridItem>
      <GridItem>
        <HStack w="full" h='full'>
          <Box display={"inline-block"} m="auto" w="auto">
            <ColorfulStat
              text={data.status}
              color={
                data.status == "completed"
                  ? "green.main"
                  : data.status == "in process"
                  ? "blue.main"
                  : "yellow.main"
              }
              bg={
                data.status == "completed"
                  ? "green.secondary"
                  : data.status == "in process"
                  ? "blue.secondary"
                  : "yellow.secondary"
              }
            />
          </Box>
        </HStack>
      </GridItem>
    </>
  );
};


export const BattleCard = ({})