import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Stack, Card, CardHeader, CardContent, Typography, useTheme, Button, Divider } from '@mui/material';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFRadioGroup } from '../../../components/hook-form';

import useLocales from '../../../hooks/useLocales';
import useAuth from '../../../hooks/useAuth';
import { GradientButtonStyle } from '../../../components/AppStyledComponent';

export default function InvestorProfile() {

    const optionGroup1 = useMemo(() => {
        return [
            {
                id: '1',
                value: '1',
                label: 'Less than 1 year'
            },
            {
                id: '2',
                value: '2',
                label: 'From 1 to 3 years'
            },
            {
                id: '3',
                value: '3',
                label: 'Over 3 years'
            }
        ]
    }, []);
    const optionGroup2 = useMemo(() => {
        return [
            {
                id: '1',
                value: '1',
                label: 'Less than 1 year'
            },
            {
                id: '2',
                value: '2',
                label: 'From 1 to 3 years'
            },
            {
                id: '3',
                value: '3',
                label: 'Over 3 years'
            }
        ]
    }, []);
    const optionGroup3 = useMemo(() => {
        return [
            {
                id: '1',
                value: '1',
                label: 'I did not complete higher education and my professional experience did not improve my knowledge of the financial market'
            },
            {
                id: '2',
                value: '2',
                label: 'I completed higher education, but my professional experience did not improve my knowledge of the financial market'
            },
            {
                id: '3',
                value: '3',
                label: 'I did not complete higher education, but my professional experience has developed enough knowledge about financial products'
            },
            {
                id: '4',
                value: '4',
                label: 'I have completed higher education and my professional experience has developed enough knowledge about financial products'
            },

        ]
    }, []);
    const { translate } = useLocales();

    const { user } = useAuth();
    const theme = useTheme();


    const FormSchema = Yup.object().shape({
        option1: Yup.string().required('Option1 is required'),
    });

    const defaultValues = useMemo(() => {
        return {
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            option5: '',
            option6: '',
            option7: '',
            option8: '',
            option9: '',

        }
    }, []);

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

                <Card>
                    <CardHeader title={translate('t.Define your investor profile')} subheader={translate('t.Complete the form so that we can understand your investment profile.')} />
                    <CardContent>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>1.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>2.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup2} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>3.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>4.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>5.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>6.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>7.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>8.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup1} name="option1" />
                        </Stack>
                        <Stack mb={2} gap={2}>
                            <Typography variant={'subtitle1'}>9.{translate('t.How long do you intend to leave your investments with us?')}</Typography>
                            <RHFRadioGroup sx={{ flexDirection: "column" }} options={optionGroup3} name="option9" />
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Stack direction="row" gap={2} mb={2}>
                            <Button sx={{ flexGrow: 1 }} variant={'outlined'}>{translate('words.cancle')}</Button>
                            <GradientButtonStyle sx={{ flexGrow: 1 }}>{translate('words.save')}</GradientButtonStyle>
                        </Stack>

                    </CardContent>

                </Card>
            </FormProvider>
        </Stack>
    )
}