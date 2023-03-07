import { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Accordion, AccordionDetails, AccordionSummary, FormGroup, FormLabel, Grid, Input, OutlinedInput, Stack, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from "../../../../components/hook-form";
import useAuth from '../../../../hooks/useAuth';


export default function BasicInformation() {
    const { user } = useAuth();
    const [birthday, setBirthday] = useState(new Date());
    const FormSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
    });

    const defaultValues = useMemo(() => {
        return {
            fullname: user?.fullname || '',
            email: user?.email || '',
            avatar: user?.avatar || '',
            cpf: '',
            phone:'',
            
        }
    }, [user]);

    const methods = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <Stack>
            <FormProvider methods={methods}>
                <Accordion expanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                Personal Information
                            </Typography>
                            <Typography>You can add or update your personal information</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack gap={1}>
                            <RHFUploadAvatar name="avatar" />
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>FullName</FormLabel>
                                        <RHFTextField name="fullname" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>CPF</FormLabel>
                                        <RHFTextField name="cpf" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Birthday</FormLabel>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker renderInput={(props) => (<OutlinedInput
                                                size='small'
                                                type="text"
                                                inputRef={props.inputRef}
                                                inputProps={props.inputProps}
                                                value={props.value}
                                                onClick={props.onClick}
                                                onChange={props.onChange}
                                                endAdornment={props.InputProps?.endAdornment}
                                            />)} value={birthday} onChange={(newValue) => setBirthday(newValue)} />
                                        </LocalizationProvider>

                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>CPF</FormLabel>
                                        <RHFSelect name = "gender" size = "small">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Phone</FormLabel>
                                        <RHFTextField name="phone" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <RHFTextField name="email" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Document Type</FormLabel>
                                        <RHFSelect name = "documentType" size= "small">
                                            <option>Select document type</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Document Number</FormLabel>
                                        <RHFTextField name="documentNumber" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Political Exposure</FormLabel>
                                        <RHFSelect name = "political" size= "small">
                                            <option>Select document type</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </FormProvider>
        </Stack>
    )
}