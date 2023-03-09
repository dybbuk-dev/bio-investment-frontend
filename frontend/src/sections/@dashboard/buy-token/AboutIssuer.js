import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid, Link, Stack, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from "@iconify/react";

import useLocales from "../../../hooks/useLocales";
import Image from "../../../components/Image";
import CopyClipboard from "../../../components/CopyClipboard";

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
const socials = [
    {
        icon: 'logos:facebook',
        name: 'Facebook',
        url: '/Solar plus',
    },
    {
        icon: 'logos:youtube-icon',
        name: 'Youtube',
        url: '/Solar plus',
    },
    {
        icon: 'logos:twitter',
        name: 'Twitter',
        url: '/Solar plus',
    },
    {
        icon: 'skill-icons:instagram',
        name: 'Instagram',
        url: '/Solar plus',
    }
    ,
    {
        icon: 'uiw:global',
        name: 'Website',
        url: 'www.solarplus.com',
    }
]

export default function AboutIssuer() {
    const { translate } = useLocales();
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

    return (
        <Stack gap={2}>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Blockchain Token Address📍')}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                            <Icon icon="ooui:text-flow-rtl" />
                            {translate('t.Blockchain token contract address')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack paddingX={2}>
                            <CopyClipboard size="small" value="0xB8c77482e45F1F44dE1745F52C74426C631bDD52" disabled />
                        </Stack>

                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Responsible ⚜️')}</Typography>

                <Grid container spacing={2}>
                    {products?.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardContent sx={{ padding: 0 }}>
                                    <Image ratio={'16/9'} src={product.image} />
                                    <Stack padding={2} gap={2} alignItems={'center'} mb={4}>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant="body2">{product.desc}</Typography>
                                    </Stack>
                                    <Stack alignItems={'center'}>
                                        <Link>{translate('t.Know More')}</Link>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Stack>
            {/* website */}
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.About the Company 🏬')}</Typography>
                <Card>
                    <CardContent>
                        <Stack direction={{ md: 'row' }} alignItems={'center'} >
                            <Stack sx={{ width: 200, height: 200 }}>
                                <Image src="/logo/company_logo.png" alt="" />
                            </Stack>
                            <Grid container>
                                {socials?.map((social, index) => (
                                    <Grid item xs={12} sm={6} padding={1} key={index}>
                                        <Box sx={{ backgroundColor, borderRadius: 1 }} padding={2}>
                                            <Stack direction="row" gap={2} alignItems={'center'}>
                                                <Box sx={{ width: 26 }}>
                                                    <Icon icon={social.icon} width={24} />
                                                </Box>

                                                <Stack>
                                                    <Typography color="text.secondary">{social.name}</Typography>
                                                    <Typography variant="subtitle1">{social.url}</Typography>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                ))}

                            </Grid>
                        </Stack>
                        <Stack padding = {2} gap={2} mb={2}>
                            <Typography variant="h6">{translate('t.Details')}</Typography>
                            <Typography variant="body2">{translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}</Typography>
                        </Stack>
                    </CardContent>
                </Card>

            </Stack>
        </Stack>
    )
}