import React from "react";
import {
  Table,
  Th,
  Tr,
  Td,
  Tbody,
  Thead,
  Flex,
  Button,
  Icon,
  ButtonGroup,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import NextLink from "next/link";
const JobProfileTable = () => {
  const header = ["Job title", "created", "# Applicants", "status", "actions"];
  const data = [
    {
      title: "Front End Developer",
      created: "7 days ago",
      applied: "10",
      status: "open",
    },
    {
      name: "Dev Ops",
      created: "23 hours ago",
      applied: "10",
      status: "open",
    },
    {
      name: "Data Scientist",
      created: "A few seconds ago",
      applied: "10",
      status: "open",
    },
    {
      name: "Java Developer",
      created: "A few hours ago",
      applied: "10",
      status: "open",
    },
  ];
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Table
        w="full"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th color={"gray.700"} key={x}>
                {x}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {data.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: "blue",
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td color={"gray.900"} fontSize="md" fontWeight="light">
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: color2,
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      as={NextLink}
                      href={"/hr/posting/job-overview"}
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                      aria-label="Up"
                      //   onClick={}
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default JobProfileTable;
