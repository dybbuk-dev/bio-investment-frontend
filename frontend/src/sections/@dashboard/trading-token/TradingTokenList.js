import { Box, Card, CardContent, CardHeader, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import Image from "../../../components/Image";
import SearchFilter from "../../../components/app/SearchFilter";
import { fNumber } from "../../../utils/formatNumber";


const tokens = [
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },
    {
        collection: 'SOL4 - Solar Plus',
        image: '/images/token-1.png',
        min: 123,
        volumn: 1245000
    },


]
export default function TradingTokenList() {
    return (
        <Card>

            <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} mb={2} justifyContent={'space-between'} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                    <Typography variant="h5">Treding</Typography>
                    <SearchFilter variants={[{ id: 1, label: 'option1' }]} />
                </Stack>
                <Grid container >
                    <Grid item sm={12} md={6}>
                        <TableContainer sx={{ mb: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Collection
                                        </TableCell>
                                        <TableCell>
                                            Min Value
                                        </TableCell>
                                        <TableCell>
                                            Amount
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tokens.slice(0, tokens.length / 2).map((token, index) => (
                                        <TableRow key={`token-1-${index}`}>
                                            <TableCell sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                {index + 1}
                                                <Box width={48} height={48}>
                                                    <Image src={token.image} sx={{ borderRadius: 1 }} />
                                                </Box>

                                                <Typography variant="body1">{token.collection}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                BRL {fNumber(token.min)}
                                            </TableCell>
                                            <TableCell>
                                                <Stack >
                                                    {fNumber(token.volumn)}
                                                    <Typography sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'primary.main' }} >
                                                        <Icon icon="eva:trending-up-fill" />
                                                        +11%
                                                    </Typography>
                                                </Stack>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                    <Grid item sm={12} md={6}>
                        <TableContainer sx={{ mb: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Collection
                                        </TableCell>
                                        <TableCell>
                                            Min Value
                                        </TableCell>
                                        <TableCell>
                                            Amount
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tokens.slice(tokens.length / 2, tokens.length).map((token, index) => (
                                        <TableRow key={`token-2-${index}`}>
                                            <TableCell sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                {index + tokens.length / 2 + 1}
                                                <Box width={48} height={48}>
                                                    <Image src={token.image} sx={{ borderRadius: 1 }} />
                                                </Box>

                                                <Typography variant="body1">{token.collection}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                BRL {fNumber(token.min)}
                                            </TableCell>
                                            <TableCell>
                                                <Stack >
                                                    {fNumber(token.volumn)}
                                                    <Typography sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'primary.main' }} >
                                                        <Icon icon="eva:trending-up-fill" />
                                                        +11%
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </CardContent>


        </Card>
    )
}