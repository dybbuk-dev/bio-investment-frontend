import { Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

import { useState } from "react";
import useLocales from "../../../hooks/useLocales";
import { fNumber } from "../../../utils/formatNumber";
import { fShortDate } from "../../../utils/formatTime";
import { getComparator, stableSort } from "../../../utils/tableUtils";
import EnhancedTableHead from "../EnhancedTableHead";

const headCells = [
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 't.unit-price',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 't.unit-price',
    },
]



function createData(id, price,quantity) {
    return {
        id, price, quantity
    };
}

const rows = [
    createData('uuid-1',1400,20),
    createData('uuid-2',1400,20),
];

export default function OrderBookTable() {
    const { translate } = useLocales();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Stack flexGrow={1}>
            <TableContainer sx={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'divider' }}>
                <Table
                    sx={{ minWidth: 330 }}
                    aria-labelledby="tableTitle"

                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        headCells={headCells}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        checkbox={false}

                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (

                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={index}
                                >
                                    <TableCell align="right">BR {fNumber(row.price)}</TableCell>
                                    <TableCell align="right">{fNumber(row.quantity)}</TableCell>
                                    
                                </TableRow>
                            )
                            )}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: 33 * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Stack>
    )
}