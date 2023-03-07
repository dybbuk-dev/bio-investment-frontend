import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography, Stack, Card, CardContent, IconButton } from '@mui/material';
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
import Image from '../../components/Image';
import useLocales from '../../hooks/useLocales';
import { RegisterForm } from '../../sections/auth/register';

// ----------------------------------------------------------------------

const CardContentStyle = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    padding: 32,
    width: 230,
    height: 200,
    '&:hover': {
        color: theme.palette.primary.main
    },
    cursor: 'pointer'

}));

const ContentStyle = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
    padding: theme.spacing(0, 6),
    margin: 'auto',

}));

// ----------------------------------------------------------------------

export default function PersonalMode() {
    const mdUp = useResponsive('up', 'md');
    const { translate } = useLocales();
    return (
        <Page title="Physical person" sx={{ height: 1 }}>

       
            <Stack sx={{ width: '100%', height: '100%' }} direction="row">
                <Box sx={{ height: '100vh', overflow: 'hidden', display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <Image src="/images/register-bg.png" sx={{ height: '100%' }} />
                </Box>

                <Stack gap={4} padding={4} flexGrow={1} sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
                    <Stack direction="row" gap={1} alignItems={'center'} mt={{ xs: 8, sm: 8, md: 2 }}>
                        <IconButton>
                            <Icon icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography variant='subtitle2'>{translate('words.back-route')}</Typography>
                    </Stack>
                    <Stack  justifyContent={'center'} height={'100%'} alignItems="center">


                        <Stack gap={2} padding={2} width={{ xs: 350, sm: 400, md: 500 }} >
                            <Typography variant='h5'>{translate('register.natural-mode-title')}</Typography>
                            <Typography variant='body2'>{translate('register.natural-mode-description')}</Typography>
                        </Stack>
                        <Stack padding={2} width={{ xs: 350, sm: 400, md: 500 }} >

                            <RegisterForm mode={1} />
                            <Stack alignItems={'center'} justifyContent={'center'}>
                                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                                    {translate('register.already-user')}
                                    <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                                        {translate('words.login')}
                                    </Link>
                                </Typography>
                            </Stack>


                        </Stack>
                       
                    </Stack>


                </Stack>


            </Stack>

        </Page>
    );
}
