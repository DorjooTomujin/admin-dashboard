import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import {BsThreeDots} from 'react-icons/bs'
import {RiShareForwardBoxLine} from 'react-icons/ri'
import { WithPercentText } from "./texts";
import { DefaultMenu } from "./menus";
ChartJS.register(ArcElement, Tooltip, Legend);

export const ActiveBox = ({ bg, num, pending, percent, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"300px"}
      h={"200px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <Box>
        <Heading fontSize={32}>{num}</Heading>
        <Text>Active Projects</Text>
      </Box>
      <VStack w={"full"}>
        <HStack justifyContent={"space-between"} w="full">
          <Text>{pending} Pending</Text>
          <Text>{percent}%</Text>
        </HStack>
        <Progress
          value={percent}
          size="xs"
          colorScheme="pink"
          bg={"whiteAlpha.700"}
          w="full"
          borderRadius={"full"}
        />
      </VStack>
    </VStack>
  );
};
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const EarningBox = ({ bg, num, percent, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"300px"}
      h={"200px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <Box>
        <WithPercentText num ='69,700' percent={'2.2'}/>
        <Text>Projects Earnings in April</Text>
      </Box>
      <HStack>
        <canvas id="graph"></canvas>
      </HStack>
    </VStack>
  );
};

export const ProfessionalBox = ({ num, bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"300px"}
      h={"200px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <Box>
        <Heading fontSize={32}>{num}</Heading>
        <Text>Professionals</Text>
      </Box>
      <VStack alignItems={"start"}>
        <Text fontWeight={700}>Today’s Heroes</Text>
        <AvatarGroup size="md" max={4}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </VStack>
    </VStack>
  );
};

export const ExternalLinkBox = ({ bg, color, num }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"300px"}
      h={"200px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <HStack justifyContent="space-between" w="full">
        <Heading fontSize={20}>External Links</Heading>
        <DefaultMenu/>
      </HStack>
      <Box h={4}/>
      <HStack justifyContent={'space-between'} w='full'>
        <Link color={'blue.main'}>Avg. Client Rating</Link>
        <RiShareForwardBoxLine/>
      </HStack>
      <Divider/>
      <HStack justifyContent={'space-between'} w='full'>
        <Link color={'blue.main'}>Avg. Client Rating</Link>
        <RiShareForwardBoxLine/>
      </HStack>
      <Divider/>
      <HStack justifyContent={'space-between'} w='full'>
        <Link color={'blue.mainRiShareForwardBoxLine'}>Avg. Client Rating</Link>
        <RiShareForwardBoxLine/>
      </HStack>

    </VStack>
  );
};
