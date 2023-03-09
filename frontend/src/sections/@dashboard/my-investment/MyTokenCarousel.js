import { useState, useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Radio, alpha, Box, Card, CardContent, CardHeader, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Link, Button, TextField, InputAdornment, MenuItem, Select, useTheme } from "@mui/material";
import Image from "../../../components/Image";
import SearchFilter from "../../../components/app/SearchFilter";
import { fNumber } from "../../../utils/formatNumber";
import TradingTokenCard from "../../../components/app/TradingTokenCard";
import Iconify from "../../../components/Iconify";
import useLocales from "../../../hooks/useLocales";

const THUMB_SIZE = 240;
const THUMB_HEIGHT = 200;

export default function MyTokenCarousel({ tokens }) {
    const navigate = useNavigate();
    const slider2 = useRef(null);
    const [nav2, setNav2] = useState();
    const {translate} = useLocales();   
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedToken, setSelectedtoken] = useState(tokens.length > 0 ? tokens[0].id : null);
    const theme = useTheme();
    const background = theme.palette.mode === 'light' ? '#F2F2F2' : '#14141d'
    const settings2 = {
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        variableWidth: true,
        centerPadding: '0px',

    };
    const handleChange = (evt) => {

        setSelectedtoken(evt.target.value);
    }

    const onCardAction = (token) => {
        // navigate(`/dashboard/buy-token/${token.id}`);
    }
    const onCardInternalAction = (token) => {
        navigate(`/dashboard/my-token/${token.id}`);
    }
    return (
        <Stack gap ={2} mt={2}>
            <Typography variant="h5">My Tokens</Typography>
            
            {/* filter */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent={'space-between'} padding ={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                    <Button sx={{ height: 56 }} variant='outlined' >{translate('words.all')}</Button>
                    <SearchFilter backgroundColor={background} variants={[{ label: 'option 1', id: 1 }, { label: 'option 2', id: 2 }]} />
                </Stack>
                <Stack flexGrow={1}>
                    <TextField InputProps={{
                        startAdornment: (<InputAdornment position="start" >
                            <Iconify icon="ic:sharp-search" sx={{ width: 24, height: 24 }} />
                        </InputAdornment>
                        )
                    }}

                    />
                </Stack>
            </Stack>
            <Box
                sx={{
                    padding:2,
                    my: 3,
                    mx: 'auto',
                    width: '100%',
                    '& .slick-current .isActive': { opacity: 1 },

                    ...(tokens.length > 2 && {
                        position: 'relative',
                        '&:before, &:after': {
                            top: 0,
                            zIndex: 9,
                            content: "''",
                            height: '100%',
                            position: 'absolute',
                            width: (THUMB_SIZE * 1) / 4,
                            backgroundImage: (theme) =>
                                `linear-gradient(to left, ${alpha(theme.palette.background.paper, 0)} 0%, ${theme.palette.background.paper
                                } 100%)`,
                        },
                        '&:after': { right: 0, transform: 'scaleX(-1)' },
                    }),
                }}
            >
                <Slider {...settings2} asNavFor={nav2} ref={slider2}>
                    {tokens.map((token, index) => (
                        <Box sx={{ p: 1 }} key={index}>

                            <Box key={token.id} sx={{ width: THUMB_SIZE, }}>
                                <TradingTokenCard token={token} onCardAction={() => onCardAction(token)}
                                    action={<Link href="#" onClick={() => onCardInternalAction(token)} >Check Intenal Data</Link>}
                                />
                            </Box>

                        </Box>

                    ))}
                </Slider>
            </Box>
        </Stack>

    )
}