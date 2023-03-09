import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid, Link, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from "@iconify/react";

import useLocales from "../../../hooks/useLocales";
import Image from "../../../components/Image";
import CopyClipboard from "../../../components/CopyClipboard";

const timelines = [
    {

        title: '1. Primary token sale',
        desc: 'Fictor makes the token available for sale to the market.',
    },
    {

        title: '2. Primary token sale',
        desc: 'Bio3 receives token purchase values and Bio Investment distributes tokens for the current month to buyers through the Bio Investment platform.',
    },
    {

        title: '3. Primary token sale',
        desc: 'After the distribution of tokens, the capital will be used in the operation of commodities, starting to generate dividends to be distributed in the following month.',
    },
    {

        title: '4. Primary token sale',
        desc: 'Token holders receive the first installment of dividends. Dividends will continue to be made available through the Bio Investment account, until the end of the contract.',
    }
    ,
    {

        title: '5. Token resale and monetization (Optional)',
        desc: "If the token holder needs to liquidate the token before the end of the 36 month period, he can sell it at a discount (discount) on the Token Resale to other interested buyers. Upon acquisition, the token buyer has the monetization period restarted and he will begin the monetization process in the following month, giving the right to another 36 months of participation in the operation's dividends.",
    }
    ,
    {

        title: '6. Primary token sale',
        desc: 'After 36 months of receipt of dividends from the operation, Bio3 buys back the token for the original value of the primary issue that the participating partner paid at the time of purchasing the token.',
    }
]


export default function AboutToken() {
    const { translate } = useLocales();

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
                <Typography variant="h6">{translate('t.Token  Timeline 📆')}</Typography>

                <Grid container spacing={2}>
                    {timelines?.map((timeline, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ padding: 0 }}>

                                    <Stack padding={2} gap={2}>
                                        <Typography variant="h6">{timeline.title}</Typography>
                                        <Typography variant="body2">{timeline.desc}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Stack>
            <Stack gap={2} mb={2}>
                <Typography variant="h5">{translate('t.Token Rights')}</Typography>
                <Typography variant="body2">{translate('t.The token holder is entitled to receive a share in the profits of the operation while the token is within a specific quota, generating profitability. He can also liquidate the token at the Tokens Resale or leave it within a quota generating profitability until the deadline expires and the token is repurchased by the issuer. Obs. The user who buys the token in the token market can renegotiate it in the Tokens Resale itself or put it to monetize within the current quota for the period.')}</Typography>
            </Stack>
        </Stack>
    )
}