import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid, Link, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from "@iconify/react";

import useLocales from "../../../hooks/useLocales";
import Image from "../../../components/Image";

const products = [
    {
        image: '/tokens/token-1.png',
        title: 'Corn',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/tokens/token-2.png',
        title: 'Sorghum',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/tokens/token-3.png',
        title: 'Coffee',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/tokens/token-4.png',
        title: 'Soy',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    }
]
const operations = [
    {
        image: '/icons/mdi-security.png',
        title: 'Security',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/icons/mdi-diviercification.png',
        title: 'Diversification',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/icons/mdi-dollar.png',
        title: 'Rentability',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    },
    {
        image: '/icons/mdi-unlock.png',
        title: 'Private Operation',
        desc: 'Agribusiness represents 30% of the Brazilian GDP',
    }
]

export default function AboutProject() {
    const { translate } = useLocales();

    return (
        <Stack gap={2}>
            <Stack gap={2}>
                <Typography variant="h6">{translate('t.Operational Flow⚙️')}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                            <Icon icon="ooui:text-flow-rtl" />
                            {translate('t.Open operational flow')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Operation Flow
                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Offer Summary 🔥')}</Typography>
                <Typography variant="body2">{translate("t.Fictor's token (FCT1) entitles token holders to participate in the profits from the intermediation operation of the purchase and sale of Fictor's commodities for a period of up to 3 years. This operation consists of buying grains from producers and selling these grains to selected buyers, with fast and safe delivery at the final destination. The offer is made through the tokenization of the SCP contract (Sociedade em Conta de Participação), guaranteeing that the holders of the token are participating partners in the operation and that all the risks involved in the undertaking are directed to the ostensible partner, Grupo Fictor.")}</Typography>
                <Grid container spacing={2}>
                    {products?.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardContent sx={{ padding: 0 }}>
                                    <Image ratio={'16/9'} src={product.image} />
                                    <Stack padding={2} gap={2}>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant="body2">{product.desc}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Stack>
            <Stack gap={2} mb = {2}>
                <Typography variant="h6">{translate('t.Reasons for Participating in the Operation 🤔')}</Typography>

                <Grid container spacing={2}>
                    {operations?.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardContent sx={{ padding: 0 }}>
                                    <Stack padding = {2} paddingTop={4}>
                                        <Box sx={{ width: 48, height: 48 }}>
                                            <Image ratio={'1/1'} src={product.image} />
                                        </Box>
                                    </Stack>


                                    <Stack padding={2} gap={2}>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant="body2">{product.desc}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Stack>
            <Stack mb={2} gap = {2}>
                <Typography variant = {'h6'}>{translate('t.Downloadable Documents ⬇️')}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs = {12} sm = {12} md = {6}>
                        <Stack alignItems={'center'} padding = {2} sx = {{backgroundColor:'background.paper',  borderColor:'divider', borderWidth:1, borderStyle:'solid'}} borderRadius={1} >
                            <Typography variant="subtitle1">
                                {translate('t.SCP Contract')}

                            </Typography>
                            <Link href = "#" sx = {{display:'flex', alignItems:'center'}}>{translate('t.Download File')}&nbsp;<Icon icon = "material-symbols:download-for-offline-outline" /></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs = {12} sm = {12} md = {6}>
                        <Stack alignItems={'center'} padding = {2} sx = {{backgroundColor:'background.paper', borderColor:'divider', borderWidth:1, borderStyle:'solid'}} borderRadius={1} >
                            <Typography variant="subtitle1">
                                {translate('t.Token Issuance Term')}

                            </Typography>
                            <Link href = "#" sx = {{display:'flex', alignItems:'center'}}>{translate('t.Download File')}&nbsp;<Icon icon = "material-symbols:download-for-offline-outline" /></Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}