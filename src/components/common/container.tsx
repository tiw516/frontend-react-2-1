import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  return <Flex px="10rem" direction="column" {...props} maxW="1280px" />;
};
