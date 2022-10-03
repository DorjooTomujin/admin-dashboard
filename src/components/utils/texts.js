import { Heading, HStack } from "@chakra-ui/react"
import { AiOutlineArrowUp } from "react-icons/ai"

export const WithPercentText = ({num , percent}) => {
    return (
        <HStack>
          <Heading fontSize={22}></Heading>
          <Heading
            sx={{ marginLeft: "4px !important" }}
            fontSize={32}
            color="black"
          >
            {num}
          </Heading>
          {
            percent && <HStack
            bg={"green.secondary"}
            color="green.main"
            p={1}
            borderRadius={4}
          >
            <AiOutlineArrowUp fill="#50cd89" />

            <Heading fontSize={12} sx={{ marginLeft: "4px !important" }}>
              {percent}%
            </Heading>
          </HStack>
          }
        </HStack>
    )
}

