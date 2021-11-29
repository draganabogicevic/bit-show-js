import React from "react";

import {Heading, Box, Center, Image, Flex, useColorModeValue } from '@chakra-ui/react';

const Card = ({show}) => {
  
  return (
    <Center py={6} mb="50px">
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("gray.100", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}>
        <Image
          w={"full"}
          src={show.image.medium}
          objectFit={"cover"}
        />
        <Flex justify={"end"}  >
          <Box
            mt={-3}
            mr={30}
            textAlign="center"
            width="40px"
            css={{
              border: "2px solid white",
            }}
            borderRadius="full"
            bg={useColorModeValue("gray.100", "gray.800")}
          >
           {show.rating.average}
          </Box>  
        </Flex>
        <Box p={6} textAlign="center">
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {show.name}
          </Heading>
        </Box>
      </Box>  
    </Center>
  );
}

export default Card;