import merge from 'lodash/merge';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import ReactApexChart from 'react-apexcharts';

import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemButton, Stack, Box, IconButton, Link, CardHeader } from '@mui/material';
import { fNumber, fPercent } from '../../../utils/formatNumber';
import Logo from '../../../components/Logo';
import { CarouselArrows } from '../../../components/carousel';
import Image from '../../../components/Image';
import { BaseOptionChart } from '../../../components/chart';
import useLocales from '../../../hooks/useLocales';


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
        height: '100%',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
}));

const GradientStyle = styled(Box)(({ theme }) => (
    {

        backgroundImage: `linear-gradient(to left, #5F57A880 0%, #2CACD180 100%)`,
        borderRadius: 8,
        padding: 16,

    }
))

// ----------------------------------------------------------------------

const CHART_DATA = [12244, 53345, 44313];

const tokens = [
    { image: '/tokens/token-1.png', name: 'Token-1', price: 12000, description: 'Botanical Nature' },
    { image: '/tokens/token-2.png', name: 'Token-2', price: 11000, description: 'Botanical Nature' },
    { image: '/tokens/token-3.png', name: 'Token-3', price: 15000, description: 'Botanical Nature' }
]


export default function TradingTokenSidebar() {
    const theme = useTheme();

    const { translate } = useLocales();

    const carouselRef = useRef(null);
    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === 'rtl'),
        adaptiveHeight: true,
    };
    const chartOptions = merge(BaseOptionChart(), {
        colors: [
            theme.palette.primary.light,
            theme.palette.primary.main,
            theme.palette.primary.dark,
        ],
        labels: ['Token-1', 'Token-2', 'Token-3'],
        stroke: { colors: [theme.palette.background.paper] },
        legend: { horizontalAlign: 'center',position: 'bottom' },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: (seriesName) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        value: {
                            formatter: (val) => fNumber(val),
                        },
                        total: {
                            formatter: (w) => {
                                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return fNumber(sum);
                            },
                        },
                    },
                },
            },
        },
    });
    return (
        <RootStyle>
            <CardContent
                sx={{
                    p: { md: 2 },

                }}
            >
                <Box padding={2} sx={{ backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900] }}>
                    <Stack direction="row" justifyContent={'space-between'} mb={2}>
                        <img src='/icons/coin.png' alt="" />
                        <IconButton>
                            <Icon icon="material-symbols:close-rounded" />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle1' sx={{ mb: 1 }}>Earn by referring people</Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>Earn up to 0.3% of referral revenue and commissions.</Typography>
                        <Link sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                            <Typography>See more details</Typography>
                            <IconButton>
                                <Icon icon="ic:round-navigate-next" />
                            </IconButton>
                        </Link>

                    </Stack>

                </Box>
                <Divider sx={{ flexGrow: 1, mb: 2 }} />
                <Typography variant={'h5'} sx={{ mb: 1 }}>
                    Your Balance
                </Typography>
                <GradientStyle sx={{ mb: 2 }}>
                    <Logo collapsed sx={{ mb: 2 }} />
                    <Typography color="white">
                        R${fNumber(120000)}
                    </Typography>
                </GradientStyle>
                <Button variant="contained" sx={{ width: '100%', mb: 1 }}>
                    <Icon icon="ic:baseline-file-download" />
                    Deposit
                </Button>
                <Button variant="outlined" sx={{ width: '100%' }}>
                    <Icon icon="ic:baseline-file-upload" />
                    Withdraw
                </Button>
                <Divider sx={{ flexGrow: 1, mb: 2 }} />
                <Stack mb = {2}>
                    <Typography variant={'h5'} sx={{ textAlign: 'center' }}>
                        {translate('words.portfolio')}
                    </Typography>
                    <Stack>
                        <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} height={330} />
                    </Stack>

                </Stack>
                <Card>
                    <CardHeader
                        title="Recommended"
                        subheader={`${tokens.length} Tokens`}
                        action={
                            <CarouselArrows
                                customIcon={'ic:round-keyboard-arrow-right'}
                                onNext={handleNext}
                                onPrevious={handlePrevious}
                                sx={{ '& .arrow': { width: 28, height: 28, p: 0 } }}
                            />
                        }
                        sx={{
                            '& .MuiCardHeader-action': {
                                alignSelf: 'center',
                            },
                        }}
                    />

                    <CardContent>
                        <Slider ref={carouselRef} {...settings}>
                            {tokens.map((item, index) => (
                                <Stack gap={2} sx={{ width: '100%' }} key={index}>
                                    <Image ratio={'16/9'} alt="" src={item.image} sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, width: '100%', height: '100%', mb: 1 }} />
                                    <Stack direction="row" justifyContent={'space-between'} sx={{ width: '100%' }}>
                                        <Typography variant='subtitle1'>{item.name}</Typography>
                                        <Typography variant='subtitle1'>{fNumber(item.price)}</Typography>
                                    </Stack>
                                    <Typography variant={'body2'}>
                                        {item.description}
                                    </Typography>
                                </Stack>
                            ))}
                        </Slider>
                    </CardContent>
                </Card>
            </CardContent>


        </RootStyle>
    );
}
