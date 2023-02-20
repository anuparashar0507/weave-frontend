import { Box, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaRss, FaClipboardCheck } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillGift, AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiSearch, FiMenu } from "react-icons/fi";

import Link from "next/link";
const CollapsedSidebar = (props) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg="blue.900"
    _dark={{
      bg: "gray.800",
    }}
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="16"
    {...props}
  >
    <HStack justify={"space-between"} px="4" py="5" align="center">
      <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
        W
      </Text>
    </HStack>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <NavItem icon={AiFillHome}>
        <Link href="/"></Link>
      </NavItem>
      <NavItem icon={FaRss}>
        <Link href="/comparison"></Link>
      </NavItem>
      {/* <NavItem icon={HiCollection}>
        <Link href="/"></Link>
      </NavItem>
      <NavItem icon={FaClipboardCheck}>
        <Link href="/"></Link>
      </NavItem>
      <NavItem icon={HiCode}>
        <Link href="/"></Link>
      </NavItem>
      <NavItem icon={BsGearFill}>
        <Link href="/"></Link>
      </NavItem> */}
    </Flex>
  </Box>
);
export default CollapsedSidebar;
