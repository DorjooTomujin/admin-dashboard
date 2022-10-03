import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  TabPanel,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactSelect from "react-select";
import DefaultGeo from "../../../pages/geos";
import { TableAccordian } from "./accordians";

import { ImageCard } from "./cards";
import { AreaChart, BarChart, LinesChart, RadarChart } from "./charts";
import { DefaultStat, MenuStat, ModalStat } from "./stats";
import { AuthorsTab, DefaultTab, LongTab, PerformanceTab } from "./tabs";

export const PerformanceOverview = ({ bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      h={"600px"}
      justifyContent="space-between"
      alignItems={"start"}
      w="50%"
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
      w="50%"
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
      w={"30%"}
      h={"auto"}
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
      <Box w="100%" mx={"auto"}>
        <RadarChart />
      </Box>
    </VStack>
  );
};

export const AreaOverflow = ({userFilter,setUserFilter,userByDate, bg,user, color, areaItems, areaFilter, setUserDisplay ,data}) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"30%"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <DefaultTab user={user} items={areaFilter} userFilter={userFilter} setUserFilter={setUserFilter} setUserDisplay={setUserDisplay}>
        {areaFilter &&
          areaFilter.map((i, index) => {
            return (
              <TabPanel w="full" key={index}>
                <VStack w="full">
                  <AreaChart filter={i} data={data}/>
                  {areaItems && areaItems[i]   &&
                    areaItems[i].map((item, idx) => {
                      return (
                        <HStack
                          justifyContent={"space-between"}
                          w="full"
                          key={idx}
                        >
                          <Text>{item}</Text>
                          <HStack gap={4}>
   
                            {
                            <Text>{data[idx]}</Text>
                            }
                            {/* <Text color={"green.main"}>+134</Text> */}
                          </HStack>
                        </HStack>
                      );
                    })}
                </VStack>
              </TabPanel>
            );
          })}
      </DefaultTab>
    </VStack>
  );
};

const projectItems = ["item", "budget", "progress", "status", "chart", "view"];

const projectData = [
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mivy App",
    text: "Jane Cooper",
    budget: "$32.400",
    progress: "9.2%",
    status: "In Progress",
  },
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Avionica",
    text: "Esther Howard",
    budget: "$256,910",
    progress: "0.4%",
    status: "on hold",
  },
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Tower Hill",
    text: "Cody Fisher",
    budget: "$8,220",
    progress: "9.2%",
    status: "complated",
  },
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mivy App",
    text: "Jane Cooper",
    budget: "$32.400",
    progress: "9.2%",
    status: "In Progress",
  },
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Avionica",
    text: "Esther Howard",
    budget: "$256,910",
    progress: "0.4%",
    status: "on hold",
  },
  {
    img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Tower Hill",
    text: "Cody Fisher",
    budget: "$8,220",
    progress: "9.2%",
    status: "complated",
  },
];

export const BattleOverview = ({ bg, color, head, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"auto"}
      h={"auto"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <ModalStat
        onOpen={onOpen}
        isOpen={isOpen}
        data={data}
        head={head}
        onClose={onClose}
        text={"Updated 37 minutes ago"}
        btn="view all"
        title={"Battle Stats"}
      />
      <TableAccordian isFull={false} data={data} head={head} />
    </VStack>
  );
};

export const QuestionOverview = ({ bg, color, head, data, filter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"70%"}
      h={"auto"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <ModalStat
        onOpen={onOpen}
        isOpen={isOpen}
        data={data}
        head={head}
        onClose={onClose}
        text={"Avg. 57 per day"}
        btn="view all"
        title={"Questions"}
      >
        {filter && (
          <HStack>
            <Select
              placeholder="Category"
              border={"none"}
              onChange={(e) => setCategory(e.target.value)}
            >
              {filter.map((f, index) => {
                return (
                  <option
                    value={index}
                    key={index}
                  >
                    {f.category}
                  </option>
                );
              })}
            </Select>
            {category != "" && (
              <Select
                placeholder="Level"
                border={"none"}
                onChange={(e) => setLevel(e.target.value)}
              >
                {filter[category].levels.map((f, index) => {
                  return (
                    <option value={index} key={index}>
                      {f}
                    </option>
                  );
                })}
              </Select>
            )}
          </HStack>
        )}
      </ModalStat>
      <TableAccordian isFull={false} data={data} head={head} />
    </VStack>
  );
};

