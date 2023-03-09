
    // const headCells = [
    //     {
    //         id: 'name',
    //         numeric: false,
    //         disablePadding: true,
    //         label: translate('transfer.name'),
    //     },
    //     {
    //         id: 'quantity',
    //         numeric: true,
    //         disablePadding: false,
    //         label: translate('transfer.quantity'),
    //     },
    //     {
    //         id: 'total',
    //         numeric: false,
    //         disablePadding: false,
    //         label: translate('transfer.total'),
    //     },
    //     {
    //         id: 'date',
    //         numeric: false,
    //         disablePadding: false,
    //         label: translate('transfer.date'),
    //     },
    //     {
    //         id: 'hour',
    //         numeric: false,
    //         disablePadding: false,
    //         label: translate('transfer.hour'),
    //     },
    //     {
    //         id: 'status',
    //         numeric: false,
    //         disablePadding: false,
    //         label: translate('transfer.status'),
    //     },
    // ];

import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

import useLocales from "../../hooks/useLocales";


export default function EnhancedTableHead(props) {
    const { translate } = useLocales();

    const { checkbox, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } =
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
                        align={headCell.numeric ? 'right' : 'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {translate(headCell.label)}
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
