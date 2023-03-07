import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography, Stack, Card, CardContent } from '@mui/material';
 
// routes
import { PATH_AUTH } from '../../../routes/paths';

import useLocales from '../../../hooks/useLocales';


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

export default function ChooseWithdrawMode({onCrypto = ()=>{}, onBank = ()=>{}}) {
    const {translate} = useLocales();
     
    return (
        <ContentStyle>
            <Box sx={{ mx: 'auto', mt: 10 }}>

                <Typography paragraph sx={{ textAlign: 'center', mb: 8 }} fontSize={24}>
                    {translate('words.choose')}<b>{translate('transfer.withdraw-mode')}</b>
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ mb: 8 }} alignItems={'center'}>
                    <Card onClick={onCrypto}>
                        <CardContentStyle>
                            <Stack sx={{ flexGrow: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                <Icon icon="mdi:bitcoin" width={48} />
                                <Typography variant={'h6'} sx={{ mt: 2 }}>
                                    {translate('words.crypto')}
                                </Typography>

                            </Stack>
                        </CardContentStyle>
                    </Card>
                    <Card onClick={onBank}>
                        <CardContentStyle sx={{ display: 'flex', padding: 4 }}>
                            <Stack sx={{ flexGrow: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                <Icon icon="mdi:bank-circle" width={48} />
                                <Typography variant={'h6'} sx={{ mt: 2 }}>
                                    {translate('words.bank')}
                                </Typography>

                            </Stack>
                        </CardContentStyle>
                    </Card>
                  
                </Stack>
                <Typography variant="body1" sx={{ mt: 3, textAlign: 'center' }}>
                    {translate('transfer.no-withdraw-title')}&nbsp;&nbsp;
                    <Link variant="subtitle1" to={PATH_AUTH.login} component={RouterLink}>
                        {translate('words.deposit')}
                    </Link>
                </Typography>
            </Box>
        </ContentStyle>

    );
}
