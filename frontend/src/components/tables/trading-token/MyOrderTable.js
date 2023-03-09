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
        id: 'type',
        numeric: false,
        disablePadding: false,
        label: 't.order-type',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 't.price',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 't.quantity',
    },
    {
        id: 'total',
        numeric: true,
        disablePadding: false,
        label: 't.total',
    }
    ,
    {
        id: 'hour',
        numeric: false,
        disablePadding: false,
        label: 't.hour',
    }
    ,
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 't.date',
    }
    ,
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 't.status',
    }

]



function createData(id, orderType, price, quantity, total, hour, date, status, statusText) {
    return {
        id, orderType, price, quantity, total, hour, date, status, statusText
    };
}

const rows = [
    createData('uuid-1', 'Fiduciary', 1400, 20, 0.58, '12:12:12', new Date(),
        1, 'Pending'),
    createData('uuid-1', 'Fiduciary', 1400, 20, 0.58, '12:12:12', new Date(),
        2, 'Completed'),
    createData('uuid-1', 'Fiduciary', 1400, 20, 0.58, '12:12:12', new Date(),
        3, 'Failed'),
    createData('uuid-1', 'Fiduciary', 1400, 20, 0.58, '12:12:12', new Date(),
        2, 'Completed'),
];

export default function MyOrderTable() {
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
            <TableContainer sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'divider' }}>
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
                                    <TableCell >{(row.orderType)}</TableCell>
                                    <TableCell align="right">BR {fNumber(row.price)}</TableCell>
                                    <TableCell align="right">{fNumber(row.quantity)}</TableCell>
                                    <TableCell align="right">{fNumber(row.total)}</TableCell>
                                    <TableCell >{fNumber(row.hour)}</TableCell>
                                    <TableCell >{fShortDate(row.date)}</TableCell>
                                    <TableCell >
                                        <Typography color={row.status === 1 && 'warning.main' || (row.status === 2 && 'success.main' || 'error.main')}>
                                           {(row.statusText)}
                                        </Typography>

                                    </TableCell>

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