export const BarOverview = ({ bg, color }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      px={8}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"70%"}
      h={"500px"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <HStack>
        <Box>
          <BarChart />
        </Box>
        <Box>
          <DefaultGeo />
        </Box>
      </HStack>
    </VStack>
  );
};

export const GridOverview = () => {
  return (
    <HStack
      gap={6}
      px={8}
      py={4}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <ImageCard
        bg={"orange.skin"}
        img={
          "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/bitcoin.svg"
        }
        text={"0.44554576 BTC"}
        text1={"19,335,45 USD"}
      >
        <MenuStat text={"36,668 USD from 1 BTC"}>
          <Text fontWeight={600}>Bitcoin</Text>
        </MenuStat>
      </ImageCard>
      <ImageCard
        bg={"pink.skin"}
        img={
          "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/ethereum.svg"
        }
        text={"0.44554576 BTC"}
        text1={"19,335,45 USD"}
      >
        <MenuStat text={"36,668 USD from 1 BTC"}>
          <Text fontWeight={600}>Etherium</Text>
        </MenuStat>
      </ImageCard>
      <ImageCard
        bg={"green.skin"}
        img={
          "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/dogecoin.svg"
        }
        text={"29.33460000 ETH"}
        text1={"19,335,45 USD"}
      >
        <MenuStat text={"36,668 USD from 1 BTC"}>
          <Text fontWeight={600}>Bitcoin</Text>
        </MenuStat>
      </ImageCard>
    </HStack>
  );
};

const transferItems = ["Buy", "Sell"];

const selectData = [
  {
    value: "Bitcoin/BTC",
    label: "Bitcoin/BTC",
    image:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/coins/bitcoin.svg",
  },
  {
    value: "Ethereum/ETH",
    label: "Ethereum/ETH",
    image:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/coins/ethereum.svg",
  },
  {
    value: "Filecoin/FLE",
    label: "Filecoin/FLE",
    image:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/coins/filecoin.svg",
  },
  {
    value: "Chainlink/CIN",
    label: "Chainlink/CIN",
    image:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/coins/chainlink.svg",
  },
  {
    value: "Binance/BCN",
    label: "Binance/BCN",
    image:
      "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/coins/binance.svg",
  },
];

export const TransferOverview = ({ bg, color, value, setValue }) => {
  return (
    <VStack
      bg={bg}
      borderRadius={"10px"}
      py={4}
      boxShadow="0 0 20px 0 rgba(76, 87, 125, .02)"
      color={color}
      w={"500px"}
      h={"300px"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <LongTab items={transferItems}>
        <TabPanel px={8}>
          <ReactSelect
            placeholder="Coin name"
            options={selectData}
            formatOptionLabel={(d) => (
              <HStack>
                <Image src={d.image} w="20px" h="20px" />
                <Text>{d.label}</Text>
              </HStack>
            )}
          />
          <Box h="6" />
          <HStack w="full">
            <Box flex={1}>
              <DefaultStat
                text={"Amount(USD)"}
                value={value}
                setValue={setValue}
              />
            </Box>
            <Box flex={1}>
              <DefaultStat
                text={"Amount(USD)"}
                value={value}
                setValue={setValue}
              />
            </Box>
          </HStack>
          <Box h="6" />
          <Button w="full" color={"white"} bg="blue.main">
            Places offer
          </Button>
        </TabPanel>
        <TabPanel px={8}>
          <ReactSelect
            placeholder="Coin name"
            options={selectData}
            formatOptionLabel={(d) => (
              <HStack>
                <Image src={d.image} w="20px" h="20px" />
                <Text>{d.label}</Text>
              </HStack>
            )}
          />
          <Box h="6" />
          <HStack w="full">
            <Box flex={1}>
              <DefaultStat
                text={"Amount(USD)"}
                value={value}
                setValue={setValue}
              />
            </Box>
            <Box flex={1}>
              <DefaultStat
                text={"Amount(USD)"}
                value={value}
                setValue={setValue}
              />
            </Box>
          </HStack>
          <Box h="6" />
          <Button w="full" color={"white"} bg="blue.main">
            Places offer
          </Button>
        </TabPanel>
      </LongTab>
    </VStack>
  );
};
