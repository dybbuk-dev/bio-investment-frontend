import { Box, Button, Divider, Grid, Link, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TokenCard from "../../../components/app/TokenCard";
import TradingTokenCard from "../../../components/app/TradingTokenCard";
import { tokens } from "../../../_mock/_tokens";


export default function MyTokenList() {
    const navigate = useNavigate();
    const onCardAction = (token) => {
        navigate(`/dashboard/buy-token/${token.id}`);
    }
    const onCardInternalAction = (token) => {
        navigate(`/dashboard/buy-token/${token.id}`);
    }
    return (
        <Stack>
            <Stack direction="row" gap={2} sx={{ mb: 2 }}>
                <Button variant="contained" sx={{ flexGrow: 1 }}>Participation Token</Button>
                <Button variant="outlined" sx={{ flexGrow: 1 }}>Equity Token</Button>
                <Button variant="outlined" sx={{ flexGrow: 1 }}>Utility Token</Button>

            </Stack>
            <Grid container>
                {tokens.map((token, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box padding={1}>
                            <TradingTokenCard token={token} onCardAction={() => onCardAction(token)} 
                            action = {<Link href = "#" onClick = {()=>onCardInternalAction(token)} >Check Intenal Data</Link>}
                            />
                        </Box>

                    </Grid>
                ))}

            </Grid>
        </Stack>
    )
}