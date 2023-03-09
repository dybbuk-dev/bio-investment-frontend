import { Box, Button, Divider, Grid, InputAdornment, Stack, TextField, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchFilter from "../../../components/app/SearchFilter";
import TokenCard from "../../../components/app/TokenCard";
import Iconify from "../../../components/Iconify";
import useLocales from "../../../hooks/useLocales";
import { tokens } from "../../../_mock/_tokens";

export default function BuyTokenList() {
    const navigate = useNavigate();
    const theme = useTheme();
    const background = theme.palette.mode === 'light' ? '#F2F2F2' : '#14141d'

    const onCardAction = (token) => {
        navigate(`/dashboard/buy-token/${token.id}`);
    }
    const {translate} = useLocales();
    return (
        <Stack>
            <Stack direction="row" gap={2} mb = {4}>
                <Button variant="contained" sx={{ flexGrow: 1 }}>Participation Token</Button>
                <Button variant="outlined" sx={{ flexGrow: 1 }}>Equity Token</Button>
                <Button variant="outlined" sx={{ flexGrow: 1 }}>Utility Token</Button>

            </Stack>
            {/* filter */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} justifyContent={'space-between'}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                    <Button sx={{ height: 56 }} variant='outlined' >{translate('words.all')}</Button>
                    <SearchFilter backgroundColor={background}  variants={[{ label: 'option 1', id: 1 }, { label: 'option 2', id: 2 }]} />
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
            <Grid container>
                {tokens.map((token, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box padding={1}>
                            <TokenCard token={token} onCardAction={() => onCardAction(token)} />

                        </Box>

                    </Grid>
                ))}

            </Grid>
        </Stack>
    )
}