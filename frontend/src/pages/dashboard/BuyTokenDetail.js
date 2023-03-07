import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui

import { useTheme } from '@mui/material/styles';

import {  Button,  Container,  MenuItem, Select,  Stack, Typography } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {BuyTokenFaq, BuyTokenHeader, BuyTokenInformation, BuyTokenSimulator } from '../../sections/@dashboard/buy-token';
import { tokens } from '../../_mock/_tokens';

import useLocales from '../../hooks/useLocales';


export default function BuyTokenDetail() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const { id } = useParams();
    const [token, setToken] = useState(null);
    const { translate } = useLocales();

    useEffect(() => {

        setToken(tokens.filter(t => t.id === id)[0]);

    }, [id])

    return (
        <Page title="Token Detail ">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Stack gap={2}>
                    {/* header */}
                    <BuyTokenHeader token={token} />
                    {/* token information        */}
                    <BuyTokenInformation token={token} />
                    {/* token simulation */}
                    <BuyTokenSimulator token = {token}/>
                    {/* token options */}
                    <Stack mb={2}>
                        <Typography variant='h5' sx={{ textAlign: 'center', mb: 2 }} >
                            {translate('market.project-desc')}
                        </Typography>
                        {/* desktop */}
                        <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, mb: 2 }} direction="row" justifyContent={'space-between'} gap={2}>
                            <Button variant='contained' sx={{ flexGrow: 1 }}>{translate('market.about-project')}</Button>
                            <Button variant='outlined' sx={{ flexGrow: 1 }}>{translate('market.about-token')}</Button>
                            <Button variant='outlined' sx={{ flexGrow: 1 }}>{translate('market.about-issuer')}</Button>
                            <Button variant='outlined' sx={{ flexGrow: 1 }}>{translate('market.differentials')}</Button>
                        </Stack>
                        {/* mobile */}
                        <Stack sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                            <Select >
                                <MenuItem value={'project'}>{translate('market.about-project')}</MenuItem>
                                <MenuItem value={'token'}>{translate('market.about-token')}</MenuItem>
                                <MenuItem value={'issuer'}>{translate('market.about-issuer')}</MenuItem>
                                <MenuItem value={'differentials'}>{translate('market.differentials')}</MenuItem>
                            </Select>
                        </Stack>

                    </Stack>
                    {/* token detail */}
                    <Stack mb={2}>
                        'TOKEN - DETAILS'
                    </Stack>
                    {/* token faqs */}
                    <BuyTokenFaq />
                </Stack>
            </Container>
        </Page>
    )
}