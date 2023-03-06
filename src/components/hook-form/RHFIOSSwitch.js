import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';
import { IOSSwitchStyled } from '../AppStyledComponent';

// ----------------------------------------------------------------------

RHFIOSSwitch.propTypes = {
  name: PropTypes.string,
};

export default function RHFIOSSwitch({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller name={name} control={control} render={({ field }) => <IOSSwitchStyled {...field} checked={field.value} />} />
      }
      {...other}
    />
  );
}
