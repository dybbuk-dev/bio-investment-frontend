import { Box, Card, CardContent, Divider, Stack, Typography, useTheme } from "@mui/material";
import useLocales from "../../hooks/useLocales";
import { fNumber } from "../../utils/formatNumber";
import Image from "../Image";

export default function TradingTokenCard({ token, onCardAction = () => { }, action = null }) {
    const theme = useTheme();
    const { translate } = useLocales();
    return (
        <Card onClick={onCardAction} sx={{ cursor: 'pointer' }}>
            <CardContent sx={{ p: 0 }}>
                <Box >
                    <Image alt={'token-image'} src={token.image} />
                </Box>
                <Stack direction="row" justifyContent={'space-between'} padding={1}>
                    <Stack gap={1}>
                        <Typography variant={'h6'}>{token.name}</Typography>
                        <Typography variant={'body2'} color='text.secondary'>{token.company}</Typography>
                    </Stack>
                    <Stack gap={1} sx={{ textAlign: 'right' }}>
                        <Typography variant={'h6'}>{fNumber(token.price)}</Typography>
                        <Typography variant={'body2'} color={theme.palette.success.main}>{fNumber(token.profitPerMonth)}</Typography>
                    </Stack>


                </Stack>
                <Divider sx={{ mx: 1 }} />
                <Stack direction="row" justifyContent={'space-between'} padding={1}  mb = {2}>
                    <Stack gap={1}>
                        <Typography variant={'body2'} color={'text.secondary'}>{translate('token.volume')}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{translate('token.min')}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{translate('token.acq')}</Typography>
                    </Stack>
                    <Stack gap={1} sx={{ textAlign: 'right' }}>
                        <Typography variant={'body2'} color={'text.secondary'}>{fNumber(token.captured)}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{fNumber(token.buyers)}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{fNumber(token.sold)}</Typography>
                    </Stack>
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'} mb = {2}>
                    {action != null && action}
                </Stack>
            </CardContent>
        </Card>
    )
}