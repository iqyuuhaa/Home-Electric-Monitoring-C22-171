import { useTable, usePagination } from "react-table"
import { Table, Thead, Tbody, Tr, Th, Td, Flex, IconButton, Text, Tooltip, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box } from "@chakra-ui/react"
import { FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi"

const DataTable = ({ columns, data, isShowPagination = true }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
          columns,
          data: data,
          initialState: { pageIndex: 0 },
          autoResetPage: false,
          autoResetFilters: false,
        },
        usePagination
    );

    return (
        <>
            <Box overflow="auto">
                <Table {...getTableProps()} bg="white" borderRadius="lg" variant="striped">
                    <Thead>
                        {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
                            ))}
                        </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {page.map((row, index) => {
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
                                })}
                                </Tr>
                            );
                        })}
                     </Tbody>
                </Table>
            </Box>
            {
                isShowPagination ? (
                    <Flex justifyContent="space-between" m={4} alignItems="center">
                        <Flex>
                            <Tooltip label="First Page">
                                <IconButton onClick={() => gotoPage(0)} isDisabled={!canPreviousPage} icon={<FiChevronsLeft h={3} w={3} />} mr={4} />
                            </Tooltip>
                            <Tooltip label="Previous Page">
                                <IconButton onClick={previousPage} isDisabled={!canPreviousPage} icon={<FiChevronLeft h={6} w={6} />} />
                            </Tooltip>
                        </Flex>
            
                        <Flex alignItems="center">
                            <Text flexShrink="0" mr={8}>
                                Page{" "}
                                <Text fontWeight="bold" as="span">
                                {pageIndex + 1}
                                </Text>{" "}
                                of{" "}
                                <Text fontWeight="bold" as="span">
                                {pageOptions.length}
                                </Text>
                            </Text>
                            <Text flexShrink="0">Go to page:</Text>{" "}
                            <NumberInput
                                ml={2}
                                mr={8}
                                w={28}
                                min={1}
                                max={pageOptions.length}
                                onChange={(value) => {
                                const page = value ? value - 1 : 0;
                                gotoPage(page);
                                }}
                                defaultValue={pageIndex + 1}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Select
                                w={32}
                                value={pageSize}
                                onChange={(e) => {
                                setPageSize(Number(e.target.value));
                                }}
                            >
                                {[2, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                                ))}
                            </Select>
                        </Flex>
            
                        <Flex>
                            <Tooltip label="Next Page">
                                <IconButton onClick={nextPage} isDisabled={!canNextPage} icon={<FiChevronRight h={6} w={6} />} />
                            </Tooltip>
                            <Tooltip label="Last Page">
                                <IconButton onClick={() => gotoPage(pageCount - 1)} isDisabled={!canNextPage} icon={<FiChevronsRight h={3} w={3} />} ml={4} />
                            </Tooltip>
                        </Flex>
                    </Flex>
                ) : null
            }
        </>
    );
}

export default DataTable