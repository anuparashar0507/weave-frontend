import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { MdHome } from "react-icons/md";
import { FaRss, FaClipboardCheck } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import Link from "next/link";
const Sidebar = (props) => (
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
    bg="blue.700"
    _dark={{
      bg: "gray.800",
    }}
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      {/* <Logo /> */}
      <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
        Weave- Zenroll
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <NavItem icon={MdHome}>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem icon={FaRss}>
        <Link href="/blog">Articles</Link>
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
      </NavItem>
    </Flex>
  </Box>
);
export default Sidebar;
