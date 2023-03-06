import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import { styled, useTheme, } from '@mui/material/styles';


import CopyClipboard from "../../../../components/CopyClipboard";

const GradientStyle = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 24,
    borderRadius: 8,
    width: '100%',
    color: 'white',
    [theme.breakpoints.up('md')]: {
        height: '100%',
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    background: ' linear-gradient(180deg, rgba(0, 0, 0, 0) 47.4%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(296.69deg, rgba(95, 87, 168, 0.5) 8.3%, rgba(43, 118, 185, 0.5) 35.59%, rgba(44, 172, 209, 0.5) 63.24%, rgba(53, 235, 147, 0.5) 91.67%), rgba(189, 249, 234, 0.2)'
}));
export default function InviteBanner() {
    const theme = useTheme();
    return (
        <GradientStyle>
            <Stack width={{ xs: '100%', sm: '100%', md: '50%' }} gap={2} justifyContent = {'center'}>
                <Typography variant={'h5'}>
                    Invite your friends and get amazing rewards
                </Typography>
                <p>
                    Copy the link below and send it to your friends to invest with Bio Investment and earn points to exchange for prizes.
                </p>
                <CopyClipboard color="white" iconColor="white" sx={{
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: 'white', borderWidth: 1, background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);' },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": { borderColor: 'white', borderWidth: 1 },
                    },
                }} />
                <Stack direction="row">
                    <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ height: 32, }} >
                        <Button sx={{ borderColor: 'white', background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);' }}><Icon icon="iconoir:facebook" color="white" /></Button>
                        <Button sx={{ borderColor: 'white', background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);' }}><Icon icon="fa6-brands:whatsapp" color="white" /></Button>
                        <Button sx={{ borderColor: 'white', background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);' }}><Icon icon="uit:linkedin-alt" color="white" /></Button>
                        <Button sx={{ borderColor: 'white', background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);' }}><Icon icon="mingcute:twitter-line" color="white" /></Button>
                    </ButtonGroup>

                </Stack>

            </Stack>
            <Stack  width={{ xs: '100%', sm: '100%', md: '35%' }}  sx={{ background: 'linear-gradient(108.46deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)', backdropFilter: 'blur("10px")'}} padding={2} marginRight={4} borderRadius={1}>
                <Stack direction="row" justifyContent={'space-between'} mb = {2}>
                    <Typography>Status Information</Typography>
                    <Stack color={theme.palette.success.main}   direction = "row" alignItems={'center'}>
                        <Icon icon="ci:dot-05-xl" />
                        Online
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="material-symbols:check-circle-outline-sharp" />
                        Online
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="ph:currency-circle-dollar" />
                        Investment Income
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="material-symbols:percent" />
                        Fee Income
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="mdi:user" />
                        Name
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="ic:baseline-phone-android" />
                        Number
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Stack color = "white"  direction = "row" alignItems={'center'} gap={1}>
                        <Icon icon="ic:sharp-calendar-month" />
                        Register Date
                    </Stack>
                    <Typography color = "white">0</Typography>
                    
                </Stack>
                <Divider sx = {{width:'100%', mb:2}}/>

            </Stack>
        </GradientStyle>
    )
}