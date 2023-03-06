import { Button, Card, CardActionArea, CardContent, CardHeader, Divider, FormControlLabel, RadioGroup, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import useSettings from "../../../hooks/useSettings";
import useLocales from "../../../hooks/useLocales";
import { BoxMaskComponent } from "../../../pages/dashboard/Profile";
import Iconify from "../../../components/Iconify";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";

const AppearenceModeItem = styled(CardActionArea)(({ theme }) => ({
    width: 200,
    position: 'relative',
    height: 148,
    backgroundSize: 'contain',
    padding: 0,
    display: 'flex',
    borderRadius: 8,
}));



export default function Apperence() {
    const { translate } = useLocales();
    const { themeMode, onChangeMode } = useSettings();
    const theme = useTheme();
    
    const selectedBorder = {
        borderWidth: 2,
        borderRadius: 1,
        borderStyle: 'solid',

        borderColor: theme.palette.primary.main
    }

    return (
        <Stack >
            <Card>
                <CardHeader title={translate('profile.system-appearence')} subheader={translate('profile.system-apperence-desc')} />
                <CardContent>
                    <Stack gap={2}>
                        <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode} sx = {{mb:2}}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                                <AppearenceModeItem sx={{ backgroundImage: 'url(/images/light-mode.png)', ...(themeMode === 'light' && selectedBorder) }}>
                                    {themeMode === 'light' &&
                                        <Iconify icon="material-symbols:check-circle-outline-rounded" sx={{ position: 'absolute', borderRadius: '50%', right: -10, top: -10, color: theme.palette.primary.main, bgcolor: theme.palette.background.paper }} width={28} height={28} />
                                    }
                                    <BoxMaskComponent value={'light'} />
                                </AppearenceModeItem>
                                <AppearenceModeItem sx={{ backgroundImage: 'url(/images/dark-mode.png)', ...(themeMode === 'dark' && selectedBorder) }}>
                                    {themeMode === 'dark' &&
                                        <Iconify icon="material-symbols:check-circle-outline-rounded" sx={{ position: 'absolute', borderRadius: '50%', right: -10, top: -10, color: theme.palette.primary.main, bgcolor: theme.palette.background.paper }} width={28} height={28} />
                                    }
                                    <BoxMaskComponent value={'dark'} />
                                </AppearenceModeItem>
                            </Stack>

                        </RadioGroup>
                        <Divider sx = {{mb:2}}/>
                        <Stack direction="row" gap={2}>
                            <Button sx={{ width: 200 }} variant={'outlined'}>{translate('words.cancle')}</Button>
                            <GradientButtonStyle sx={{ width: 200 }} >{translate('words.save')}</GradientButtonStyle>
                        </Stack>
                    </Stack>

                </CardContent>
            </Card>
        </Stack>
    )
}