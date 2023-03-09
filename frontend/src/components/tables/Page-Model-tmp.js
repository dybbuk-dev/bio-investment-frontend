import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardHeader, Container, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from 'react-router-dom';
import Label from "../../components/Label";
import Page from "../../components/Page";
import useLocales from "../../hooks/useLocales";
import useSettings from "../../hooks/useSettings";
import { fNumber } from "../../utils/formatNumber";



export default function TradingTokenDetails(){
    const { id } = useParams();
    const theme = useTheme();
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    return(
        <Page>
            <Container maxWidth={themeStretch ? '100%' : "xl"}>
                
            </Container>
        </Page>
    )
}