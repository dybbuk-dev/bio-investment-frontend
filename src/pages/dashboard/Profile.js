import PropTypes from 'prop-types';

import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DesktopWindowsOutlined from '@mui/icons-material/DesktopWindowsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// @mui
import { useTheme } from '@mui/material/styles';

import { Box, Container, FormControlLabel, Grid, List, Radio, Stack, Tab, Tabs } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  PersonalInformation
} from '../../sections/@dashboard/profile';
import useResponsive from '../../hooks/useResponsive';
import Scrollbar from '../../components/Scrollbar';
import { NavListRoot } from '../../components/nav-section/vertical/NavList';
import Apperence from '../../sections/@dashboard/profile/Apperence';
import ChangePassword from '../../sections/@dashboard/profile/ChangePassword';
import OrderHistory from '../../sections/@dashboard/profile/OrderHistory';


// ----------------------------------------------------------------------

export default function Profile() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const { page } = useParams();
  const [value, setValue] = useState(page);
  const isTablet = useResponsive('up', 'md');
  const navigate = useNavigate();

  const ProfileMenus = [
    { value: 'basic', path: '/dashboard/profile/basic', icon: <PersonOutlineOutlinedIcon />, title: 'Basic Information' },
    { value: 'appear', path: '/dashboard/profile/appear', icon: <DesktopWindowsOutlined />, title: 'System Appearence' },
    { value: 'security', path: '/dashboard/profile/security', icon: <VerifiedUserOutlinedIcon />, title: 'Account Security' },
    { value: 'order-history', path: '/dashboard/profile/order-history', icon: <RestoreOutlinedIcon />, title: 'Order History' },
    { value: 'timezone', path: '/dashboard/profile/timezone', icon: <PublicOutlinedIcon />, title: 'Time Zone' },
    { value: 'notification', path: '/dashboard/profile/notification', icon: <NotificationsOutlinedIcon />, title: 'Notification' },
    { value: 'TAC', path: '/dashboard/profile/TAC', icon: <ArticleOutlinedIcon />, title: 'Terms and conditions' },
  ]

  
  return (
    <Page title="Profile">
      <Container maxWidth={themeStretch ? false : 'xl'} sx={{ padding: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} gap={2}>
          <Box sx={{ width: { xs: '100%', sm: '100%', md: '240px' }, background: theme.palette.background.paper }} padding={2} borderRadius={1}>
            {isTablet &&
              <Scrollbar>
                <List>
                  {
                    ProfileMenus.map((profile, index) => (
                      <NavListRoot list={profile} key={index} isCollapse={false} />
                    ))
                  }
                </List>
              </Scrollbar>
            }
            {
              !isTablet &&
              <Tabs scrollButtons="auto"
                onChange={(evt, newValue) => { 
                  setValue(newValue); 
                  navigate(ProfileMenus.filter((m)=>m.value === newValue)[0].path);
                }} value={page} variant="scrollable"
              >
                {
                  ProfileMenus.map((profile, index) => (
                    <Tab  value={profile.value} key={index} label={profile.title} />
                  ))
                }
              </Tabs>
            }
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            {page === "basic" &&
              <PersonalInformation />
            }
            {page === "appear" &&
              <Apperence />
            }
            {page === "security" &&
              <ChangePassword />
            }
            {page === "order-history" &&
              <OrderHistory />
            }
            {page === "notification" &&
              <PersonalInformation />
            }
            
          </Box>
        </Stack>


      </Container>
    </Page>
  );
}


// ----------------------------------------------------------------------

BoxMaskComponent.propTypes = {
  value: PropTypes.string,
};

export function BoxMaskComponent({ value }) {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}
