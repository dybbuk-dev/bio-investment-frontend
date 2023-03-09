import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardHeader, Container, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import Label from "../../components/Label";
import Page from "../../components/Page";
import useLocales from "../../hooks/useLocales";
import useSettings from "../../hooks/useSettings";
import { InoutGraph, MyInvestTokenInfo } from "../../sections/@dashboard/my-investment";
import { fNumber } from "../../utils/formatNumber";



export default function MyTokenDetail() {
    const { id } = useParams();
    const theme = useTheme();
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    const cards = [
        {
            label: 'Qty. of Issued Tokens',
            amount: 19230,
        },
        {
            label: 'Qty. of Issued Tokens',
            amount: 19230,
            percent: 11,
        },
        {
            label: 'Qty. of Issued Tokens',
            amount: 19230,
            percent: -11,
        },
        {
            label: 'Qty. of Issued Tokens',
            amount: 19230,
            percent: 12,
        },
        {
            label: 'Qty. of Issued Tokens',
            amount: 19230,
            percent: -15,
        }

    ]
    return (
        <Page>
            <Container maxWidth={themeStretch ? '100%' : "xl"}>
                <Stack direction={{ md: 'column', lg: 'row-reverse' }} gap={2}>
                    <Stack sx={{ minWidth: 300 }} gap={1} flexWrap={'wrap'} justifyContent={{sm:'space-between',lg:'flex-start'}} direction = {{xs:'column', sm:'row', lg:'column'}}>
                        {cards.map((card, index) => (
                            <Card key={index} sx = {{flexGrow:{xs:1, sm:1, md:1, lg:0}}}>
                                <CardContent sx={{ height: 130 }}>
                                    <Typography sx={{ mb: 1 }}>{card.label}</Typography>
                                    <Typography variant="h6" sx={{ mb: 1 }}>{fNumber(card.amount)}</Typography>
                                    {card?.percent &&
                                        <Label variant="ghost" color={card.percent > 0 ? 'success' : 'error'} >

                                            <Icon icon={card.percent > 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
                                            {fNumber(card.percent)}%
                                        </Label>
                                    }
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                    <Stack flexGrow={1}>
                        <Stack direction={{ sm: 'column', md: 'row' }} gap={2} mb={2}>
                            <Box sx={{ flexGrow: 1, }}>
                                <InoutGraph />
                            </Box>

                            <Card sx={{ minWidth: 300 }}>
                                <CardHeader title={'t.talk-ceo'} subheader={'t.talk-ceo-desc'} />
                                <CardContent>
                                    <Stack gap={2} justifyContent={'space-between'}>
                                        <Stack sx={{ backgroundColor: theme.palette.mode === 'light' ? 'grey.100' : 'grey.800' }} padding={2} gap={2} justifyContent={'center'} alignItems={'center'} mb={2}>
                                            <Avatar src="/images/avatar.png" sx={{ width: 80, height: 80 }} />
                                            <Typography variant="h6">#CEO NAME</Typography>
                                            <Typography >CEO since 02/12/2021</Typography>
                                        </Stack>
                                        <Button variant="outlined">
                                            <Icon icon="ic:round-whatsapp" />
                                            <Typography>{translate('t.send-message')}'</Typography>
                                        </Button>
                                    </Stack>

                                </CardContent>
                            </Card>
                        </Stack>
                        <Stack>
                            <MyInvestTokenInfo />
                        </Stack>
                    </Stack>
                </Stack>

            </Container>
        </Page>
    )
}