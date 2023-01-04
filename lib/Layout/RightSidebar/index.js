import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { MdHome } from "react-icons/md";
import { FaRss, FaClipboardCheck } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import Link from "next/link";
const RightSidebar = (props) => (
  <Box
    top="0"
    right="0"
    position={"relative"}
    // zIndex="sticky"
    h="100%"
    pb="10"
    // overflowX="hidden"
    // overflowY="auto"
    // bg="gray.200"
    _dark={{
      bg: "gray.800",
    }}
    borderColor="blackAlpha.300"
    borderLeftWidth="1px"
    w="96"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      {/* <Logo /> */}
      <Text fontSize="2xl" ml="2" color="dark" fontWeight="semibold">
        Highlights
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      {/* <NavItem icon={MdHome}>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem icon={FaRss}>
        <Link href="/">Articles</Link>
      </NavItem>
      <NavItem icon={HiCollection}>
        <Link href="/">Collections</Link>
      </NavItem>
      <NavItem icon={FaClipboardCheck}>
        <Link href="/">Checklists</Link>
      </NavItem>
      <NavItem icon={HiCode}>
        <Link href="/">Integrations</Link>
      </NavItem>
      <NavItem icon={BsGearFill}>
        <Link href="/">Settings</Link>
      </NavItem> */}
    </Flex>
  </Box>
);
export default RightSidebar;
