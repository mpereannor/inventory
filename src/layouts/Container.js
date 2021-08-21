import { Flex } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }) => {
  return (
    <Flex as="main" justifyContent="center" flexDirection="column">
      {children}
    </Flex>
  );
};

export default Container;
