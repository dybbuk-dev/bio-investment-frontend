import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import useLocales from '../../hooks/useLocales';
import { ChooseDepositMode,  CryptoDepositHistory, BankDeposit, BankDepositHistory, CryptoDeposit } from '../../sections/@dashboard/deposit';


export default function Withdraw() {
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    const [mode, setMode] = useState('');
    const onCardAction = (token) => {

    }
    const onBank = () => {
        setMode('bank');
    }
    const onCrypto = () => {
        setMode('crypto');
    }
    return (
        <Page title="Deposit">
            <Container>
                {mode === '' &&
                    <Stack gap={2} mb={2}>
                        <ChooseDepositMode onBank={onBank} onCrypto={onCrypto} />
                    </Stack>
                }
                {mode === 'crypto' &&
                    <Stack gap={2}>
                        <CryptoDeposit />
                        <CryptoDepositHistory />
                    </Stack>
                }
                {mode === 'bank' &&
                    <Stack gap={2}>
                        <BankDeposit />
                        <BankDepositHistory />
                    </Stack>
                }
            </Container>
        </Page>
    )
}