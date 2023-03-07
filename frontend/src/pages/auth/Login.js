import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography, ImageList, ImageListItem } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';
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

const itemData = [
  {
    img: '/tokens/token-1.png',
    title: 'Bed',
  },
  {
    img: '/tokens/token-2.png',
    title: 'Books',
  },
  {
    img: '/tokens/token-3.png',
    title: 'Sink',
  },
  {
    img: '/tokens/token-4.png',
    title: 'Kitchen',
  },
  {
    img: '/tokens/token-5.png',
    title: 'Blinds',
  },
  {
    img: '/tokens/token-6.png',
    title: 'Chairs',
  },
  {
    img: '/tokens/token-7.png',
    title: 'Laptop',
  },
  {
    img: '/tokens/token-8.png',
    title: 'Doors',
  },
  {
    img: '/tokens/token-1.png',
    title: 'Doors',
  },
  {
    img: '/tokens/token-2.png',
    title: 'Doors',
  },
  {
    img: '/tokens/token-3.png',
    title: 'Doors',
  },

];

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <Container>
        <RootStyle>
          <ContentStyle>
            <Stack sx={{ mb: 5 }} gap={4}>
              <Logo />
              <Box sx={{ flexGrow: 1 }}>
                <Icon icon="emojione:waving-hand" />
                <Typography variant="h4" gutterBottom>
                  Bem vindo
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Sua plataforma de investimentos em ativos ambientais</Typography>
              </Box>
            </Stack>

            <LoginForm />


            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Não possui sua conta?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Cadastre-se
              </Link>
            </Typography>

          </ContentStyle>
          {mdUp &&
            <AuthImageList />
          }
        </RootStyle>
      </Container>
    </Page>
  );
}
