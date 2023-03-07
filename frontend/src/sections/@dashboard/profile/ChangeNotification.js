import { Button, Card, CardActionArea, CardContent, CardHeader, Divider, FormControlLabel, Grid, RadioGroup, Stack, Switch, Typography, useTheme } from "@mui/material";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, RHFSwitch, RHFIOSSwitch } from '../../../components/hook-form';
import useSettings from "../../../hooks/useSettings";
import useLocales from "../../../hooks/useLocales";
import { BoxMaskComponent } from "../../../pages/dashboard/Profile";
import Iconify from "../../../components/Iconify";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";



export default function ChangeNotification() {
    const { translate } = useLocales();
    const { themeMode, onChangeMode } = useSettings();
    const theme = useTheme();
 

    const defaultValues = {
        emailNotification: true,
        investEmailNotification: true,
    };

    const methods = useForm({
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
                <CardHeader title={translate('profile.notification')} subheader={translate('profile.notification-desc')} />
                <CardContent>
                    <Stack gap={2}>
                        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                            <Stack justifyContent={'space-between'} alignItems={'center'} direction = "row" mb={2}>
                                <Stack gap = {1}>
                                    <Typography variant = {"title1"} sx={{fontWeight:'bold'}}>{translate('profile.receive-email')}</Typography>
                                    <Typography variant = {"body2"}>{translate('profile.receive-email-desc')}</Typography>
                                </Stack>
                                <Switch name = "emailNotification" label = "" />
                            </Stack>
                            <Stack justifyContent={'space-between'} alignItems={'center'} direction = "row" mb= {5}>
                                <Stack gap = {1}>
                                    <Typography variant = {"title1"} sx={{fontWeight:'bold'}}>{translate('profile.receive-invest-email')}</Typography>
                                    <Typography variant = {"body2"}>{translate('profile.receive-invest-email-desc')}</Typography>
                                </Stack>
                                <Switch name = "investEmailNotification" label = "" />
                            </Stack>
                            <Divider sx={{ mb: 2 }} />
                            <Stack direction="row" gap={2}>
                                <Button sx = {{flexGrow:1}}  variant={'outlined'}>{translate('words.cancle')}</Button>
                                <GradientButtonStyle sx = {{flexGrow:1}}>{translate('words.save')}</GradientButtonStyle>
                            </Stack>
                        </FormProvider>


                    </Stack>

                </CardContent>
            </Card>
        </Stack>
    )
}