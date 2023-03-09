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
import {TokenProjectDetail, TokenSalesGraph, TradingTokenDetailHeader, TrandingTokenDetailPanel} from '../../sections/@dashboard/trading-token';

import { tokens } from '../../_mock/_tokens';

import useLocales from '../../hooks/useLocales';


export default function TradingTokenDetail() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const { id } = useParams();
    const [token, setToken] = useState(null);
    const { translate } = useLocales();

    useEffect(() => {

        setToken(tokens.filter(t => t.id === id)[0]);

    }, [id])

    return (
        <Page title="Trading Token Detail ">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Stack gap={2}>
                    {/* header */}
                    <TradingTokenDetailHeader token={token} />
                    {/* token information        */}
                    <BuyTokenInformation token={token} />
                    {/* token buy & sell */}
                    <TrandingTokenDetailPanel token = {token}/>
                    {/* graph */}
                    <TokenSalesGraph token = {token} />
                    {/* table */}
                    <TokenProjectDetail token = {token} />
                </Stack>
            </Container>
        </Page>
    )
}