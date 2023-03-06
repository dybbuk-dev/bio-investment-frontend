import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography, Stack, Card, CardContent } from '@mui/material';
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


// ----------------------------------------------------------------------

const CardContentStyle = styled(CardContent)(({theme})=>({
    display:'flex',
    padding:32,
    width:230,
    height:200,
    '&:hover': {
        color:theme.palette.primary.main
    },
    cursor:'pointer'

}));

const ContentStyle = styled('div')(({ theme }) => ({
    
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    minHeight: '100vh',
    flexDirection: 'column',
    padding: theme.spacing(0, 6),
    margin: 'auto',

}));

// ----------------------------------------------------------------------

export default function ChooseRegisterMode() {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();
    const handleRoute = (index)=>{
        if(index === 1){
            navigate('/auth/register-primary');
        }
        if(index === 2){
            navigate('/auth/register-legal');
        }
        if(index === 3){
            navigate('/auth/register-invest');
        }
    }
    return (
        <Page title="Choose signup mode" sx={{ height: 1 }}>
          
                <LogoOnlyLayout />

                <ContentStyle>
                    <Box sx={{ mx: 'auto', mt: 10 }}>

                        <Typography  paragraph sx={{ textAlign: 'center', mb: 8 }} fontSize={32}>
                            Selecione o seu <b>tipo de investidor</b>
                        </Typography>
                        <Stack direction={{xs:'column', sm:'row'}} gap={2} sx={{ mb: 8 }} alignItems={'center'}>
                            <Card onClick={()=>handleRoute(1)}>
                                <CardContentStyle>
                                    <Stack sx={{ flexGrow: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap:2}}>
                                        <Icon icon="mdi:user" width={48} />
                                        <Typography variant={'h6'} sx = {{mt:2}}>
                                            Pessoa física
                                        </Typography>

                                    </Stack>
                                </CardContentStyle>
                            </Card>
                            <Card  onClick={()=>handleRoute(2)}>
                                <CardContentStyle sx={{ display: 'flex', padding: 4 }}>
                                    <Stack sx={{ flexGrow: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap:2}}>
                                        <Icon icon="ri:building-line" width={48} />
                                        <Typography variant={'h6'} sx = {{mt:2}}>
                                        Pessoa jurídica
                                        </Typography>

                                    </Stack>
                                </CardContentStyle>
                            </Card>
                            <Card onClick={()=>handleRoute(3)}>
                                <CardContentStyle sx={{ display: 'flex', padding: 4 }}>
                                    <Stack sx={{ flexGrow: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap:2}}>
                                        <Icon icon="mdi:finance" width={48} />
                                        <Typography variant={'h6'} sx = {{textAlign:'center'}}>
                                        Fundo de investimento 
                                        </Typography>

                                    </Stack>
                                </CardContentStyle>
                            </Card>
                        </Stack>
                        <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                            Já tem uma conta?{' '}
                            <Link variant="subtitle2" to={PATH_AUTH.login} component={RouterLink}>
                                Faça Login
                            </Link>
                        </Typography>
                    </Box>
                </ContentStyle>
            
        </Page>
    );
}
