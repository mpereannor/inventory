import Amplify from "@aws-amplify/core";
import config from "../src/aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme"

import "@fontsource/noto-sans-jp"
import "@fontsource/roboto"

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
