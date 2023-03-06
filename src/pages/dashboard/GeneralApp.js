// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppAsserts,
  AppPortfolioSidebar,
  AppCurrentPortfolio,
  AppHistory,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="Dashboard">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Stack gap={2}>
              <AppAsserts displayName={user?.displayName} />
              <Stack gap={2} direction={{ md: 'row', sm: 'column', xs:'column' }}>
                <AppHistory />
                <AppCurrentPortfolio />
              </Stack>

            </Stack>


          </Grid>
          <Grid item xs={12} md={4}>
            <AppPortfolioSidebar />

          </Grid>
       
        </Grid>
      </Container>
    </Page>
  );
}
