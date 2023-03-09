import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from 'react-router-dom';
import useLocales from "../../../hooks/useLocales";
import useSettings from "../../../hooks/useSettings";

import { GradientButtonStyle } from "../../../components/AppStyledComponent";
import BuyTable from "../../../components/tables/BuyTable";
import Logo from "../../../components/Logo";

export default function TradingTokenDetailPanel({ token }) {

    const { translate } = useLocales();
    return (
        <Stack>
            <Grid container spacing={2} sx = {{width:'100%'}}>
                <Grid item xs={12} sm={12} md={6} >
                    <Card sx={{ flexGrow: 1 }}>
                        <CardContent>
                            <Stack gap={2}>
                                <GradientButtonStyle >{translate('t.Buy Now')}</GradientButtonStyle>
                                <Typography sx={{ display: 'flex' }} alignItems="center">
                                    <Icon icon="mdi:information-variant-circle-outline" />
                                    {translate('t.100 on offer, from BRL 0.99')}
                                </Typography>
                                <BuyTable />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ flexGrow: 1, height:'100%'}}>
                        <CardContent>
                            <Stack gap={2}>
                                <GradientButtonStyle disabled >{translate('t.Sell Now')}</GradientButtonStyle>
                                <Typography sx={{ display: 'flex' }} alignItems="center">
                                    <Icon icon="mdi:information-variant-circle-outline" />
                                    {translate('t.0 on offer right now.')}
                                </Typography>
                                <Stack alignItems={'center'} padding = {2}>
                                    <Logo />
                                </Stack>

                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>

    )
}