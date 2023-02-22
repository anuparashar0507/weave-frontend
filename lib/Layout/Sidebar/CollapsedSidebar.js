import { Box, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaRss, FaUserTag } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillGift, AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { IoGitCompare } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import Link from "next/link";
const CollapsedSidebar = (props) => {
  const router = useRouter();
  return (
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
          Z
        </Text>
      </HStack>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {router.pathname.split("/").includes("hr") ? (
          <>
            {" "}
            <NavItem icon={MdPostAdd}>
              <Link href="/hr/post-job"></Link>
            </NavItem>
            {/* <NavItem icon={AiFillHome}>
              <Link href="/hr/resumes">All Resumes</Link>
            </NavItem> */}
            <NavItem icon={FaUserTag}>
              <Link href="/hr/overview"></Link>
            </NavItem>
            <NavItem icon={IoGitCompare}>
              <Link href="/hr/posting"></Link>
            </NavItem>
          </>
        ) : router.pathname.split("/").includes("manager") ? (
          <>
            {" "}
            <NavItem icon={AiFillHome}>
              <Link href="/"></Link>
            </NavItem>
            <NavItem icon={AiFillHome}>
              <Link href="/"></Link>
            </NavItem>
            <NavItem icon={FaRss}>
              <Link href="/blog"></Link>
            </NavItem>
          </>
        ) : (
          <>
            {" "}
            <NavItem icon={AiFillHome}>
              <Link href="/"></Link>
            </NavItem>
            <NavItem icon={FaRss}>
              <Link href="/blog"></Link>
            </NavItem>
            {/* <NavItem icon={IoGitCompare}>
              <Link href="/comparison">Comparison</Link>
            </NavItem> */}
          </>
        )}
      </Flex>
    </Box>
  );
};
export default CollapsedSidebar;
