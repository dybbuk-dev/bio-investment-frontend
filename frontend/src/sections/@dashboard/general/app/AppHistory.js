
// ----------------------------------------------------------------------

import { Card, CardContent, List, ListItem, ListItemButton, Stack, Typography, Divider, CardHeader } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import React from "react";
import { fShortDate } from "../../../../utils/formatTime";
import { LabelIconStyled } from "../../../../components/AppStyledComponent";
import Iconify from "../../../../components/Iconify";
import { fPercent, fNumber } from "../../../../utils/formatNumber";

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
        height: '100%',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
}));


const histories = [
    {
        name: "Bitcoin",
        date: new Date(),
        value: 1300,
        mode: "deposit",
        icon: "",
        image: "/icons/ic_booking.svg"
    },
    {
        name: "Ethereum",
        value: 1300,
        icon: "",
        mode: "deposit",
        date: new Date(),
        image: "/icons/ic_cart.svg"
    },
    {
        name: "Solar Plus",
        value: 1300,
        mode: "deposit",
        icon: "",
        date: new Date(),
        image: "/icons/ic_ecommerce.svg"
    },
    {
        name: "Outros",
        value: 1300,
        mode: "withdraw",
        date: new Date(),
        icon: "",
        image: "/icons/ic_banking.svg"
    }
]
export default function AppHistory() {
    const theme = useTheme();
    return (

        <RootStyle>
            <CardHeader title="History" />

            <CardContent
                sx={{
                    p: { md: 2 },

                }}
            >

              
                <List>
                    {
                        histories.map((history, index) => (
                            <React.Fragment key={index}>
                                <ListItemButton sx={{ px: 0 }} >
                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Stack direction="row" gap={1} alignItems="center">
                                            <img src={history.image} alt="assert" />
                                            <Stack sx={{ gap: 1 }}>
                                                <Typography variant={'h6'}>{history.name}</Typography>
                                                <Typography variant="body2">{fShortDate(history.date)}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ gap: 1 }}>
                                            <Typography variant={'h6'}> {fNumber(history.value)}</Typography>


                                            <Typography component="span" variant="body2">

                                                {history.mode}
                                            </Typography>

                                        </Stack>




                                    </ListItem>
                                </ListItemButton>
                                <Divider />
                            </React.Fragment>
                        ))
                    }

                </List>
            </CardContent>
        </RootStyle>



    )
}