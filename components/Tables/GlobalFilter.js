import React from "react";
import { Row } from "react-table";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  gotoPage,
  background,
  borderRadius,
  placeholder,
  searchRef,
  searchIsOutside,
  ...rest
}) => {
  const count = preGlobalFilteredRows.length;
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  return (
    <InputGroup
      borderRadius={borderRadius || "8px"}
      w={{ base: "100%", md: "14rem" }}
      display={searchIsOutside !== true ? "block" : "none"}
      {...rest}
    >
      <InputLeftElement>
        <IconButton
          bg="inherit"
          borderRadius="inherit"
          _hover={{}}
          _active={{
            bg: "inherit",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
        />
      </InputLeftElement>

      <Input
        ref={searchRef}
        variant={"search"}
        fontSize="sm"
        bg={background || inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.500", fontSize: "14px" }}
        // placeholder={placeholder || "Search..."}
        placeholder={placeholder || `Search ${count} records...`}
        value={globalFilter}
        onChange={(event) => {
          setGlobalFilter(event.target.value);
          gotoPage(0);
        }}
      />
    </InputGroup>
  );
};
