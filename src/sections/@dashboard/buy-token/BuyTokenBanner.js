import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import { styled, useTheme, } from '@mui/material/styles';
import Image from "../../../components/Image";

const BackgroundStyle = styled(Box)(({ theme }) => ({
    position: 'absolute', top: 0, left: 0, background: 'url(/images/token-market-banner.png)', backgroundPosition: 'center', backgroundSize: 'contain', opacity: 0.1,
    width: '100%', height: '300px'
}));

const GradientStyle = styled(Box)(({ theme }) => ({
    position: 'relative',
    boxShadow: 'none',
    textAlign: 'center',
    display: 'flex',
    height: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 16,
    padding: 24,
    borderRadius: 8,
    width: '100%',
    color: 'white',
    background: ' linear-gradient(180deg, rgba(0, 0, 0, 0) 47.4%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(296.69deg, rgba(95, 87, 168, 0.5) 8.3%, rgba(43, 118, 185, 0.5) 35.59%, rgba(44, 172, 209, 0.5) 63.24%, rgba(53, 235, 147, 0.5) 91.67%), rgba(189, 249, 234, 0.2)'
}));
export default function BuyTokenBanner() {
    const theme = useTheme();
    return (
        <GradientStyle>
            <BackgroundStyle />
            <Stack width={'100%'} gap={2} justifyContent={'space-between'} direction={{ xs: 'column', sm: 'row' }} >
                <Stack direction="row" gap={3}>
                    <Box sx={{ borderRadius: 1, width: 48, height: 48 }}>
                        <Image src="/images/token-1.png" alt="" sx={{ borderRadius: 1 }} ratio={'1/1'} />
                    </Box>

                    <Box sx = {{textAlign:'left'}}>
                        <Typography variant="h5">ECO3 Energy Launched</Typography>
                        <Typography variant="body2">More than 4 million volutes</Typography>
                    </Box>
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>CHECK OFFER&nbsp;&nbsp;&gt;</Button>
                </Stack>

            </Stack>

        </GradientStyle>
    )
}