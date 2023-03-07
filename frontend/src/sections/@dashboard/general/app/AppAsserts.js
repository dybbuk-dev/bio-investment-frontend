import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemButton, Stack, Box } from '@mui/material';
import { SeoIllustration } from '../../../../assets';
import { fNumber, fPercent } from '../../../../utils/formatNumber';
import { LabelIconStyled } from '../../../../components/AppStyledComponent';
import Iconify from '../../../../components/Iconify';


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
        height: '100%',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
}));

// ----------------------------------------------------------------------

AppAsserts.propTypes = {
    displayName: PropTypes.string,
};

const portfolios = [
    {
        name: "Bitcoin",
        date: new Date(),
        value: 1300,
        percent: 10,
        icon: "",
        image: "/icons/ic_booking.svg"
    },
    {
        name: "Ethereum",
        value: 1300,
        icon: "",
        percent: -2.1,
        date: new Date(),
        image: "/icons/ic_cart.svg"
    },
    {
        name: "Solar Plus",
        value: 1300,
        percent: 2,
        icon: "",
        date: new Date(),
        image: "/icons/ic_ecommerce.svg"
    },
    {
        name: "Outros",
        value: 1300,
        percent: -1.34,
        date: new Date(),
        icon: "",
        image: "/icons/ic_banking.svg"
    }
]

const ColorBarItem = ({ color, first = false, last = false, sx }) => {
    return (
        <Box sx={{ backgroundColor: color, borderTopLeftRadius: first && 5 || 0, borderBottomLeftRadius: first && 5 || 0, borderBottomRightRadius: last && 5 || 0, borderTopRightRadius: last && 5 || 0, height: 10,...sx }} >
            &nbsp;
        </Box>
    )
}
export default function AppAsserts({ displayName }) {
    const theme = useTheme();

    return (
        <RootStyle>
            <CardContent
                sx={{
                    p: { md: 2 },
                    pl: { md: 5 },
                }}
            >
                <Box padding={2} >
                    <Icon icon="ic:outline-account-balance-wallet" />
                    <Typography gutterBottom variant="h4">
                        Portfolio
                    </Typography>
                    <Stack direction={'row'} flexGrow={1} >
                        <ColorBarItem  color={'#F7931A'} sx = {{width:'40%'}} first/>
                        <ColorBarItem  color={'#9D28AC'} sx = {{width:'20%'}} />
                        <ColorBarItem  color={'#EA1E61'}  sx = {{width:'10%'}}/>
                        <ColorBarItem  color={'#009689'} sx = {{width:'30%'}} last/>
                    </Stack>
                    <Typography variant="body2" sx={{ pb: { xs: 1, xl: 2 } }}>
                        R$ 1,893.00
                    </Typography>
                </Box>
                <Divider sx={{ flexGrow: 1 }} />
                <List>
                    {
                        portfolios.map((portfolio, index) => (
                            <React.Fragment key={index}>
                                <ListItemButton sx={{ px: 0 }} >
                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Stack direction="row" gap={1} alignItems="center">
                                            <img src={portfolio.image} alt="assert" />
                                            <Stack sx={{ gap: 1 }}>
                                                <Typography variant={'h6'}>{portfolio.name}</Typography>
                                                <Typography variant="body2">{portfolio.date.toLocaleString()}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ gap: 1 }}>
                                            <Typography variant={'h6'}> {fNumber(portfolio.value)}</Typography>
                                            <LabelIconStyled sx={{
                                                ...(portfolio.percent < 0 && {
                                                    color: 'error.main',
                                                    bgcolor: alpha(theme.palette.error.main, 0.16),
                                                }),
                                            }}>
                                                <Iconify width={16} height={16} icon={portfolio.percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
                                                <Typography component="span" variant="subtitle2">
                                                    {portfolio.percent > 0 && '+'}
                                                    {fPercent(portfolio.percent)}
                                                </Typography>
                                            </LabelIconStyled>
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
    );
}
