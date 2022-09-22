import {VStack, Container, Heading, HStack, Box, useDisclosure} from '@chakra-ui/react'
import { useState } from 'react'
import { ActiveBox, EarningBox, ExternalLinkBox, ProfessionalBox } from '../src/components/utils/box'
import { AreaOverflow, AuthorsOverview, BarOverview, GridOverview, LineOverview, PerformanceOverview, ProjectOverview, RadarOverview, TransferOverview } from '../src/components/utils/overviews'
export default function Home() {
  const [value, setValue] = useState('230.00')
  const areaFilter =  ['1d', '7d', '1m']
  const areaItems = {
    '1d': ['2d', '5d', '7d'],

    '7d': ['14d', '35d', '49d'],

    '1m': ['2m', '5m', '7m'],
  }
  const {isOpen, onOpen, onClose} = useDisclosure()
  // "1d", "5d", "1m", "6m", "1y"

  const users = [
    {
    'img': 'https://bit.ly/ryan-florence',
    'name': 'Ryan Florence',
    'battles': '1010',
    'email': 'smith@kpmg.com',
    'elfc': '10000'
  },
  {
    'img': 'https://bit.ly/sage-adebayo',
    'name': 'Segun Adebayo',
    'battles': '100',
    'email': 'melody@altbox.com',
    'elfc': '20000'
  },
  {
    'img': 'https://bit.ly/kent-c-dodds',
    'name': 'Kent Dodds',
    'battles': '100',
    'email': 'max@kt.com',
    'elfc': '30000'
  },
    {
    'img': 'https://bit.ly/prosper-baba',
    'name': 'Prosper Otemuyiwa',
    'battles': '20',
    'email': 'sean@dellito.com',
    'elfc': '40000'
  },
    {
    'img': 'https://bit.ly/code-beast',
    'name': 'Christian Nwamba',
    'battles': '210',
    'email': 'brian@exchange.com',
    'elfc': '50000'
  },
    {
    'img': 'https://bit.ly/ryan-florence',
    'name': 'Ryan Florence',
    'battles': '1010',
    'email': 'smith@kpmg.com',
    'elfc': '10000'
  },
  {
    'img': 'https://bit.ly/sage-adebayo',
    'name': 'Segun Adebayo',
    'battles': '100',
    'email': 'melody@altbox.com',
    'elfc': '20000'
  },
  {
    'img': 'https://bit.ly/kent-c-dodds',
    'name': 'Kent Dodds',
    'battles': '100',
    'email': 'max@kt.com',
    'elfc': '30000'
  },
    {
    'img': 'https://bit.ly/prosper-baba',
    'name': 'Prosper Otemuyiwa',
    'battles': '20',
    'email': 'sean@dellito.com',
    'elfc': '40000'
  },
    {
    'img': 'https://bit.ly/code-beast',
    'name': 'Christian Nwamba',
    'battles': '210',
    'email': 'brian@exchange.com',
    'elfc': '50000'
  },
  
]
  return (
    <VStack>
      <HStack w='full' gap={10}>
      <AreaOverflow bg={'white'} areaItems={areaItems} areaFilter={areaFilter}/>
      <ProjectOverview bg={'white'}/>
      </HStack>
      <Box h={4}/>
      <HStack w='full'>
      <HStack flex={1} gap={10}>
      <VStack gap={10}>
      <ActiveBox num={69} pending={43} percent={72} bg={'pink.main'} color='white'/>
      <EarningBox num={'69,700'} percent='2.2' bg='white' color={'gray.main'}/>
      </VStack>
      <VStack gap={10}>
        
      <ProfessionalBox users={users} bg={'white'} isOpen={isOpen} onOpen={onOpen} onClose={onClose} battles={'123123'}/>
      <ExternalLinkBox bg='white'/>
      </VStack>
      </HStack>
      <Box flex={1}></Box>
      </HStack>
      
      <HStack w='full' gap={10}>
      <PerformanceOverview bg={'white'}/>
      <AuthorsOverview bg='white'/>
      </HStack>
      <Box h={4}/>
      
      <LineOverview bg='white'/>
      <Box h={4}/>
      <HStack w='full' gap={10}>
      <RadarOverview bg='white'/>
      
      <BarOverview bg='white'/>
      </HStack>
      <GridOverview/>
      <TransferOverview bg='white' value={value} setValue={setValue}/>
    </VStack>
  )
}
