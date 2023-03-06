import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @mui
import { Tooltip, TextField, IconButton, InputAdornment, useTheme } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

CopyClipboard.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  iconColor:PropTypes.string,
};

export default function CopyClipboard({ value, color = '', iconColor='', ...other }) {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const [state, setState] = useState({
    value,
    copied: false,
  });

  const handleChange = (event) => {
    setState({ value: event.target.value, copied: false });
  };

  const onCopy = () => {
    setState({ ...state, copied: true });
    if (state.value) {
      enqueueSnackbar('Copied!');
    }
  };

  return (
    <TextField
      fullWidth
      value={state.value}
      onChange={handleChange}

      InputProps={{

        sx: {
          color: color === "" ? theme.palette.text.primary : color
        },
        endAdornment: (
          <InputAdornment position="end">
            <CopyToClipboard text={state.value} onCopy={onCopy}>
              <Tooltip title="Copy">
                <IconButton>
                  <Iconify icon={'eva:copy-fill'} width={24} height={24} color={iconColor !== '' ? iconColor : theme.palette.text.primary} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
}
