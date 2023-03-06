// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { BuyTokenBanner, BuyTokenCarousel, BuyTokenList } from '../../sections/@dashboard/buy-token';
import {categories} from '../../_mock/_tokens';

export default function BuyToken() {
    const { themeStretch } = useSettings();

    return (
        <Page title="Token Market">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Stack gap = {2}>
                    <BuyTokenBanner />
                    <BuyTokenCarousel categories={categories} />
                    <Divider sx = {{mb:2}}/>
                    <BuyTokenList />
                </Stack>


            </Container>
        </Page>
    )
}