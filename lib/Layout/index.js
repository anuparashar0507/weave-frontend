import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useDisclosure,
  Flex,
  SimpleGrid,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import CollapsedSidebar from "./Sidebar/CollapsedSidebar";
const Layout = (props) => {
  const sidebar = useDisclosure();
  const collapseSidebar = useDisclosure();
  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      {collapseSidebar.isOpen ? (
        <Sidebar
          display={{
            base: "none",
            md: "unset",
          }}
        />
      ) : (
        <CollapsedSidebar
          display={{
            base: "none",
            md: "unset",
          }}
        />
      )}
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
          md: collapseSidebar.isOpen ? 60 : 16,
        }}
        transition=".3s ease"
      >
        <Header
          onClick={sidebar.onOpen}
          onClickCollapse={collapseSidebar.onToggle}
        />
        <Box as="main" p="4">
          {/* <VStack h={"100%"}> */}

          <Flex
            justify={"center"}
            align={"flex-start"}
            w={"100%"}
            maxH={"full"}
          >
            {props.children}
          </Flex>
          {/* </VStack> */}
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;
