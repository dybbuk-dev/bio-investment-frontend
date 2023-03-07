// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { MyTokenCarousel,  MyTokenList, MyInvestOverview } from '../../sections/@dashboard/my-investment';
import {tokens} from '../../_mock/_tokens';

export default function MyInvestment() {
    const { themeStretch } = useSettings();

    return (
        <Page title="Token Market">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Stack gap = {2}>
                    <MyInvestOverview />
                    <MyTokenCarousel tokens={tokens} />
                    <Divider sx = {{mb:2}}/>
                  
                </Stack>


            </Container>
        </Page>
    )
}