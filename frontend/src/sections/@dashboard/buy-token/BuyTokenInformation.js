import { Box, Card, CardContent, CardHeader, Divider,  Stack, Typography } from "@mui/material";
import useLocales from "../../../hooks/useLocales";
import { BackgroundLabelStyled } from "../../../components/AppStyledComponent";

import { fNumber } from "../../../utils/formatNumber";

export default function BuyTokenInformation({token}){
    const { translate } = useLocales();
    return(
        <Stack mb={2}>
        <Card>
            <CardHeader title={translate('market.information')} />
            <Divider />
            <CardContent>
                <Stack mb={2} direction='row' sx={{ flexWrap: 'wrap' }} gap={2} justifyContent={'space-between'}>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.acc-fund')}
                        </Typography>
                        <Typography variant="subtitle2">
                            {fNumber(token?.captured)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.buyer')}
                        </Typography>
                        <Typography variant="subtitle2">
                            {fNumber(token?.buyers)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.min-purchase')}
                        </Typography>
                        <Typography variant="subtitle2">
                            {fNumber(token?.price)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.ann-quota')}
                        </Typography>
                        <Typography variant="subtitle2">
                            Single Phase
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.token-dur')}
                        </Typography>
                        <Typography variant="subtitle2">
                            3 Years
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="text.secondary" variant="body2">{translate('market.token-cat')}
                        </Typography>
                        <Typography variant="subtitle2">
                            Participation
                        </Typography>
                    </Box>
                   
                </Stack>
                <Stack gap={2} justifyContent={'space-between'} direction="row">
                    <BackgroundLabelStyled sx={{ flexGrow: 1 }}>
                        <Typography>{translate('translate.mon-quota')}</Typography>
                        <Typography color={'blue'}>{fNumber(token?.profitPerMonth)} % p.m</Typography>
                    </BackgroundLabelStyled>
                    <BackgroundLabelStyled sx={{ flexGrow: 1 }}>
                        <Typography>{translate('market.ann-quota')}</Typography>
                        <Typography color={'blue'}>{fNumber(token?.profitPerMonth)} % p.y</Typography>
                    </BackgroundLabelStyled>
                </Stack>
            </CardContent>
        </Card>
    </Stack>
    )
}