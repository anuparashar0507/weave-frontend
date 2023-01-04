import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useDisclosure,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import Header from "./Header";
import RightSidebar from "./RightSideBar";
import Sidebar from "./Sidebar";
const Layout = (props) => {
  const sidebar = useDisclosure();
  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <Sidebar
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Header onClick={sidebar.onOpen} />
        <Box as="main" p="4">
          <HStack h={"100%"}>
            <Flex
              justify={"center"}
              align={"flex-start"}
              w={"100%"}
              maxH={"full"}
            >
              {props.children}
            </Flex>
            {/* <Flex
              justify={"flex-start"}
              align={"flex-start"}
              w={"100%"}
              h={"100%"}
              top={0}
              // maxH={"full"}
            > */}
            <RightSidebar />
            {/* </Flex> */}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;
