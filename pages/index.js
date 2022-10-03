import {
  VStack,
  HStack,
  Box,
  useDisclosure,
  Text,
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
import axios from 'axios'
import { UserModal } from "../src/components/utils/modals";
import { useEffect } from "react";
export default function Home() {
  const [value, setValue] = useState("230.00");
  const [user, setUser] = useState(0)
  const [userByDate, setUserByDate] = useState()
  const [userFilter, setUserFilter] = useState("1d")
  const [users, setUsers] = useState([])
  const [battle, setBattle] = useState(0)
  const [battles, setBattles] = useState([])
  const [userData, setUserData] = useState([])
  const areaFilter = ["1d", "7d", "1m"];
  const areaItems = {
    "1d": ["1d","2d","3d","4d", "5d", "6d","7d"],

    "7d": ["7d","14d","21d","28d", "35d", "42d","49d"],

    "1m": ["1m","2m","3m","4m", "5m", "6m","7m"],
  };
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  // "1d", "5d", "1m", "6m", "1y"



  const battleHead = ["num", "winner", "score", "amount", "status",'view' ];
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

    const [userDisplay, setUserDisplay] = useState('')
    const url = process.env.adminUrl || 'http://localhost:3001/v1/admin'
  const getData = async () => {

  

    let newDate = new Date() 
    let minus 
    if(userFilter == '1d') 
      {
        minus = new Date().setDate(newDate.getDate() - 7)
        let arr = []
        for(let i=0; i<7; i++) {
          let sMinus = new Date().setDate(newDate.getDate() - i)
          let eMinus = new Date().setDate(newDate.getDate() - (i -1))
          let end = new Date(eMinus).toLocaleDateString('sv-SE')
          let start = new Date(sMinus).toLocaleDateString('sv-SE')
          let a = await axios.get(`${url}/users/${start}/${end}/0`)
          arr.push(a.data.length)
        }
        setUserData(arr)
      }
    if(userFilter == '7d')
    {
      minus = new Date().setDate(newDate.getDate() - 49)
      let arr = []
      for(let i=0; i<49; i+=7) {
        let sMinus = new Date().setDate(newDate.getDate() - i)
        let eMinus = new Date().setDate(newDate.getDate() - (i -7))
        let end = new Date(eMinus).toLocaleDateString('sv-SE')
        let start = new Date(sMinus).toLocaleDateString('sv-SE')
        let a = await axios.get(`${url}/users/${start}/${end}/0`)
        arr.push(a.data.length)
      }
      setUserData(arr)
    }
    if(userFilter == '1m'){
      minus = new Date().setMonth(newDate.getMonth() - 7)
      let arr = []
      for(let i=1; i<8; i++) {
        let sMinus = new Date().setMonth(newDate.getMonth() - i)
        let eMinus = new Date().setMonth(newDate.getMonth() - (i -1))
        let end = new Date(eMinus).toLocaleDateString('sv-SE')
        let start = new Date(sMinus).toLocaleDateString('sv-SE')
        let a = await axios.get(`${url}/users/${start}/${end}/0`)
        arr.push(a.data.length)
      }
      setUserData(arr)
    }

    let startDate = new Date(minus).toLocaleDateString('sv-SE')
    let endDate = new Date(newDate).toLocaleDateString('sv-SE')

    // get user by date
    const resUsers = await axios.get(`${url}/users/2020-9-9/${endDate}/0`)
    setUsers(resUsers.data)


    // get users info
    const resUser = await axios.get(`${url}/users/${startDate}/${endDate}/0`)
    setUserByDate(resUser.data.length)
    
    // get battle count
    const resBattle = await axios.get(`${url}/count-battle/2020-9-9`)
    setBattle(resBattle.data)

    // get all battles
    const resBattles = await axios.get(`${url}/battleLog/0`)
    setBattles(resBattles.data)
    // get all battles user

  }
  useEffect(() => {
    getData()

  }, [userFilter])
    return (
      <VStack>
        <HStack w="full" py={10}>
          <HStack flex={1} gap={10}>
            {/* <VStack gap={10}>
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
            </VStack> */}
            {
            userDisplay == '' && <AreaOverflow
            bg={"white"}
            user={users.length}
            userByDate={userByDate}
            data={userData}
            areaItems={areaItems}
            areaFilter={areaFilter}
            userFilter={userFilter}
            setUserFilter={setUserFilter}
            userDisplay={userDisplay}
            setUserDisplay={setUserDisplay}
          />
          }
          {
            userDisplay == 'ban' && <UserModal userDisplay={userDisplay} setUserDisplay={setUserDisplay}/>
          }

          {
            userDisplay == 'create' && <UserModal userDisplay={userDisplay} setUserDisplay={setUserDisplay}/>
          }
            <VStack gap={10}>
              <ProfessionalBox
                users={users}
                bg={"white"}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                battles={battle}
              />
              {/* <ExternalLinkBox bg="white" /> */}
            </VStack>
          </HStack>
          {/* <Box flex={1}></Box> */}
        </HStack>
        <HStack w="full" gap={10}>
          
          <BattleOverview bg={"white"} head={battleHead} data={battles} />
        </HStack>
        <Box h={4} />
        {/* <HStack w="full" gap={10}>
          <RadarOverview bg="white" />
  
          <QuestionOverview bg={"white"} head={questionHead} filter={questionTitle} data={questionData} />
        </HStack> */}
        
        
        {/* <Box h={4} />
        <HStack w="full" gap={10}>
          <PerformanceOverview bg={"white"} />
          <AuthorsOverview bg="white" />
        </HStack>
        <Box h={4} /> */}
  
        {/* <LineOverview bg="white" />
        
        <GridOverview />
        <TransferOverview bg="white" value={value} setValue={setValue} /> */}
      </VStack>
    )
}
