import { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Accordion, AccordionDetails, AccordionSummary, Button, FormGroup, FormLabel, Grid, Input, OutlinedInput, Stack, Typography, useTheme } from "@mui/material";
import { useForm } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { FormProvider, RHFCheckbox, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from "../../../../components/hook-form";
import useAuth from '../../../../hooks/useAuth';
import SingleInputFile from '../../../../components/upload/SingleInputFile';
import useLocales from '../../../../hooks/useLocales';
import { GradientButtonStyle } from '../../../../components/AppStyledComponent';


export default function BusinessInformation() {
    const { user } = useAuth();
    const [expanded, setExpanded] = useState('panel1');
    const theme = useTheme();

    const { translate } = useLocales();
    const [incorporationDate, setIncorporationDate] = useState(new Date());
    const FormSchema = Yup.object().shape({
        coporateName: Yup.string().required('Fullname is required'),
    });

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const defaultValues = useMemo(() => {
        return {
            coporateName: user?.coporateName || '',
            cnpj: user?.cnpj || '',
            cname: user?.cname || '',
            officeAddress: '',
            officeCEP: '',
            checkedOption1: true,
            checkedOption2: false,
            checkedOption3: false,
            checkedOption4: true,

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
                <Accordion onChange={handleChange("panel1")} expanded={expanded === 'panel1'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                Personal Information
                            </Typography>
                            <Typography>Identification data for legal person registration form.</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* basic */}
                        <Stack gap={1} mb={2}>
                            <RHFUploadAvatar name="avatar" />
                            <Grid container>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Corporate Name')}</FormLabel>
                                        <RHFTextField name="corporateName" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNPJ')}</FormLabel>
                                        <RHFTextField name="cnpj" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNAE')}</FormLabel>
                                        <RHFTextField name="cnae" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Head Office Address')}</FormLabel>
                                        <RHFTextField name="officeAddress" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Head Office CEP')}</FormLabel>
                                        <RHFTextField name="officeCep" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Head Office District')}</FormLabel>
                                        <RHFTextField name="officeCep" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Head Office City')}</FormLabel>
                                        <RHFTextField name="officeCity" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Contact Number')}</FormLabel>
                                        <RHFTextField name="contactNumber" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Email')}</FormLabel>
                                        <RHFTextField name="email" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Revenue For the Last 12 (Twelve) Months')}</FormLabel>
                                        <RHFTextField name="revenue" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Equity Situation')}</FormLabel>
                                        <RHFTextField name="equity" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Date of Incorporation of the Company')}</FormLabel>
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
                                            />)} value={incorporationDate} onChange={(newValue) => setIncorporationDate(newValue)} />
                                        </LocalizationProvider>

                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Corporate Type</FormLabel>
                                        <RHFSelect name="corporationType" size="small">
                                            <option>Select corporation type</option>
                                        </RHFSelect>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <RHFTextField name="email" label="" size="small" />
                                    </FormGroup>
                                </Grid>

                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Attach Photo of Company Incorporation Document or CNPJ Card')}</FormLabel>
                                        <SingleInputFile />
                                        <Typography variant='caption'>Please upload the required file to identify verification of payment (tax) information. Images (JPG/JPEG/PNG) or PDF, max. from 5mb file</Typography>
                                    </FormGroup>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} padding={1}>
                                    <FormGroup>
                                        <RHFCheckbox name="checkedOption1" label={translate('t.I declare that I have the corporate minutes of the administrators (Optional)')} />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} padding={1}>
                                    <FormGroup>
                                        <RHFCheckbox name="checkedOption2" label={translate('t.I declare that I have the corporate minutes of the administrators (Optional)')} />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} padding={1}>
                                    <FormGroup>
                                        <RHFCheckbox name="checkedOption3" label={translate('t.I declare that I have the corporate minutes of the administrators (Optional)')} />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} padding={1}>
                                    <FormGroup>
                                        <RHFCheckbox name="checkedOption4" label={translate('t.I declare that I have the corporate minutes of the administrators (Optional)')} />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion onChange={handleChange("panel2")} expanded={expanded === 'panel2'}>
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
                                <Grid item xs={12} sm={12} md={6}padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Bank')}</FormLabel>
                                        <RHFSelect name="bank" label="" size="small" >
                                            <option>Bank - 1</option>
                                        </RHFSelect>
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6}padding={1}>
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
                <Accordion onChange={handleChange("panel3")} expanded={expanded === 'panel3'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                {translate('t.Beneficiaries')}
                            </Typography>
                            <Typography>{translate('t.Final beneficiaries of the legal person.')}</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>

                        {/* beneficiary */}
                        <Stack gap={1} mb={2}>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Full Name/Corporate Name')}</FormLabel>
                                        <RHFTextField name="corporateName" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6}padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CPF/CNPJ')}</FormLabel>
                                        <RHFTextField name="bankAgency" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Corporate Name")}</FormLabel>
                                        <RHFTextField name="bankAccount" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNPJ')}</FormLabel>
                                        <RHFTextField name="bankNumber" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Participation Percentage (%)')}</FormLabel>
                                        <RHFTextField name="bankNumber" label="" size="small" />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Political Exposure')}</FormLabel>
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