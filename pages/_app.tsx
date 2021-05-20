import React, { useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
// import theme from "../styles/theme";
import { Container } from  "../src/components/common/container";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS >
      <Container minH="100vh" minW="1200px" margin="0 auto">
       {/* 你自己加一个header */}
        <Component {...pageProps} />
       {/* 你自己加一个footer */}
      </Container>
    </ChakraProvider>
  );
};

export default MyApp;
