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

export default function AboutDifferiantials() {
    const { translate } = useLocales();
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

    return (
        <Stack gap={2}>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Differentials ♻️')}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Time/Mobility')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Portfolio diversification with agribusiness')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
               
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Remuneration')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Bio3 Group')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Guarantees ✅')}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Guarantee')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
               
            </Stack>
            <Stack gap={2} mb={2}>
                <Typography variant="h6">{translate('t.Riskiness ⛔️')}</Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} >
                          
                            {translate('t.Riskiness')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack padding = {2}>
                            <Typography>
                                {translate('t.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.')}
                            </Typography>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
               
            </Stack>
        </Stack>
    )
}