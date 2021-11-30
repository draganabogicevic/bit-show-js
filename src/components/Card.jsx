import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { BookmarkContext } from "../context/bookmark-context";

import {Heading, Box, Center, Image, Flex, useColorModeValue, Spacer } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Card = ({show}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookMarkedShow, setBookMarkedShow] = useState();
  const bookmarkContext = useContext(BookmarkContext);

  const toggleBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  }

  const setBookmarked = () => {
    if(isBookmarked) {
      setBookMarkedShow(show);
      // @ts-ignore
      bookmarkContext.bookmarkHandler(show);
    }
  }

  

  useEffect (() => {
    setBookmarked();
  }, [isBookmarked])

  
  return (
    <Center py={6} mb="50px">
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("gray.100", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}>
        <Link to={`/${show.id}`}>
          <Image
            w={"full"}
            src={show.image.medium}
            objectFit={"cover"}
          />
        </Link>  
        <Flex>
          <Box
            // @ts-ignore
            onClick={toggleBookmarked}
          >
           {isBookmarked? <Icon as={BsBookmarkFill}/> : <Icon as={BsBookmark}/>}
          </Box> 
          <Spacer />
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