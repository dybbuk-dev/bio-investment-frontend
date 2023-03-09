import { useState } from "react";
import useLocales from "../../hooks/useLocales";

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


export default function PagenationTable({ defaultOrderKey = 'name', defaultPerPage = 5, minWidth = 500, }) {
    const { translate } = useLocales();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(defaultOrderKey);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(defaultPerPage);

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
        <Stack >
            <TableContainer sx={{ padding: 2, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'divider' }}>
                <Table
                    sx={{ minWidth }}
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
                                    <TableCell >{<Typography sx={{ color: (row.status === 2 && 'primary.main' || (row.status === 1 && 'warning.main' || 'error.main')) }}>{row.statusText}</Typography>}</TableCell>
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
    )
}