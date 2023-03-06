import { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, CardHeader, Checkbox, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, Typography } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import useLocales from "../../../hooks/useLocales";
import { fShortDate } from "../../../utils/formatTime";

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    checkbox: PropTypes.bool,
};
function EnhancedTableHead(props) {
    const { translate } = useLocales();

    const headCells = [
        {
            id: 'coin',
            numeric: false,
            disablePadding: true,
            label: translate('order-history.table.coin'),
        },
        {
            id: 'amount',
            numeric: true,
            disablePadding: false,
            label: translate('order-history.table.amount'),
        },
        {
            id: 'payment',
            numeric: false,
            disablePadding: false,
            label: translate('order-history.table.payment'),
        },
        {
            id: 'date',
            numeric: false,
            disablePadding: false,
            label: translate('order-history.table.date'),
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


function createData(coin, amount, payment, date) {
    return {
        coin, amount, payment, date
    };
}

const rows = [
    createData('Euro()', 2400, 'Visa', new Date()),
    createData('Dollar()', 2400, 'Master Card', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
    createData('Real()', 2400, 'Pix', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
    createData('Real()', 2400, 'Visa', new Date()),
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



export default function OrderHistory() {
    const [selectedTab, setSelectedTab] = useState('deposit');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { translate } = useLocales();
    const onChange = (evt, newValue) => {
        setSelectedTab(newValue);
    }
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
        <Stack>
            <Card>
                <CardHeader title={translate('profile.order-history')} subheader={translate('profile.order-history-desc')} />
                <CardContent>
                    <Stack sx={{ borderBottomWidth: 1, borderBottomColor: 'divider', borderBottomStyle: 'solid' }} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                        <Tabs value={selectedTab} onChange={onChange}>
                            <Tab value={"deposit"} label={translate('words.deposit')} />
                            <Tab value={"withdraw"} label={translate('words.withdraw')} />
                        </Tabs>
                        <Stack direction="row" gap={1} pt={2} alignItems={'center'}>
                            <Typography variant={'body2'}>
                                {translate('words.order-type')}
                            </Typography>
                            <Button variant='contained' size="small" sx={{ py: 1 }}>{translate('words.fiduciary')}</Button>
                            <Button variant='outlined' size="small" sx={{ py: 1 }}>{translate('words.crypto')}</Button>

                        </Stack>
                    </Stack>
                    <Stack>
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
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
                                        .map((row, index) => {
                                            
                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key={row.name}
                                                 
                                                >
                                                     
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.coin}
                                                    </TableCell>
                                                    <TableCell align="right">{row.amount}</TableCell>
                                                    <TableCell >{row.payment}</TableCell>
                                                    <TableCell >{fShortDate(row.date) }</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: 33 * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={4} />
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
        </Stack>
    )
}