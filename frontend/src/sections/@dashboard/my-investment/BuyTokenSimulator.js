import { Box, Card, CardContent, CardHeader, LinearProgress, Slider, Stack, Typography, useTheme } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import AmountChooser from "../../../components/app/AmountChooser";
import { BackgroundLabelStyled, GradientButtonStyle } from "../../../components/AppStyledComponent";
import Image from "../../../components/Image";
import Label from "../../../components/Label";
import useLocales from "../../../hooks/useLocales";
import { fNumber } from "../../../utils/formatNumber";

export default function BuyTokenSimulator({token}) {
    const { translate } = useLocales();
    const theme = useTheme();
    return (
        <Stack mb={2}>
            <Typography variant='h5' sx={{ textAlign: 'center', mb: 2 }} >
                {translate('market.simulation-desc')}
            </Typography>
            <Card>
                <CardHeader title={translate('market.simulation-title')} />
                <CardContent>
                    <Stack direction={{ xs: "column", sm: 'column', md: 'row', }} gap={{md:3, xs:1,sm:1}} alignItems={{ md: 'center' }} mb={2}>
                        <Typography sx={{ textAlign: 'left' }}>{translate('words.min')}:{fNumber(token?.price)}</Typography>
                        <Slider valueLabelDisplay="auto" size={'medium'} sx={{ height: 10 }} />
                        <Typography sx={{ textAlign: 'right' }}>{translate('words.max')}:{fNumber(token?.limit)}</Typography>
                    </Stack>
                    <Stack gap={2} justifyContent={'space-between'} direction={{ xs: 'column', sm: 'row' }}>
                        <BackgroundLabelStyled sx={{ flexGrow: 1, height: 84 }}>
                            <Typography>{translate('market.sim-mon-title')}</Typography>
                            <Typography variant='h5'>{fNumber(token?.profitPerMonth)}</Typography>
                            <Typography color={theme.palette.success.main}>{fNumber(token?.profitPerMonth)}</Typography>
                        </BackgroundLabelStyled>
                        <BackgroundLabelStyled sx={{ flexGrow: 1, height: 84 }}>
                            <Typography>{translate('market.sim-ann-title')}</Typography>
                            <Typography variant='h5'>{fNumber(token?.profitPerMonth)}</Typography>
                            <Typography color={theme.palette.success.main}>{fNumber(token?.profitPerMonth)}</Typography>
                        </BackgroundLabelStyled>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}