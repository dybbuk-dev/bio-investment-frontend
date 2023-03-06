import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  collapsed: PropTypes.bool,
};

export default function Logo({ disabledLink = false, sx, collapsed = false }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: collapsed ? 40 : 120, height: 40, ...sx }} alignItems={'center'} display={'flex'} gap={1} justifyContent={collapsed?'center':'flex-start'}>
      <img src={collapsed ? '/logo/logo_collapse.png' : '/logo/logo_expand.png'} alt="logo" />
      {!collapsed &&
        <Typography  variant='h6' color={theme.palette.text.primary} sx = {{mt:'1px'}}>INVESTMENT</Typography>
      }
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/" >{logo}</RouterLink>;
}
