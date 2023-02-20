import { Box, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaRss, FaClipboardCheck, FaUserTag } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { IoGitCompare } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
// import { FiSearch, FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
const Sidebar = (props) => {
  const router = useRouter();
  // const { asPath } = router;
  console.log("pathname : ", router.pathname);
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
      w="60"
      {...props}
    >
      <HStack justify={"space-between"} px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Weave
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
              <Link href="/hr/post-job">Post New Job</Link>
            </NavItem>
            {/* <NavItem icon={AiFillHome}>
              <Link href="/hr/resumes">All Resumes</Link>
            </NavItem> */}
            <NavItem icon={FaUserTag}>
              <Link href="/hr/overview">Candidate Overview</Link>
            </NavItem>
            <NavItem icon={IoGitCompare}>
              <Link href="/hr/posting">Job Overview</Link>
            </NavItem>
          </>
        ) : router.pathname.split("/").includes("manager") ? (
          <>
            {" "}
            <NavItem icon={AiFillHome}>
              <Link href="/">Post New Requirements</Link>
            </NavItem>
            <NavItem icon={AiFillHome}>
              <Link href="/">Requirement Overview</Link>
            </NavItem>
            <NavItem icon={FaRss}>
              <Link href="/blog">Resource Search</Link>
            </NavItem>
          </>
        ) : (
          <>
            {" "}
            <NavItem icon={AiFillHome}>
              <Link href="/">Project Search</Link>
            </NavItem>
            <NavItem icon={FaRss}>
              <Link href="/blog">Co-Workers</Link>
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
export default Sidebar;
