import { useState } from 'react';
import { Icon } from '@iconify/react';

// @mui
import { useTheme } from '@mui/material/styles';

import { MenuItem, Stack, Button, Typography } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
// components
import Image from '../../../components/Image';
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { allLang, currentLang, onChangeLang } = useLocales();
  const theme = useTheme();
  const [open, setOpen] = useState(null);
  const isTablet = useResponsive("up", "sm");
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {!isTablet &&
        <IconButtonAnimate
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            ...(open && { bgcolor: 'action.selected' }),
          }}
        >
          <Image disabledEffect src={currentLang.icon} alt={currentLang.label} />
        </IconButtonAnimate>
      }
      {isTablet &&
        <Button sx={{ display: 'flex', gap: 1 }} onClick = {handleOpen}>
          <Image disabledEffect src={currentLang.icon} alt={currentLang.label} />
          <Typography color={theme.palette.text.primary}>
            {currentLang.label}
          </Typography>
          <Icon icon = "material-symbols:keyboard-arrow-down-rounded"  color={theme.palette.text.primary}/>
        </Button>
      }
      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.75}>
          {allLang.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => {
                onChangeLang(option.value);
                handleClose();
              }}
            >
              <Image disabledEffect alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
