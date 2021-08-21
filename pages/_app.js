import Amplify from "@aws-amplify/core";
import config from "../src/aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import { Provider } from "react-redux";
import { store } from "../src/store";

import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
