import { Grid, Stack, Typography } from "@mui/material";
import ReferalCard from "../../../../components/app/ReferalCard";



export default function InviteTypes({ modes }) {
    return (
        <Stack gap={2} alignItems={'center'} p={2}>
            <Typography variant={'h5'}>Redeem your bonus 🏆</Typography>
            <Typography variant={'body2'} sx = {{mb:1}}>Check the awards</Typography>
            <Grid container>
                {modes.map((mode, index) => (
                    <Grid item md={3} sm = {6} padding = {1} key = {index}>
                        <ReferalCard mode = {mode} />
                    </Grid>
                ))}

            </Grid>
        </Stack>
    )
}