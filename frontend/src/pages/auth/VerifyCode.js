import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import { VerifyCodeForm } from '../../sections/auth/verify-code';
import useResponsive from '../../hooks/useResponsive';
import AuthImageList from './AuthImageList';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 430,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  padding: theme.spacing(12, 6),
  margin: 'auto',
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Verify" sx={{ height: 1 }}>
      <RootStyle>
        <LogoOnlyLayout />

        <ContentStyle>
          <Box sx={{ maxWidth: 420, mx: 'auto' }}>
            <Button
              size="small"
              component={RouterLink}
              to={PATH_AUTH.login}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />}
              sx={{ mb: 3 }}
            >
              Back
            </Button>

            <Typography variant="h3" paragraph>
              Please check your email!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify
              your email.
            </Typography>

            <Box sx={{ mt: 5, mb: 3 }}>
              <VerifyCodeForm />
            </Box>

            <Typography variant="body2" align="center">
              Don’t have a code? &nbsp;
              <Link variant="subtitle2" underline="none" onClick={() => {}}>
                Resend code
              </Link>
            </Typography>
          </Box>
        </ContentStyle>
        {mdUp && <AuthImageList />}
      </RootStyle>
    </Page>
  );
}
