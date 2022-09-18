import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DatePicker as ChakraDatePicker } from "@orange_digital/chakra-datepicker";
import { useState } from "react";
import { LinesChart, RadarChart } from "./charts";
import { AuthorsTab, PerformanceTab } from "./tabs";

export const PerformanceOverview = ({ bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"600px"}
      h={"600px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <PerformanceTab />
    </VStack>
  );
};

export const AuthorsOverview = ({ bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"700px"}
      h={"600px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <AuthorsTab />
    </VStack>
  );
};

export const LineOverview = ({ bg, color }) => {

  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"700px"}
      h={"400px"}
      justifyContent="space-between"
      alignItems={"start"}
    >
      <HStack justifyContent={"space-between"} w="full" alignItems={"center"}>
        <VStack alignItems={"start"}>
          <Text fontWeight={700}>Performance</Text>
          <Text>1,046 Inbound Calls today</Text>
        </VStack>

        <Box maxW={"130px"}>
          {/* <ChakraDatePicker
            initialValue={new Date()}
            onDateChange={(d) => console.log("ChakraDatePicker::d", d)}
          /> */}
        </Box>
      </HStack>
      <LinesChart />
    </VStack>
  );
};

export const RadarOverview = ({ bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"400px"}
      h={"450px"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <HStack justifyContent={"space-between"} w="full" alignItems={"center"}>
        <VStack alignItems={"start"}>
          <Text fontWeight={700}>Performance</Text>
          <Text>1,046 Inbound Calls today</Text>
        </VStack>

        <Button>PDF Report</Button>
      </HStack>
      <Box w='100%' mx={'auto'}>
        <RadarChart/>
      </Box>
    </VStack>
  );
};
