import {
  Flex,
  Table,
  Progress,
  Stack,
  Badge,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  HStack,
  Select,
  Button,
  Box,
  Tooltip,
  VStack,
  SimpleGrid,
  Wrap,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
// import { Success, Failed, Warning, Info } from "../badges";
// Custom components
// import Card from "components/card/Card";
import { TableIconButton } from "./TableIconButton";
import { GlobalFilter } from "./GlobalFilter";
// import SelectField from "../fields/SelectField";
// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiChevronDown,
} from "react-icons/hi";
import { ArrowUpDownIcon, UpDownIcon, InfoIcon } from "@chakra-ui/icons";
// import IndeterminateCheckbox from "../fields/IndeterminateCheckbox";
export default function TableWithStatus(props) {
  const {
    columnsData,
    tableData,
    tableHeading,
    pageSize: initialPageSize,
    onRowClick,
    selectedId,
    enableSearch,
    inLineEditConfig,
    searchBarColSpan,
    enablePagination,
    isBordered,
    isStriped,
    badges,
    headerBg,
    searchIsOutside,
    searchRef,
    // getRowId,
  } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: initialPageSize ? initialPageSize : 5,
      },
      autoResetSortBy: false,
      autoResetPage: false,
      autoResetGlobalFilter: false,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;
  initialState.pageSize = initialPageSize ? initialPageSize : 5;

  const textColor = useColorModeValue("gray.900", "white");
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.100");
  let newPageArray = [
    initialPageSize * 1,
    initialPageSize * 2,
    initialPageSize * 3,
    initialPageSize * 4,
    initialPageSize * 5,
  ];
  let pageShow = initialPageSize ? newPageArray : [5, 10, 20, 30, 40, 50];
  console.log("props table", props.type);
  const disableScroll = () => {
    if (props.type.length > 0) {
      const element = document.getElementById(props.type);
      element.scrollIntoView();
    } else {
      return;
    }
  };
  return (
    <Box
      direction="column"
      w="100%"
      px="4px"
      py="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      borderRadius="0px"
      id={props.type}
    >
      {(props.title || enableSearch) && (
        <HStack
          display={!searchIsOutside ? "flex" : "none"}
          justify="space-between"
          mb="16px"
          align="center"
        >
          {props.title && (
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              {props.title}
            </Text>
          )}
          {enableSearch && (
            <Flex
              justifyContent="flex-start"
              flexDirection="row"
              bg={"transparent"}
            >
              <GlobalFilter
                searchIsOutside={searchIsOutside}
                searchRef={searchRef}
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                gotoPage={gotoPage}
              />
            </Flex>
          )}
        </HStack>
      )}
      <Table
        {...getTableProps()}
        variant={isStriped ? "striped" : "simple"}
        color="blue.500"
        mb="24px"
        colorScheme="blue"
        size={props.size}
        boxShadow={"xs"}
        borderRadius={"1rem"}
        overflow="hidden"
      >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr
              w={"100%"}
              borderBottom={"hidden"}
              bg={headerBg ? headerBg : "none"}
              {...headerGroup.getHeaderGroupProps()}
              key={index}
            >
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  py={3}
                  key={index}
                  {...column.HeaderStyles}
                >
                  <HStack
                    w={"100%"}
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    // bg="gray.400"
                    spacing={2}
                    {...column.TitleStyles}
                  >
                    <Tooltip
                      label={column?.tooltip?.length > 0 ? column?.tooltip : ""}
                    >
                      <Text
                        fontWeight="bold"
                        fontSize={"0.875rem"}
                        color={"white"}
                      >
                        {column.render("Header")}
                      </Text>
                    </Tooltip>
                    {/* {column?.info?.length > 0 && <Icon as={InfoIcon} />} */}
                    {column.canSort &&
                      (column.isSorted ? (
                        column.isSortedDesc ? (
                          <HiChevronDown size={20} />
                        ) : (
                          <HiChevronUp size={20} />
                        )
                      ) : (
                        <Flex
                          h={"20px"}
                          w={"20px"}
                          justify={"center"}
                          align={"center"}
                        >
                          <UpDownIcon />
                        </Flex>
                      ))}
                  </HStack>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr
                borderColor={isBordered ? borderColor : "transparent"}
                {...row.getRowProps()}
                key={index}
              >
                {row.cells.map((cell, index) => {
                  // console.log("cell.column", cell.column);
                  let data = "";
                  if (cell.column?.type?.toUpperCase() === "NAME") {
                    data = (
                      <Tooltip label={cell.value}>
                        <Text
                          color={textColor}
                          fontSize={"0.875rem"}
                          fontWeight={500}
                          // textTransform="capitalize"
                          isTruncated
                          {...cell.column.styles}
                        >
                          {cell.value}
                        </Text>
                      </Tooltip>
                    );
                  } else if (
                    cell.column?.type?.toUpperCase() === "NAMEWITHOUTTOOLTIP"
                  ) {
                    data = (
                      <Text
                        color={textColor}
                        fontSize={"0.875rem"}
                        fontWeight={500}
                        // textTransform="capitalize"
                        isTruncated
                        {...cell.column.styles}
                      >
                        {cell.value}
                      </Text>
                    );
                  } else if (cell?.column?.type?.toUpperCase() === "DATETIME") {
                    data = (
                      <VStack spacing={0}>
                        <Text
                          color={textColor}
                          fontSize={"0.875rem"}
                          fontWeight={500}
                          {...cell.column.styles}
                        >
                          {cell.value.date}
                        </Text>
                        <Text
                          color={"secondaryGray.700"}
                          fontSize={"xs"}
                          fontWeight={400}
                          textAlign={"center"}
                          {...cell.column.styles}
                        >
                          {cell.value.time}
                        </Text>
                      </VStack>
                    );
                  } else if (
                    cell.column.Header.toUpperCase() === "DATE" &&
                    cell?.column?.type &&
                    cell?.column?.type.toUpperCase() !== "DATETIME"
                  ) {
                    data = (
                      <Text
                        color={textColor}
                        fontSize={"0.875rem"}
                        fontWeight={500}
                        {...cell.column.styles}
                      >
                        {cell.value}
                      </Text>
                    );
                  } else if (cell?.column?.Type?.toUpperCase() === "BUTTON") {
                    data = (
                      <Button
                        color={textColor}
                        fontSize="sm"
                        fontWeight={500}
                        size={"sm"}
                        onClick={(e, i) => {
                          // console.log("IN table", row);
                          cell?.column?.ButtonProps.onClick(
                            e,
                            cell.row.original,
                            i
                          );
                        }}
                        {...cell?.column?.ButtonProps}
                      >
                        {cell.column?.ButtonText}
                      </Button>
                    );
                  } else if (cell.column.Header.toUpperCase() === "PROGRESS") {
                    data = (
                      <Flex align="center">
                        <Progress
                          variant="table"
                          colorScheme="brandScheme"
                          h="8px"
                          w="108px"
                          value={cell.value}
                        />
                      </Flex>
                    );
                  } else if (
                    cell.column.Header.toUpperCase() === "SKILL SUMMARY"
                  ) {
                    data = (
                      <Wrap gap={1}>
                        {cell.value.length > 0 &&
                          cell.value.map((skill, i) => {
                            return (
                              <Badge
                                key={i}
                                variant={"outline"}
                                px={2}
                                py={1}
                                colorScheme={"blue"}
                                fontWeight={"400"}
                                borderRadius={16}
                                w={"max-content"}
                              >
                                {skill}
                              </Badge>
                            );
                          })}
                      </Wrap>
                    );
                  } else if (
                    cell?.column?.type?.toUpperCase() === "COMPONENT"
                  ) {
                    data = (
                      <Box {...cell.column.styles}>{cell.render("Cell")}</Box>
                    );
                  } else {
                    data = (
                      // <Tooltip label={cell.value}>
                      <Text
                        color={textColor}
                        fontSize={"0.875rem"}
                        fontWeight={500}
                        {...cell.column.styles}
                      >
                        {cell.render("Cell")}
                      </Text>
                      // </Tooltip>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      // minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      // maxW={cell.column.HeaderStyles}

                      // borderColor={isBordered ? borderColor : "transparent"}
                      onClick={() =>
                        cell.column.isLink
                          ? onRowClick(cell.row.original)
                          : null
                      }
                      overflow={"hidden"}
                      maxWidth={cell.column.type === "name" ? "100px" : "auto"}
                      cursor={cell.column.isLink ? "pointer" : "default"}
                      {...cell.column.RowStyles}
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {enablePagination && (
        <Flex
          // paddingY="1rem"
          justifyContent="space-between"
          flexDirection="row"
          // borderTopWidth="1px"
          overflowX="hidden"
          overflowY="hidden"
        >
          <HStack flexDirection="row">
            <TableIconButton
              onClick={() => {
                gotoPage(0);
                disableScroll();
              }}
              isDisabled={!canPreviousPage}
              icon={<HiChevronDoubleLeft size={20} />}
              // color={textColor}
              color={"white"}
              backgroundColor={"blue.400"}
            />
            <TableIconButton
              isDisabled={!canPreviousPage}
              onClick={() => {
                previousPage();
                disableScroll();
              }}
              color={"white"}
              icon={<HiChevronLeft size={20} />}
              backgroundColor={"blue.400"}
            />
          </HStack>
          <Flex justifyContent="center" alignItems="center">
            <Text mr={4} w="10rem">
              Page {/* <strong> */}
              {pageIndex + 1} of {pageOptions.length}
              {/* </strong>{" "} */}
            </Text>
            {/* {!isTabletOrMobile && ( */}
            <Select
              // variant={"main"}
              value={pageSize}
              color={textColor}
              borderColor={borderColor}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              defaultValue={initialPageSize}
            >
              {pageShow.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
            {/* )} */}
          </Flex>
          <HStack flexDirection="row">
            <TableIconButton
              isDisabled={!canNextPage}
              onClick={() => {
                nextPage();
                disableScroll();
              }}
              // color={textColor}
              color={"white"}
              icon={<HiChevronRight size={20} />}
              backgroundColor={"blue.400"}
            />
            <TableIconButton
              onClick={(event) => {
                gotoPage(pageCount ? pageCount - 1 : 1);
                disableScroll();
              }}
              isDisabled={!canNextPage}
              // color={textColor}
              color={"white"}
              icon={<HiChevronDoubleRight size={20} />}
              backgroundColor={"blue.400"}
            />
          </HStack>
        </Flex>
      )}
    </Box>
  );
}
