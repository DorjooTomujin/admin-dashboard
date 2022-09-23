import {
  VStack,
  Container,
  Heading,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  ActiveBox,
  EarningBox,
  ExternalLinkBox,
  ProfessionalBox,
} from "../src/components/utils/box";
import {
  AreaOverflow,
  AuthorsOverview,
  BarOverview,
  GridOverview,
  LineOverview,
  PerformanceOverview,
  BattleOverview,
  RadarOverview,
  QuestionOverview,
  TransferOverview,
} from "../src/components/utils/overviews";
export default function Home() {
  const [value, setValue] = useState("230.00");
  const areaFilter = ["1d", "7d", "1m"];
  const areaItems = {
    "1d": ["2d", "5d", "7d"],

    "7d": ["14d", "35d", "49d"],

    "1m": ["2m", "5m", "7m"],
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  // "1d", "5d", "1m", "6m", "1y"

  const users = [
    {
      img: "https://bit.ly/ryan-florence",
      name: "Ryan Florence",
      battles: "1010",
      email: "smith@kpmg.com",
      elfc: "10000",
    },
    {
      img: "https://bit.ly/sage-adebayo",
      name: "Segun Adebayo",
      battles: "100",
      email: "melody@altbox.com",
      elfc: "20000",
    },
    {
      img: "https://bit.ly/kent-c-dodds",
      name: "Kent Dodds",
      battles: "100",
      email: "max@kt.com",
      elfc: "30000",
    },
    {
      img: "https://bit.ly/prosper-baba",
      name: "Prosper Otemuyiwa",
      battles: "20",
      email: "sean@dellito.com",
      elfc: "40000",
    },
    {
      img: "https://bit.ly/code-beast",
      name: "Christian Nwamba",
      battles: "210",
      email: "brian@exchange.com",
      elfc: "50000",
    },
    {
      img: "https://bit.ly/ryan-florence",
      name: "Ryan Florence",
      battles: "1010",
      email: "smith@kpmg.com",
      elfc: "10000",
    },
    {
      img: "https://bit.ly/sage-adebayo",
      name: "Segun Adebayo",
      battles: "100",
      email: "melody@altbox.com",
      elfc: "20000",
    },
    {
      img: "https://bit.ly/kent-c-dodds",
      name: "Kent Dodds",
      battles: "100",
      email: "max@kt.com",
      elfc: "30000",
    },
    {
      img: "https://bit.ly/prosper-baba",
      name: "Prosper Otemuyiwa",
      battles: "20",
      email: "sean@dellito.com",
      elfc: "40000",
    },
    {
      img: "https://bit.ly/code-beast",
      name: "Christian Nwamba",
      battles: "210",
      email: "brian@exchange.com",
      elfc: "50000",
    },
  ];

  const battleHead = ["num", "winner", "period", "bet", "status", "view"];
  const battleData = [
    {
      num: "12",
      winner: "Jane Cooper",
      period: "03:12",
      bet: "10000",
      status: "completed",
      participants: [
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "gold",
          name: "Jane Cooper",
          status: "completed",
          reward: "20000",
        },
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "silver",
          name: "Esther Howard",
          status: "completed",
          reward: "20000",
        },
      ],
    },
    {
      num: "13",
      winner: "Jane Cooper",
      period: "04:24",
      bet: "1000",
      status: "completed",
      participants: [
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "gold",
          name: "Jane Cooper",
          status: "completed",
          reward: "20000",
        },
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "silver",
          name: "Esther Howard",
          status: "completed",
          reward: "0",
        },
      ],
    },
    {
      num: "14",
      winner: "Jane Cooper",
      period: "03:32",
      bet: "100000",
      status: "failed",
      participants: [
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "gold",
          name: "Jane Cooper",
          status: "completed",
          reward: "200000",
        },
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "silver",
          name: "Esther Howard",
          status: "failed",
          reward: "0",
        },
      ],
    },
    {
      num: "15",
      winner: "Jane Cooper",
      period: "03:12",
      bet: "100020",
      status: "in process",
      participants: [
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "gold",
          name: "Jane Cooper",
          status: "completed",
          reward: "20000",
        },
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "silver",
          name: "Esther Howard",
          status: "in process",
          reward: "0",
        },
      ],
    },
    {
      num: "14",
      winner: "Jane Cooper",
      period: "03:12",
      bet: "10000",
      status: "completed",
      participants: [
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "gold",
          name: "Jane Cooper",
          status: "completed",
          reward: "20000",
        },
        {
          img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          rank: "silver",
          name: "Esther Howard",
          status: "completed",
          reward: "0",
        },
      ],
    },
  ];


  const questionTitle = 
    [
      {
        'category': 'english',
        'levels':  ['B1', 'B2', 'C1', 'C2']
      }
    ]
  
  const questionHead = ['total', 'correct', 'incorrect', 'chart']
  const questionData = [
    {
      'english': [
        {
          'B1': {
            total: 123,
            correct: 100,
            incorrect: 23, 
          },
          'B2': {
            total: 153,
            correct: 130,
            incorrect: 23, 
          },
          'C1': {
            total: 127,
            correct: 104,
            incorrect: 23, 
          },
          'C2': {
            total: 23,
            correct: 10,
            incorrect: 13, 
          },
          
        }
      ]
    }
  ]
  return (
    <VStack>
      <HStack w="full" gap={10}>
        <AreaOverflow
          bg={"white"}
          areaItems={areaItems}
          areaFilter={areaFilter}
        />
        <BattleOverview bg={"white"} head={battleHead} data={battleData} />
      </HStack>
      <Box h={4} />
      <HStack w="full" gap={10}>
        <RadarOverview bg="white" />

        <QuestionOverview bg={"white"} head={questionHead} filter={questionTitle} data={questionData} />
      </HStack>
      <HStack w="full">
        <HStack flex={1} gap={10}>
          <VStack gap={10}>
            <ActiveBox
              num={69}
              pending={43}
              percent={72}
              bg={"pink.main"}
              color="white"
            />
            <EarningBox
              num={"69,700"}
              percent="2.2"
              bg="white"
              color={"gray.main"}
            />
          </VStack>
          <VStack gap={10}>
            <ProfessionalBox
              users={users}
              bg={"white"}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              battles={"123123"}
            />
            <ExternalLinkBox bg="white" />
          </VStack>
        </HStack>
        <Box flex={1}></Box>
      </HStack>
      
      <Box h={4} />
      <HStack w="full" gap={10}>
        <PerformanceOverview bg={"white"} />
        <AuthorsOverview bg="white" />
      </HStack>
      <Box h={4} />

      <LineOverview bg="white" />
      
      <GridOverview />
      <TransferOverview bg="white" value={value} setValue={setValue} />
    </VStack>
  );
}
