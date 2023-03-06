import { useState, useRef } from "react";
import Slider from "react-slick";
import {Radio, alpha, Box, Card, CardContent, CardHeader, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Image from "../../../components/Image";
import SearchFilter from "../../../components/app/SearchFilter";
import { fNumber } from "../../../utils/formatNumber";

const THUMB_SIZE = 240;
const THUMB_HEIGHT = 200;

export default function BuyTokenCarousel({ categories }) {
    const [nav2, setNav2] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectdCategory, setSelectedCategory] = useState(categories[0].id);
    const settings2 = {
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        variableWidth: true,
        centerPadding: '0px',
        // slidesToShow: categories.length > 3 ? 3 : categories.length,
    };
    const handleChange = (evt)=>{
 
        setSelectedCategory(evt.target.value);
    }
    const slider2 = useRef(null);
    return (
        <Box
            sx={{
                my: 3,
                mx: 'auto',
                width: '100%',
                '& .slick-current .isActive': { opacity: 1 },
                // ...(categories.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
                // ...(categories.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
                // ...(categories.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
                // ...(categories.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
                // ...(categories.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
                ...(categories.length > 2 && {
                    position: 'relative',
                    '&:before, &:after': {
                        top: 0,
                        zIndex: 9,
                        content: "''",
                        height: '100%',
                        position: 'absolute',
                        width: (THUMB_SIZE * 2) / 3,
                        backgroundImage: (theme) =>
                            `linear-gradient(to left, ${alpha(theme.palette.background.paper, 0)} 0%, ${theme.palette.background.paper
                            } 100%)`,
                    },
                    '&:after': { right: 0, transform: 'scaleX(-1)' },
                }),
            }}
        >
            <Slider {...settings2} asNavFor={nav2} ref={slider2}>
                {categories.map((category, index) => (
                    <Box sx={{ p: 1 }} key={index}>
                        <Card >
                            <CardContent sx={{ p: 0 }}>
                                <Box key={category.id} sx = {{ width: THUMB_SIZE,}}>
                                    <Image
                                        disabledEffect
                                        alt="thumb image"
                                        src={category.image}
                                        sx={{
                                            width: THUMB_SIZE,
                                            height: THUMB_HEIGHT,
                                            borderRadius: 1.5,
                                            cursor: 'pointer',
                                           
                                        }}
                                    />
                                    <Stack direction="row" p = {1}>
                                        <Stack direction={'row'} flexGrow={1} alignItems={'center'} gap={1}>
                                            <Image src = {category.icon} sx ={{width:32}}/>
                                            <Typography>{category.order}. {category.name}</Typography>
                                        </Stack>
                                        <Stack>
                                            <Radio
                                                checked={`${selectdCategory}` === `${category.id}`}
                                                onChange={handleChange}
                                                value={category.id}
                                                name="radio-buttons"
                                                
                                            />
                                        </Stack>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>

                    </Box>

                ))}
            </Slider>
        </Box>
    )
}