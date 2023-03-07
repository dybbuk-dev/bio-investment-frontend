import { Card, CardContent, CardHeader, Divider, FormGroup, FormLabel, Grid, ListItemIcon, ListItemText, MenuItem, Paper, Select, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { fNumber } from "../../../utils/formatNumber";
import Iconify from "../../../components/Iconify";
import useLocales from "../../../hooks/useLocales";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";


export default function BankWithdraw() {
    const { translate } = useLocales();
    const [coin, setCoin] = useState('');
    const [network, setNetwork] = useState('');
    const theme = useTheme();
    const availableTokens = useMemo(() => {
        return [
            {
                label: 'USDT',
                icon: 'cryptocurrency:usdt'
            },
            {
                label: 'ETH',
                icon: 'cryptocurrency:eth'
            },
            {
                label: 'BNB',
                icon: 'cryptocurrency:bnb'
            }
        ]
    }, []);
    const availableNetworks = useMemo(() => {
        return [
            {
                label: 'Ethereum',
                icon: 'logos:ethereum'
            },
            {
                label: 'Binance',
                icon: 'mingcute:binance-coin-bnb-fill'
            },

        ]
    }, []);
    const onChangeCoin = (evt) => {

        setCoin(evt.target.value);
    }
    const onChangeNetwork = (evt) => {
        setNetwork(evt.target.value);
    }
    return (
        <Card>
            <CardHeader title={translate('transfer.withdraw-bank-title')} />
            <CardContent>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack gap={2} padding={2} sx={{ mb: 2 }}>
                            <FormGroup>
                                <FormLabel>{translate('transfer.network')}</FormLabel>
                                <Select size="small" value={network} onChange={onChangeNetwork} renderValue={(network) => {
                                    return (
                                        <MenuItem >
                                            <ListItemIcon >
                                                <Iconify icon={network.icon} />
                                            </ListItemIcon>
                                            <ListItemText primary={network.label} />
                                        </MenuItem>
                                    )
                                }}
                                >
                                    {availableNetworks.map((network) => (
                                        <MenuItem value={network} key={network.label}>
                                            <ListItemIcon >
                                                <Iconify icon={network.icon} />

                                            </ListItemIcon>
                                            <ListItemText primary={network.label} />

                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.coin')}</FormLabel>
                                <Select size="small" value={coin} onChange={onChangeCoin} renderValue={(token) => {
                                    return (
                                        <MenuItem >
                                            <ListItemIcon >
                                                <Iconify icon={token.icon} />
                                            </ListItemIcon>
                                            <ListItemText primary={token.label} />
                                        </MenuItem>
                                    )
                                }}
                                >
                                    {availableTokens.map((token) => (
                                        <MenuItem value={token} key={token.label}>
                                            <ListItemIcon >
                                                <Iconify icon={token.icon} />

                                            </ListItemIcon>
                                            <ListItemText primary={token.label} />

                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.url')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.amount')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack gap ={2} sx={{ backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800], borderRadius: 1 }} padding={2}>
                            <Typography variant="h6">{translate('transfer.witdraw-summary')}</Typography>
                            <Stack direction="row" gap={1} justifyContent={'space-between'}>
                                <Stack>
                                    <Typography variant="body2">{translate('transfer.balance')}</Typography>
                                    <Typography variant="subtitle1">{fNumber(12345)}</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="body2">{translate('transfer.fee')}</Typography>
                                    <Typography variant="subtitle1">{fNumber(0.2)}</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="body2">{translate('transfer.min')}</Typography>
                                    <Typography variant="subtitle1">{fNumber(50)}</Typography>
                                </Stack>
                            </Stack>
                            <Paper sx={{ borderRadius: 1, padding:2, borderColor:'divider', borderWidth:1, borderStyle:'solid' }} >
                                <Stack gap={2} justifyContent={'center'} alignItems={'center'}>
                                    <Typography variant="body1">{translate('transfer.you-get')}</Typography>
                                    <Typography variant="h6">{fNumber(10000)}</Typography>
                                </Stack>
                            </Paper>
                            <Divider />
                            <GradientButtonStyle >
                                {translate('transfer.withdraw')}
                            </GradientButtonStyle>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}