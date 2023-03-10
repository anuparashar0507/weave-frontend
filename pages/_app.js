import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../lib/Layout";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
// 3. Pass the 'theme' prop to the 'ChakraProvider'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ChakraProvider>
  );
}
