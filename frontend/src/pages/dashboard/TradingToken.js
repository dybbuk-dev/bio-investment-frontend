// @mui
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { TradingBanner, TradingTokenList, TradingTokenSidebar } from '../../sections/@dashboard/trading-token';
import useLocales from '../../hooks/useLocales';
import SearchFilter from '../../components/app/SearchFilter';
import Iconify from '../../components/Iconify';
import { tokens } from '../../_mock/_tokens';
import TradingTokenCard from '../../components/app/TradingTokenCard';


export default function TradingTokens() {
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    const navigate = useNavigate();
    const onCardAction = (token) => {
        navigate(`/dashboard/trading-token/${token.id}`);
    }
    return (
        <Page title="Token Market">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Stack gap={2} mb={2}>
                    <TradingBanner />

                    <TradingTokenList />
                </Stack>
                <Grid container >
                    <Grid item xs={12} sm={12} md={9} paddingRight={{ md: 2 }}>
                        <Card sx={{ flexGrow: 1, mb: 2 }} >
                            <CardHeader title={translate('trading.title')} subheader={translate('trading.subtitle')} />
                            <CardContent>
                                <Stack direction={'row'} gap={1}>
                                    <Stack flexGrow={1} gap={2}>
                                        {/* desktop */}
                                        <Stack sx={{ display: { xs: 'none', sm: 'flex' }, mb: 2 }} direction="row" justifyContent={'space-between'} gap={2}>
                                            <Button variant='contained' sx={{ flexGrow: 1 }}>{translate('words.ptp-token')}</Button>
                                            <Button variant='outlined' sx={{ flexGrow: 1 }}>{translate('words.equi-token')}</Button>
                                            <Button variant='outlined' sx={{ flexGrow: 1 }}>{translate('words.utl-token')}</Button>

                                        </Stack>
                                        {/* mobile */}
                                        <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
                                            <Select >
                                                <MenuItem value={'project'}>{translate('words.ptp-token')}</MenuItem>
                                                <MenuItem value={'token'}>{translate('words.equi-token')}</MenuItem>
                                                <MenuItem value={'issuer'}>{translate('words.utl-issuer')}</MenuItem>

                                            </Select>
                                        </Stack>
                                        {/* filter */}
                                        <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent={'space-between'}>
                                            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                                                <Button sx={{ height: 56 }} variant='outlined' >{translate('words.all')}</Button>
                                                <SearchFilter variants={[{ label: 'option 1', id: 1 }, { label: 'option 2', id: 2 }]} />
                                            </Stack>
                                            <Stack flexGrow={1}>
                                                <TextField InputProps={{
                                                    startAdornment: (<InputAdornment position="start" >
                                                        <Iconify icon="ic:sharp-search" sx={{ width: 24, height: 24 }} />
                                                    </InputAdornment>
                                                    )
                                                }}

                                                />
                                            </Stack>
                                        </Stack>
                                        <Divider />
                                        <Grid container>
                                            {tokens.slice(0, 6).map((token, index) => (
                                                <Grid item xs={12} sm={6} md={4} key={index}>
                                                    <Box padding={1}>
                                                        <TradingTokenCard token={token} onCardAction={() => onCardAction(token)} />

                                                    </Box>

                                                </Grid>
                                            ))}

                                        </Grid>
                                    </Stack>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} sx={{ mb: 2 }}>
                        <Stack>
                            <TradingTokenSidebar />
                        </Stack>

                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}