import { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Accordion, AccordionDetails, AccordionSummary, Button, FormGroup, FormLabel, Grid, Input, OutlinedInput, Stack, Typography, useTheme } from "@mui/material";
import { useForm } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from "../../../../components/hook-form";
import useAuth from '../../../../hooks/useAuth';
import SingleInputFile from '../../../../components/upload/SingleInputFile';
import useLocales from '../../../../hooks/useLocales';
import { GradientButtonStyle } from '../../../../components/AppStyledComponent';


export default function BasicInformation() {
    const { user } = useAuth();
    const [expanded, setExpanded] = useState('panel1');
    const theme = useTheme();

    const { translate } = useLocales();
    const [birthday, setBirthday] = useState(new Date());
    const FormSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
    });

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const defaultValues = useMemo(() => {
        return {
            fullname: user?.fullname || '',
            email: user?.email || '',
            avatar: user?.avatar || '',
            cpf: '',
            phone: '',

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
        <Stack spacing={2}>
            <FormProvider methods={methods}>
                <Accordion onChange={ handleChange("panel1")} expanded={expanded === 'panel1'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                Personal Information
                            </Typography>
                            <Typography>You can add or update your personal information</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* basic */}
                        <Stack gap={1} mb={2}>
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
                                        <FormLabel>Gender</FormLabel>
                                        <RHFSelect name="gender" size="small">
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
                                        <RHFSelect name="documentType" size="small">
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
                                        <RHFSelect name="political" size="small">
                                            <option>Select document type</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Attach File of Document</FormLabel>
                                        <SingleInputFile />
                                        <Typography variant='caption'>Please upload the required file to identify verification of payment (tax) information. Images (JPG/JPEG/PNG) or PDF, max. from 5mb file</Typography>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Selfie Holding Document Next to Face</FormLabel>
                                        <SingleInputFile />
                                        <Typography variant='caption'>Please upload the required file to identify verification of payment (tax) information. Images (JPG/JPEG/PNG) or PDF, max. from 5mb file</Typography>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Mother’s Name</FormLabel>
                                        <RHFTextField name="mother" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Father’s Name (Optional)</FormLabel>
                                        <RHFTextField name="father" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Nationality</FormLabel>
                                        <RHFSelect name="national" size="small">
                                            <option>select your nationality</option>

                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Naturality</FormLabel>
                                        <RHFSelect name="natural" size="small">
                                            <option>Yes</option>
                                            <option>No</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Marital Status</FormLabel>
                                        <RHFSelect name="marry" size="small">
                                            <option>Before</option>
                                            <option>Yes</option>
                                            <option>Alone</option>

                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>
                        {/* address */}
                        <Stack gap={1} mb={2}>
                            <Typography variant='h6'>{translate('t.address')}</Typography>
                            <Typography variant="caption">{translate('t.Record information related to your residence.')}</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CEP')}</FormLabel>
                                        <RHFTextField name="cep" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.UF')}</FormLabel>
                                        <RHFTextField name="uf" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.City')}</FormLabel>
                                        <RHFTextField name="city" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Public Place')}</FormLabel>
                                        <RHFTextField name="place" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.District')}</FormLabel>
                                        <RHFTextField name="district" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Number')}</FormLabel>
                                        <RHFTextField name="number" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
                <Accordion onChange={ handleChange("panel2")} expanded={expanded === 'panel2'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                {translate('t.Additional Information')}
                            </Typography>
                            <Typography>{translate('t.Income statement and bank details')}</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>

                        {/* address */}
                        <Stack gap={1} mb={2}>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Professional Occupation')}</FormLabel>
                                        <RHFTextField name="occupation" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Employer CNPJ (Optional)')}</FormLabel>
                                        <RHFTextField name="cnpj" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Employer's Corporate Name (Optional)")}</FormLabel>
                                        <RHFTextField name="ecn" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Annual Income')}</FormLabel>
                                        <RHFTextField name="annualIncome" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Book Value')}</FormLabel>
                                        <RHFTextField name="bookValue" label="" size="small" />
                                    </FormGroup>
                                </Grid>

                            </Grid>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
                <Accordion onChange={ handleChange("panel3")} expanded={expanded === 'panel3'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                {translate('t.Bank Data')}
                            </Typography>
                            <Typography>{translate('t.Enter your bank details')}</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>

                        {/* address */}
                        <Stack gap={1} mb={2}>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={3} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Bank')}</FormLabel>
                                        <RHFSelect name="bank" label="" size="small" >
                                            <option>Bank - 1</option>
                                        </RHFSelect>
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Agency')}</FormLabel>
                                        <RHFTextField name="bankAgency" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Current Account")}</FormLabel>
                                        <RHFTextField name="bankAccount" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Digit')}</FormLabel>
                                        <RHFTextField name="bankNumber" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                            </Grid>
                        </Stack>

                    </AccordionDetails>
                </Accordion>

            </FormProvider>
            <Stack direction={'row'} justifyContent={'space-between'} gap={1}>
                <Button variant='outlined' sx={{ flexGrow: 1, backgroundColor: 'paper' }}>{translate('words.cancle')}</Button>
                <GradientButtonStyle sx={{ flexGrow: 1 }} >{translate('words.save')}</GradientButtonStyle>
            </Stack>
        </Stack>
    )
}