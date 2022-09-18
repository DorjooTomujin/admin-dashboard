import {VStack, Container, Heading} from '@chakra-ui/react'
import { ActiveBox, EarningBox, ExternalLinkBox, ProfessionalBox } from '../src/components/utils/box'
import { AuthorsOverview, LineOverview, PerformanceOverview, RadarOverview } from '../src/components/utils/overviews'
export default function Home() {
  return (
    <VStack>
      <ActiveBox num={69} pending={43} percent={72} bg={'pink.main'} color='white'/>
      <EarningBox num={'69,700'} percent='2.2' bg='white' color={'gray.main'}/>
      <ProfessionalBox num={357} bg={'white'} />
      <ExternalLinkBox bg='white'/>
      <PerformanceOverview bg={'white'}/>
      <AuthorsOverview bg='white'/>
      <LineOverview bg='white'/>
      <RadarOverview bg='white'/>
    </VStack>
  )
}
