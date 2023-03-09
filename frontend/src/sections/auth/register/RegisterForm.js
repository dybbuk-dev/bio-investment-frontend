import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFCheckbox, RHFTextField } from '../../../components/hook-form';
import useLocales from '../../../hooks/useLocales';


// ----------------------------------------------------------------------

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function RegisterForm({ mode }) {
  const { translate } = useLocales();
  const { register } = useAuth();
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const Register1Schema = Yup.object().shape({
    fullname: Yup.string().required('Name field is required'),
    cpf: Yup.string().required('CPF field is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    agree: Yup.boolean().isTrue().required('You should agree terms & condition, please check')
  });
  const Register2Schema = Yup.object().shape({
    reason: Yup.string().required('Reason Social field is required'),
    phone: Yup.string().required('Phone number field is required').matches(phoneRegExp, 'Phone number is not valid'),
    cnpj: Yup.string().required('CNPJ field is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    agree: Yup.boolean().isTrue().required('You should agree terms & condition, please check')
  });
  const defaultValues = {
    fullname: '',
    email: '',
    cpf: '',
    password: '',
    agree: false,
    cnpj:'',
    phone:'',
    reason:''

  };

  const methods = useForm({
    resolver: yupResolver(mode === 1 && Register1Schema || Register2Schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    navigate('/auth/agree-investment');
    
    // try {
    //   await register(data);
    // } catch (error) {
    //   console.error(error);
    //   reset();
    //   if (isMountedRef.current) {
    //     setError('afterSubmit', error);
    //   }
    // }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} width={'100%'}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        {mode === 1 &&
          <RHFTextField sx={{ flexGrow: 1 }} name="fullname" label={translate('words.fullname')} />
        }
        {mode >= 2 &&
          <RHFTextField sx={{ flexGrow: 1 }} name="reason" label={translate('register.social')} />
        }
        <RHFTextField sx={{ flexGrow: 1 }} name="email" label={translate('words.email')} />
        {mode === 1 &&
          <RHFTextField sx={{ flexGrow: 1 }} name="cpf" label={translate('words.cpf')} />
        }
        {mode >= 2 && <>
          <RHFTextField sx={{ flexGrow: 1 }} name="phone" label={translate('words.phone')} />
          <RHFTextField sx={{ flexGrow: 1 }} name="cnpj" label={translate('words.cnpj')} />
        </>
        }

        <RHFTextField sx={{ flexGrow: 1 }}
          name="password"
          label={translate('words.password')}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFCheckbox name="agree" label={translate('register.agree-terms')} />
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          {translate('words.continue')}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
