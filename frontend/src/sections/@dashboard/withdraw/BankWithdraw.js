import { Card, CardContent, CardHeader, Divider, FormGroup, FormLabel, Grid, ListItemIcon, ListItemText, MenuItem, Paper, Select, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { fNumber } from "../../../utils/formatNumber";
import Iconify from "../../../components/Iconify";
import useLocales from "../../../hooks/useLocales";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";



export default function BankWithdraw() {
    const { translate } = useLocales();
    const [bank, setBank] = useState('');
    const theme = useTheme();
    const availableBanks = useMemo(() => {
        return [
            {
                label: 'Circle Bank',
                icon: 'mdi:bank-circle-outline'
            },
            {
                label: 'JP Bank',
                icon: 'maki:bank-jp'
            },
           
        ]
    }, []);
   
    const onChangeBank = (evt) => {
        setBank(evt.target.value);
    }
    return (
        <Card>
            <CardHeader title={translate('transfer.withdraw-bank-title')} />
            <CardContent>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack gap={2} padding={2} sx={{ mb: 2 }}>
                            <FormGroup>
                                <FormLabel>{translate('transfer.bank-info')}</FormLabel>
                                <Select size="small" value={bank} onChange={onChangeBank} renderValue={(bank) => {
                                    return (
                                        <MenuItem >
                                            <ListItemIcon >
                                                <Iconify icon={bank.icon} />
                                            </ListItemIcon>
                                            <ListItemText primary={bank.label} />
                                        </MenuItem>
                                    )
                                }}
                                >
                                    {availableBanks.map((bank) => (
                                        <MenuItem value={bank} key={bank.label}>
                                            <ListItemIcon >
                                                <Iconify icon={bank.icon} />

                                            </ListItemIcon>
                                            <ListItemText primary={bank.label} />

                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormGroup>
                           
                            <FormGroup>
                                <FormLabel>{translate('transfer.account-number')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.agency')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.account-owner')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>{translate('transfer.amount')}</FormLabel>
                                <TextField label={''} size={'small'} />
                            </FormGroup>
                            <Typography sx = {{color:'error.main'}}>{translate('transfer.bank-error-holder')}</Typography>
                            <Typography>{translate('transfer.not-yet')}
                            <Link to={'/profile/TAC'}>click here</Link>
                            </Typography>
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