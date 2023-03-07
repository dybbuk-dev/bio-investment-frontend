import { Card, CardContent, CardHeader, Grid, Stack, styled, Typography } from "@mui/material";
import { fNumber } from "../../../utils/formatNumber";



export default function MyInvestOverview() {
    return (
        <Stack gap={2}>
            <Typography variant="h5">Overview</Typography>
            <Grid container>

                <Grid item xs={6} sm={6} md={3} padding={1}>
                    <Card sx={{ height: 144 }} >
                        <CardContent>
                            <Typography variant={'subtitle2'} >Overall profit</Typography>
                            <Typography variant={'subtitle2'} sx={{ fontSize: 20 }}>BRL{fNumber(185.212)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} padding={1}>
                    <Card sx={{ height: 144 }}>
                        <CardContent>
                            <Typography variant={'subtitle1'} >Overall profit</Typography>
                            <Typography variant={'subtitle2'} sx={{ fontSize: 20 }}>BRL{fNumber(185.212)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} padding={1}>
                    <Card sx={{ height: 144 }} >
                        <CardContent>
                            <Typography variant={'subtitle2'} >Overall profit</Typography>
                            <Typography variant={'subtitle2'} color={'text.secondary'} sx={{ fontSize: 20 }}>BRL{fNumber(185.212)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} padding={1}>
                    <Card sx={{ height: 144 }} >
                        <CardContent>
                            <Typography variant={'subtitle2'} >Overall profit</Typography>
                            <Typography variant={'subtitle2'} sx={{ fontSize: 20 }}>BRL{fNumber(185.212)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    )
}