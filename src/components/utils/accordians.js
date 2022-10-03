import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AccordionPnl } from "./cards";
import { ColorfulStat } from "./stats";

export const TableAccordian = ({ head, data, isFull }) => {
  return (
    <Accordion allowToggle w={"full"}>
      <Grid
        w={"full"}
        gridTemplateColumns={`repeat(${head.length}, 1fr)`}
        justifyContent="space-between"
      >
        {head &&
          head.map((h, index) => {
            return (
              <GridItem justifyContent={"center"} key={index}>
                <Text
                  textAlign={"center"}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  {h}
                </Text>
              </GridItem>
            );
          })}
      </Grid>
      <Box h={4} />
      {data &&
        data.map((d, index) => {
          return (
            <div key={index}>
              {index < (!isFull ? 4 : data.length) && (
                <AccordionItem w={"full"} border={"none"} >
                  <Grid
                    gridTemplateColumns={`repeat(${head.length}, 1fr)`}
                    py={2}
                  >
                    <GridItem>
                      <VStack h="full">
                        <Text m="auto">{index + 1}</Text>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <VStack h="full">
                        <Text fontWeight={700} m="auto">
                          {d.winner._id}
                        </Text>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <VStack h="full">
                        <Text m="auto">{d.winner.score}</Text>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <VStack h="full">
                        <Text m="auto">{d.winner.amount}</Text>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <HStack w="full">
                        <Box display={"inline-block"} mx="auto" w="auto">
                          <ColorfulStat
                            text={d.status}
                            color={
                              d.status == "completed"
                                ? "green.main"
                                : d.status == "in process"
                                ? "blue.main"
                                : "yellow.main"
                            }
                            bg={
                              d.status == "completed"
                                ? "green.secondary"
                                : d.status == "in process"
                                ? "blue.secondary"
                                : "yellow.secondary"
                            }
                          />
                        </Box>
                      </HStack>
                    </GridItem>

                    <GridItem>
                      <Box w="50px" mx="auto">
                        <AccordionButton>
                          <AccordionIcon />
                        </AccordionButton>
                      </Box>
                    </GridItem>
                  </Grid>
                  <AccordionPanel>
                    {d.participants &&
                      d.participants.map((dt, index) => {
                        return (
                          <Grid
                            w="full"
                            key={index}
                            gridTemplateColumns={`repeat(${head.length}, 1fr)`}
                          >
                            <AccordionPnl data={dt} />
                          </Grid>
                        );
                      })}
                  </AccordionPanel>
                </AccordionItem>
              )}
            </div>
          );
        })}
    </Accordion>
  );
};
