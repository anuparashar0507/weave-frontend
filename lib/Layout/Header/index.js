import {
  Flex,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

const Header = (props) => {
  const { toggleColorMode: toggleMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg="white"
      position={"sticky"}
      _dark={{
        bg: "gray.800",
      }}
      borderBottomWidth="1px"
      borderColor="blackAlpha.300"
      h="14"
    >
      <IconButton
        aria-label="Menu"
        display={{
          base: "inline-flex",
          md: "none",
        }}
        onClick={props.onClick}
        icon={<FiMenu />}
        size="sm"
      />
      <InputGroup
        w="96"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <InputLeftElement color="gray.500">
          <FiSearch />
        </InputLeftElement>
        <Input placeholder="Search for articles..." />
      </InputGroup>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
      <Flex align="center">
        <Icon color="gray.500" as={FaBell} cursor="pointer" />
        <Avatar
          ml="4"
          size="sm"
          name="anubra266"
          src="https://avatars.githubusercontent.com/u/30869823?v=4"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
