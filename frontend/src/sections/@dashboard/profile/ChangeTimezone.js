import { Button, Card, CardActionArea, CardContent, CardHeader, Divider, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import useSettings from "../../../hooks/useSettings";
import useLocales from "../../../hooks/useLocales";
import { BoxMaskComponent } from "../../../pages/dashboard/Profile";
import Iconify from "../../../components/Iconify";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";

const TimezoneItem = styled(CardActionArea)(({ theme }) => ({
    width: 240,
    position: 'relative',
    height: 148,
    padding: 8,
    borderRadius: 8,
  
}));


export default function ChangeTimezone() {
    const { translate } = useLocales();
    const [selectedTimezone, setSelectedTimezone] = useState('br');
    const theme = useTheme();
    const timezones = [
        {
            value: 'br',
            timezone: 'UTC-3(BRA)',
            title: 'Brazillia, BR'
        },
        {
            value: 'uk',
            timezone: 'UTC-3(BRA)',
            title: 'London, UK'
        },
        {
            value: 'eua',
            timezone: 'UTC-5(NYT)',
            title: 'New York, EUA'
        },
        {
            value: 'chi',
            timezone: 'UTC+8(CHI)',
            title: 'Xianghai, CHI'
        },
        {
            value: 'jp',
            timezone: 'UTC+9(TIK)',
            title: 'Tokyo, JP'
        },
        {
            value: 'fr',
            timezone: 'UTC+1(PAR)',
            title: 'Paris,FRA'
        }
    ]

    const onChangeTimezone = (evt, n) => {
       
        setSelectedTimezone(n);
    }
    const selectedBorder = {
        borderWidth: 2,
        borderRadius: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main
    }
    const normalBorder = {
        borderWidth: 1,
        borderRadius: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider
    }
    return (
        <Stack >
            <Card>
                <CardHeader title={translate('profile.system-timezone')} subheader={translate('profile.system-timezone-desc')} />
                <CardContent>
                    <Stack gap={2}>
                        <RadioGroup name="themeMode" value={selectedTimezone} onChange={onChangeTimezone} sx={{ mb: 2 }}>

                            <Stack direction={{ xs: 'column', sm: 'row', }} gap={2} flexWrap={'wrap'}>
                                {timezones.map((timezone, index) => (
                                    <TimezoneItem key={index} sx={{ ...(selectedTimezone === timezone.value && selectedBorder || normalBorder) }}>
                                        <Stack mb={2} direction="row" width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Typography>{timezone.title}</Typography>
                                            <Radio checked={selectedTimezone === timezone.value} />
                                        </Stack>
                                        <Typography variant="h6">{timezone.timezone}</Typography>
                                        <BoxMaskComponent value={timezone.value} />
                                    </TimezoneItem>
                                ))}


                            </Stack>

                        </RadioGroup>
                        <Divider sx={{ mb: 2 }} />
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