import { Button, Card, CardActionArea, CardContent, CardHeader, Divider, FormControlLabel, RadioGroup, Stack, useTheme } from "@mui/material";
import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useSettings from "../../../hooks/useSettings";
import useLocales from "../../../hooks/useLocales";
import { BoxMaskComponent } from "../../../pages/dashboard/Profile";
import Iconify from "../../../components/Iconify";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import useAuth from "../../../hooks/useAuth";



export default function ChangePassword() {
    const { user, isAuthenticated } = useAuth();
    const { translate } = useLocales();
    const { themeMode, onChangeMode } = useSettings();
    const theme = useTheme();
    const SecurityScheme = Yup.object().shape({
        repassword: Yup.string().required('Password is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        password: '',
        repassword: '',
    };

    const methods = useForm({
        resolver: yupResolver(SecurityScheme),
        defaultValues,

    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = (data) => {

    }
    return (
        <Stack >
            <Card>
                <CardHeader title={translate('profile.security')} subheader={translate('profile.security-desc')} />
                <CardContent>

                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={2}>
                            <Stack gap={3} mb = {2} sx = {{maxWidth:400}}>
                                <RHFTextField name={'password'} type="password" label = {translate('profile.current-pwd')} />
                                <RHFTextField name={'newPassword'} type="password" label = {translate('profile.new-pwd')} />
                                <RHFTextField name={'rePassword'} type="password" label = {translate('profile.re-pwd')} />
                            </Stack>
                            <Divider sx={{ mb: 2,  }} />
                            <Stack direction="row" gap={2}>
                                <Button sx={{ width: 200 }} variant={'outlined'}>{translate('words.cancle')}</Button>
                                <GradientButtonStyle sx={{ width: 200 }} >{translate('words.save')}</GradientButtonStyle>
                            </Stack>
                        </Stack>
                    </FormProvider>


                </CardContent>
            </Card>
        </Stack>
    )
}