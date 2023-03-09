import { Box, Card, CardContent, CardHeader, LinearProgress, Stack, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import AmountChooser from "../../../components/app/AmountChooser";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";
import Image from "../../../components/Image";
import Label from "../../../components/Label";
import useLocales from "../../../hooks/useLocales";
import { fNumber } from "../../../utils/formatNumber";

export default function BuyTokenHeader({token}) {
    const { translate } = useLocales();
    return (
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row', }} gap={2} >
            <Box sx={{ width: 322 }}>
                <Image src={token?.image} sx={{ borderRadius: 2 }} />
            </Box>

            <Card sx={{ flexGrow: 1 }}>
                <CardHeader title={token?.name} subheader={token?.company} action={
                    <Label variant='ghost' color='success' sx={{ py: 2 }}>
                        <FiberManualRecordIcon fontSize='small' />
                        In Capture
                    </Label>
                } />


                <CardContent>
                    <Stack direction="row" justifyContent={'space-between'} mb={1}>
                        <Typography variant='body2' color="text.secondary">Captured: {fNumber(token?.captured)}</Typography>
                        <Typography variant='subtitle2' color="text.secondary">Limit: {fNumber(token?.limit)}</Typography>
                    </Stack>
                    <Stack mb={2}>
                        <LinearProgress variant='determinate' value={50} sx={{ height: 10 }} />
                    </Stack>
                    <Stack direction="row" gap={2} mb={2}>
                        <Box>
                            <Typography variant='subtitle2' sx={{ mb: 0.7 }}>Price (unit)</Typography>
                            <Label sx={{ height: 40, width: 84 }}>{token?.price}</Label>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }}>Amount</Typography>
                            <AmountChooser />
                        </Box>

                    </Stack>
                    <Stack sx={{ maxWidth: 300 }}>
                        <GradientButtonStyle>Invest</GradientButtonStyle>
                    </Stack>
                </CardContent>
            </Card>

        </Stack>
    )
}