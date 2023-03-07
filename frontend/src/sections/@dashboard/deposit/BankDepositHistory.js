import { Card, Typography, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, useTheme, TableHead, Checkbox, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { useState } from "react";

import useLocales from "../../../hooks/useLocales";
import { fNumber } from "../../../utils/formatNumber";
import { fShortDate } from "../../../utils/formatTime";


function EnhancedTableHead(props) {
    const { translate } = useLocales();

    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: translate('transfer.name'),
        },
        {
            id: 'quantity',
            numeric: true,
            disablePadding: false,
            label: translate('transfer.quantity'),
        },
        {
            id: 'total',
            numeric: false,
            disablePadding: false,
            label: translate('transfer.total'),
        },
        {
            id: 'date',
            numeric: false,
            disablePadding: false,
            label: translate('transfer.date'),
        },
        {
            id: 'hour',
            numeric: false,
            disablePadding: false,
            label: translate('transfer.hour'),
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: translate('transfer.status'),
        },
    ];
    const { checkbox, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {checkbox &&
                    <TableCell padding="checkbox">

                        <Checkbox
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{
                                'aria-label': 'select all desserts',
                            }}
                        />
                    </TableCell>
                }
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


function createData(name, quantity, total, date, hour, status, statusText) {
    return {
        name, quantity, date, total, hour, status, statusText
    };
}

const rows = [
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 1, "Pending"),
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 2, "Completed"),
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 3, "Failed"),
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 1, "Pending"),
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 2, "Completed"),
    createData('Name', 20, '2,000 USDT', new Date(), "12:12:11", 2, "Completed"),

];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


export default function BankDepositHistory() {
    const theme = useTheme();
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
        <Card>
            <CardHeader title={''} />
            <CardContent>
                <Stack >
                    <TableContainer sx={{ padding: 2, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'divider' }}>
                        <Table
                            sx={{ minWidth: 500, }}
                            aria-labelledby="tableTitle"

                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}

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
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{fNumber(row.quantity)}</TableCell>
                                            <TableCell >{row.total}</TableCell>
                                            <TableCell >{fShortDate(row.date)}</TableCell>
                                            <TableCell >{row.hour}</TableCell>
                                            <TableCell >{<Typography sx={{ color: (row.status === 2 &&'primary.main'|| (row.status === 1 && 'warning.main' || 'error.main')) }}>{row.statusText}</Typography>}</TableCell>
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
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>
            </CardContent>

        </Card>
    )
}