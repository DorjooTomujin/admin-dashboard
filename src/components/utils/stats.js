import { Box, HStack, NumberInput, NumberInputField, Text, VStack } from "@chakra-ui/react"
import { DefaultButton } from "./buttons"
import { DefaultMenu } from "./menus"

export const MenuStat = ({text, children}) => {
    return (
        <HStack justifyContent={"space-between"} w="full" alignItems={"center"}>
        <VStack alignItems={"start"}>
          {children}
          <Text fontSize={'14px'}>{text}</Text>
        </VStack>

        <DefaultMenu/>
      </HStack>
    )
}

export const ButtonStat = ({text, children}) => {
    return (
        <HStack justifyContent={"space-between"} w="full" alignItems={"center"}>
        <VStack alignItems={"start"}>
          {children}
          <Text>{text}</Text>
        </VStack>

        <DefaultButton text={'History'}/>
      </HStack>       
    )
}

export const ColorfulStat = ({color, bg, text}) => {
    return (
        <Box color={color} borderRadius={4} px={3} py={2} bg={bg} >
            <Text fontWeight={700} textTransform='capitalize' fontSize={'14px'}>{text}</Text>
        </Box>
    )
}

export const DefaultStat = ({text, value, setValue}) => {
  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')
  return (
    <VStack border={'1px solid #e4e6ef'} alignItems='start' px={2} py={1} borderRadius={4} mt='0'>
      <Text fontSize={'11px'}>{text}</Text>
      <NumberInput border='none'
      onChange={(valueString) => setValue(parse(valueString))}
      value={format(value)}
      sx={{marginTop: '0 !important'}}

    >
      <NumberInputField border={'none'} p='0' fontSize={'sm'} h='auto' fontWeight={700}/>
    </NumberInput>
    </VStack>
  )
}