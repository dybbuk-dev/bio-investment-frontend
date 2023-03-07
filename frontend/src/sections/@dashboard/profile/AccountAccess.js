
import { Box, Button, Card, CardContent, CardHeader, Divider, FormGroup, FormLabel, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import * as Yup from 'yup';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Scrollbar from "../../../components/Scrollbar";
import useLocales from "../../../hooks/useLocales";
import { FormProvider, RHFSelect, RHFTextField } from "../../../components/hook-form";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";

export default function AccountAccess() {
    const { translate } = useLocales();
    const FormScheme = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        fullname: Yup.string().required('Fullname is required'),
        cpf: Yup.string().required('CPF/CNPJ is required'),
        phone: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        email: '',
        fullname: '',
        cpf: '',
        phone: '',
        political: ''
    };

    const methods = useForm({
        resolver: yupResolver(FormScheme),
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
        <Stack>
            <Card>
                <FormProvider methods={methods} >
                    <CardHeader title={translate('profile.term')} subheader={translate('profile.term-desc')} />
                    <CardContent>
                        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} mb={2}>
                            <FormGroup sx={{ flexGrow: 1 }}>
                                <FormLabel>{translate('profile.fullname')}</FormLabel>
                                <RHFTextField name={'fullname'} label="" />
                            </FormGroup>
                            <FormGroup sx={{ flexGrow: 1 }}>
                                <FormLabel>{translate('profile.cpf')}</FormLabel>
                                <RHFTextField name={'cpf'} label="" />
                            </FormGroup>

                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} mb={2}>
                            <FormGroup sx={{ flexGrow: 1 }} >
                                <FormLabel>{translate('profile.email')}</FormLabel>
                                <RHFTextField name={'email'} label="" />
                            </FormGroup>
                            <FormGroup sx={{ flexGrow: 1 }}>
                                <FormLabel>{translate('profile.phone')}</FormLabel>
                                <RHFTextField name={'phone'} label="" />
                            </FormGroup>

                            <FormGroup sx={{ flexGrow: 1 }}>
                                <FormLabel>{translate('profile.fullname')}</FormLabel>
                                <RHFSelect name={'political'}  >
                                    <option value={""}>Select Political</option>
                                </RHFSelect>
                            </FormGroup>

                        </Stack>
                        <Stack alignItems={'center'} mb={6}>
                            <Button>+ {translate('profile.add-new-user')}</Button>
                        </Stack>
                        <Stack>
                            <Divider sx={{ mb: 2, }} />
                            <Stack direction="row" gap={2} justifyContent="end">
                                <Button sx = {{width:160}} variant={'outlined'}>{translate('words.cancle')}</Button>
                                <GradientButtonStyle  sx = {{width:160}}>{translate('words.save')}</GradientButtonStyle>
                            </Stack>
                        </Stack>
                    </CardContent>
                </FormProvider>
            </Card>
        </Stack>
    )
}