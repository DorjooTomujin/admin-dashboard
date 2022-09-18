import {
    Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BubbleChart } from "./charts";
import { WithPercentText } from "./texts";
import {GrCloudSoftware} from 'react-icons/gr'
import {BsCoin, BsThreeDots} from 'react-icons/bs'
import {TiSocialAtCircular} from 'react-icons/ti'
import {ImMobile} from 'react-icons/im'
import { AuthorTable } from "./tables";
import { DefaultMenu } from "./menus";
export const PerformanceTab = ({ tabs, title, text }) => {
  return (
    <Tabs variant="unstyled" w={"full"}>
      <HStack justifyContent={"space-between"}>
        <VStack>
          <Text fontWeight={700}>Performance Overview</Text>
          <Text>User from all channels</Text>
        </VStack>
        <TabList>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            Tab 1
          </Tab>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            Tab 2
          </Tab>
        </TabList>
      </HStack>
      <TabPanels>
        <TabPanel>
          <VStack alignItems={"start"}>
            <VStack alignItems={"start"}>
              <WithPercentText num={"18.89"} percent="4.8" />
              <Text>Avarage cost per interaction</Text>
            </VStack>
            <BubbleChart />
          </VStack>
        </TabPanel>
        <TabPanel>
          <VStack alignItems={"start"}>
            <VStack alignItems={"start"}>
              <WithPercentText num={"8,55"} percent="2.2" />
              <Text>Avarage cost per interaction</Text>
            </VStack>
            <BubbleChart />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const AuthorsTab = () => {
  return (
    <Tabs variant="unstyled" w={"full"}>
      <VStack justifyContent={"space-between"} w='full' alignItems={'start'}>
        <HStack w='full' justifyContent={'space-between'}><VStack alignItems={'start'}>
          <Text fontWeight={700}>Authors Achievements</Text>
          <Text>Avg. 69.34% Conv. Rate</Text>
        </VStack>
        <Box h={4}/>
        <DefaultMenu/>
        </HStack>
        <TabList>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            <VStack>
                <GrCloudSoftware/>
                <Text>SaaS</Text>
            </VStack>

          </Tab>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            <VStack>
                <BsCoin/>
                <Text>Crypto</Text>
            </VStack>
          </Tab>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            <VStack>
                <TiSocialAtCircular/>
                <Text>Crypto</Text>
            </VStack>
          </Tab>
          <Tab
            color={"gray.secondary"}
            _selected={{ color: "black", borderRadius: 4, bg: "gray.main" }}
          >
            <VStack>
                <ImMobile/>
                <Text>Mobile</Text>
            </VStack>
          </Tab>
        </TabList>
      </VStack>
      <TabPanels>
        <TabPanel w={'full'} p={0}>
        <AuthorTable/>
        </TabPanel>
        <TabPanel>
          <VStack alignItems={"start"}>
            <VStack alignItems={"start"}>
              <WithPercentText num={"8,55"} percent="2.2" />
              <Text>Avarage cost per interaction</Text>
            </VStack>
            <BubbleChart />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
