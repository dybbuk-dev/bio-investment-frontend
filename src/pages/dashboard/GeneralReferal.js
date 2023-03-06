// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  HowItWorks,
  InviteBanner, InviteHelp, InviteTypes,

} from '../../sections/@dashboard/general/invite';
import CopyClipboard from '../../components/CopyClipboard';

// ----------------------------------------------------------------------

const inviteModes = [
  { title: '1 (one) Indication', price: 3000, action: 'Rescued', enabled: false, },
  { title: '5 (five) Indications', price: 10000, action: 'Rescued', enabled: true, },
  { title: '10 (ten) Indications', price: 50000, action: 'Rescued', enabled: false, },
  { title: '20 (twenty) Indications', price: 100000, action: 'Rescued', enabled: false, },
];

export default function GeneralReferal() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="Referal Link">
      <Container maxWidth={themeStretch ? false : 'xxl'}>
        <Stack gap={2} padding={2} sx = {{mb:2}}>
          <InviteBanner />
          <HowItWorks />
          <InviteHelp />
        </Stack>
        <Stack direction="row" alignItems={'center'} justifyContent={'center'}>
          <Card sx = {{width:{xs:'90%', sm:'60%', md:'50%'}, mt:2}}>
            <CardContent sx = {{textAlign:'center'}}>
              <Typography variant="h5">This is your referal link</Typography>
              <Box padding={2} sx = {{width:'100%'}}>
                <CopyClipboard color="text.secondary" iconColor='' sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { background:theme.palette.mode==='light'?'#FAFAFAad':theme.palette.grey[900] },
                  },
                  
                }} />
              </Box>

            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}
