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


export default function InvestorInformation() {
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
                <Accordion onChange={handleChange("panel1")} expanded={expanded === 'panel1'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                Personal Information
                            </Typography>
                            <Typography>Registration form of investment funds.</Typography>
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
                                        <FormLabel>{translate('t.Fund Formation Date (Opening)')}</FormLabel>
                                        <RHFTextField name="fundFormationDate" label="" size="small" />
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


                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Attach file of the investment fund constitution document')}</FormLabel>
                                        <SingleInputFile />
                                        <Typography variant='caption'>Please upload the required file to identify verification of payment (tax) information. Images (JPG/JPEG/PNG) or PDF, max. from 5mb file</Typography>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Attach file of CNPJ card')}</FormLabel>
                                        <SingleInputFile />
                                        <Typography variant='caption'>Please upload the required file to identify verification of payment (tax) information. Images (JPG/JPEG/PNG) or PDF, max. from 5mb file</Typography>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                {/* bank */}
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
                <Accordion onChange={handleChange("panel3")} expanded={expanded === 'panel3'}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Stack>
                            <Typography variant="h6">
                                {translate('t.Investors')}
                            </Typography>
                            <Typography>{translate('t.Insert the investor identification data')}</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>

                        {/* Investment Fund Administrator Data */}

                        <Stack gap={1} mb={2}>
                            <Typography variant='h6'>{translate('t.Investment Fund Administrator Data')}</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Corporate Name')}</FormLabel>
                                        <RHFTextField name="corporationName" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNPJ')}</FormLabel>
                                        <RHFTextField name="cnpj" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Administrator Responsible Name")}</FormLabel>
                                        <RHFTextField name="adminResponsibleName" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.RG')}</FormLabel>
                                        <RHFTextField name="rg" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CPF')}</FormLabel>
                                        <RHFTextField name="cpf" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Phone Number of Administrator Responsible')}</FormLabel>
                                        <RHFTextField name="adminPhonenumber" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Administrator Responsible Email')}</FormLabel>
                                        <RHFTextField name="adminEmail" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                              
                            </Grid>
                            <Typography variant='h6'>{translate('t.Investment Fund Manager Data')}</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Corporate Name')}</FormLabel>
                                        <RHFTextField name="corporationName" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNPJ')}</FormLabel>
                                        <RHFTextField name="cnpj" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Full Name of Manager Responsible")}</FormLabel>
                                        <RHFTextField name="managerName" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CPF')}</FormLabel>
                                        <RHFTextField name="managrCpf" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Contact Number of the Person in Charge of the Manager')}</FormLabel>
                                        <RHFTextField name="managerPhonenumber" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Email of Manager Responsible')}</FormLabel>
                                        <RHFTextField name="managerEmail" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                            </Grid>
                            <Typography variant='h6'>{translate('t.Investment Fund Custodian')}</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Full Name of the Person in Charge of the Custodian')}</FormLabel>
                                        <RHFTextField name="corporationName" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CNPJ')}</FormLabel>
                                        <RHFTextField name="cnpj" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate("t.Full Name")}</FormLabel>
                                        <RHFTextField name="adminResponsibleName" label="" size="small" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.RG of the Person in Charge of the Custodian')}</FormLabel>
                                        <RHFTextField name="rg" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.CPF of the Person in Charge of the Custodian')}</FormLabel>
                                        <RHFTextField name="cpf" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Contact Number')}</FormLabel>
                                        <RHFTextField name="adminPhonenumber" label="" size="small" />

                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12} sm={12} md={6} padding={1}>
                                    <FormGroup>
                                        <FormLabel>{translate('t.Email')}</FormLabel>
                                        <RHFTextField name="adminEmail" label="" size="small" />

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