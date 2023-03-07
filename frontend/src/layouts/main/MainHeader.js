import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
//
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',

    color: theme.palette.primary.dark

  },
}));

// ----------------------------------------------------------------------

const Routers = [
  {
    path: '/',
    name: 'home',
    label: 'Home',
  },
  {
    path: '/about-us',
    name: 'about',
    label: 'About US',
  },
  {
    path: '/contact-us',
    name: 'contact',
    label: 'Contact US',
  },
  {
    path: '/faqs',
    name: 'faq',
    label: 'FAQs',
  }
]

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const { user, isAuthenticated } = useAuth();

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          <Box sx={{ flexGrow: 1 }} />
          {isDesktop && Routers.map((router) => (
            <LinkStyle
              key={router.name}
              href={router.path}
              rel="noopener"
              sx={{
                color: pathname === router.path ? theme.palette.primary.dark : 'text.primary',
              }}
            >
              {router.label}
            </LinkStyle>
          ))}
          {isDesktop && !isAuthenticated &&
            <LinkStyle
              href="/auth/login"
              rel="noopener"
              sx={{
                color: pathname ==='/auth/login'? theme.palette.primary.dark : 'text.primary',
              }}
            >
              Login
            </LinkStyle>
          }
          {isDesktop && isAuthenticated &&
            <LinkStyle
              href="/dashboard"
              rel="noopener"
              sx={{
                color: pathname ==='/dashboard'? theme.palette.primary.dark : 'text.primary',
              }}
            >
              Dashboard
            </LinkStyle>
          }
          {!isDesktop && <MenuMobile isOffset navConfig={Routers} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
