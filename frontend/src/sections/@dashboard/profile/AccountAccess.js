
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, FormGroup, FormLabel, IconButton, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import * as Yup from 'yup';
import { Icon } from "@iconify/react";
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Scrollbar from "../../../components/Scrollbar";
import useLocales from "../../../hooks/useLocales";
import { FormProvider, RHFSelect, RHFTextField } from "../../../components/hook-form";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";


const users = [
    {
        avatar: '/images/avatar.png',
        fullname: 'John Doe',
        email: 'johndoe@123.com',
        permission: 'Full',
    },
    {
        avatar: '/images/avatar.png',
        fullname: 'John Doe',
        email: 'johndoe@123.com',
        permission: 'Parcial',
    }
]
export default function AccountAccess() {
    const { translate } = useLocales();
    const [mode, setMode] = useState('view');
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
                <CardHeader title={translate('profile.access')} subheader={translate('profile.access-desc')} />
                <CardContent>
                    {mode === 'view' &&
                        <Stack gap={2}>
                            {users.map((user, index) => (
                                <React.Fragment key={index}>
                                    <Stack direction={'row'} gap={2} justifyContent={'space-between'} >
                                        <Stack direction={'row'} gap={2}>
                                            <Avatar src={user?.avatar} />
                                            <Stack>
                                                <Typography variant="subtitle1">{user?.fullname}</Typography>
                                                <Typography variant="body2">{user?.email}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack direction={'row'} gap={2}>
                                            <Stack>
                                                <Typography >Permission</Typography>
                                                <Stack direction="row" alignItems={'center'}>
                                                    <Icon icon="ant-design:rise-outlined" />
                                                    <Typography>{user?.permission}</Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack>
                                                <IconButton>
                                                    <Icon icon="material-symbols:edit-sharp" />
                                                </IconButton>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                    <Divider />
                                </React.Fragment>
                            ))}
                            <Stack alignItems={'center'} mb={6}>
                                <Button onClick={()=>setMode('edit')}>+ {translate('profile.add-new-user')}</Button>
                            </Stack>
                        </Stack>
                    }
                    {mode === 'edit' &&
                        <FormProvider methods={methods} >

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

                            <Stack>
                                <Divider sx={{ mb: 2, }} />
                                <Stack direction="row" gap={2} justifyContent="end">
                                    <Button onClick={()=>setMode('view')} sx={{ width: 160 }} variant={'outlined'}>{translate('words.cancle')}</Button>
                                    <GradientButtonStyle sx={{ width: 160 }}>{translate('words.save')}</GradientButtonStyle>
                                </Stack>
                            </Stack>

                        </FormProvider>
                    }
                </CardContent>
            </Card>
        </Stack>
    )
}