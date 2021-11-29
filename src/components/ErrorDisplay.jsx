import React from "react";
import { Box, Heading } from "@chakra-ui/layout";

export default function ErrorDisplay(props) {
  const msg = props.message ? props.message : "Error!";
  return (
    <Box w="70%" m="auto">
      <Heading>{msg}</Heading>
      {props.children}
    </Box>
  );
}