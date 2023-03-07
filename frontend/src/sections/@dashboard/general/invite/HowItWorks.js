import { Icon } from "@iconify/react";
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import ReferalCard from "../../../../components/app/ReferalCard";



export default function HowItWorks() {
    const theme = useTheme();
    return (
        <Stack gap={2} alignItems={'center'} p={2}>
            <Typography variant={'h5'}>How it works 🤔</Typography>
            <Typography variant={'body2'} sx={{ mb: 1 }}>Find out how you'll win the prizes!</Typography>
            {/* step 1 */}
            <Grid container sx={{ mb: 2 }}>

                <Grid item md={6} sm={12} padding={1} >
                    <Typography sx={{ mb: 2 }} variant="h5">1. First Step</Typography>
                    <Typography variant={'body2'}>
                        As soon as you invite your first friend to register with Bio Invest, you already get R$30.00 to use on the platform!
                    </Typography>
                </Grid>
                <Grid item md={6} sm={12} padding={1} gap={2} alignItems={'center'} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="mdi:user-check-outline" color={theme.palette.success.main} width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>A valid user indication for use in Bio Invest</Typography>
                        </CardContent>

                    </Card>
                    <Typography variant="h1">
                        =
                    </Typography>
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="ph:currency-circle-dollar" color={theme.palette.success.main} width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>BRL 30.00 for you to use on the platform.</Typography>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
            {/* step 2 */}
            <Grid container sx={{ mb: 2 }}>
                <Grid item sm={12} padding={1} sx = {{display:{md:'none'}}} >
                    <Typography sx={{ mb: 2 }} variant="h5">2. How to invite a friend?</Typography>
                    <Typography variant={'body2'}>
                        Generate your link and invite people to redeem your prizes and start accumulating referrals and redeem prizes!
                    </Typography>
                </Grid>
                <Grid item md={7} sm={12} padding={1} gap={2} alignItems={'center'} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="mdi:clipboard-multiple-outline" width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>A valid user indication for use in Bio Invest</Typography>
                        </CardContent>

                    </Card>
                    <Divider sx={{ borderStyle: 'dotted', width: '100px', mt: "4px", mx: -2, borderColor: theme.palette.success.main }} />
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="ph:link-bold" width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>BRL 30.00 for you to use on the platform.</Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item md={5}  padding={1}  sx = {{display:{xs:'none', sm:'none', md:'block'}}}>
                    <Typography sx={{ mb: 2 }} variant="h5">2. How to invite a friend?</Typography>
                    <Typography variant={'body2'}>
                        Generate your link and invite people to redeem your prizes and start accumulating referrals and redeem prizes!
                    </Typography>
                </Grid>
            </Grid>
            {/* step 3 */}
            <Grid container sx={{ mb: 2 }}>

                <Grid item md={6} sm={12} padding={1} >
                    <Typography sx={{ mb: 2 }} variant="h5">3. And it doesn't stop there</Typography>
                    <Typography variant={'body2'}>
                        Some Bio Invest assets may allow an indication percentage on the value that your friends buy from these assets.
                        Remember: past profits are no guarantee of future profits!
                    </Typography>
                </Grid>
                <Grid item md={6} sm={12} padding={1} gap={2} alignItems={'center'} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="material-symbols:swap-horiz-rounded" color={theme.palette.success.main} width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>Your friends make transactions and investments at Bio Invest</Typography>
                        </CardContent>

                    </Card>
                    <Typography variant="h1">
                        <Icon icon="material-symbols:arrow-forward-rounded" width={24} />
                    </Typography>
                    <Card>
                        <CardContent>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Icon icon="ph:currency-circle-dollar" color={theme.palette.success.main} width={48} />
                            </Box>
                            <Divider sx={{ my: 4, mx: -3 }} />
                            <Typography variant={'body2'}>You get a percentage of all their investment</Typography>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Stack>
    )
}