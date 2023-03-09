import { Box, Card, CardContent, CardHeader, Grid, LinearProgress, Link, Stack, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Icon } from "@iconify/react";

import AmountChooser from "../../../components/app/AmountChooser";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";
import Image from "../../../components/Image";
import Label from "../../../components/Label";
import useLocales from "../../../hooks/useLocales";
import { fNumber } from "../../../utils/formatNumber";
import TextMaxLine from "../../../components/TextMaxLine";

export default function TradingTokenDetailHeader({ token }) {
    const { translate } = useLocales();
    return (
        <Stack direction={{ sm: 'column', md: 'row', }} gap={2} >

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ maxWidth: 350 }}>
                        <Image src={token?.image} sx={{ borderRadius: 2 }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx = {{ height: '100%' }} >
                            <Stack sx = {{ height: '100%' }} justifyContent={'space-between'} alignItems={'stretch'}>
                                <Stack>
                                    <Typography variant="h6">
                                        {token?.name}
                                    </Typography>
                                    <Typography variant="body2">{token?.company}</Typography>
                                    <Box>
                                        <Label variant="ghost" color="success">
                                            <Icon icon="radix-icons:dot-filled" />
                                            {translate('t.In negociation')}
                                        </Label>
                                    </Box>

                                </Stack>
                                <Stack>
                                    <Typography>{translate('t.unit price')}</Typography>
                                    <Label variant="ghost" sx = {{height:48}}>
                                        {fNumber(token?.price)}
                                    </Label>
                                </Stack>
                            </Stack>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant={'h6'}>{token?.company}</Typography>
                            <TextMaxLine line={5} sx = {{mb:4}}>
                                <Typography component={'span'}>
                                    {token?.companyDescription}
                                </Typography>

                            </TextMaxLine>
                            <Link>{translate('t.See company website')}</Link>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>

        </Stack >
    )
}