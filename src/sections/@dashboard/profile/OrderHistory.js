import { Button, Card, CardContent, CardHeader, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import useLocales from "../../../hooks/useLocales";

export default function OrderHistory() {
    const { translate } = useLocales();
    const [selectedTab, setSelectedTab] = useState('deposit');
    const onChange = (evt, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <Stack>
            <Card>
                <CardHeader title={translate('profile.order-history')} subheader={translate('profile.order-history-desc')} />
                <CardContent>
                    <Stack sx={{ borderBottomWidth: 1, borderBottomColor: 'divider', borderBottomStyle: 'solid' }} direction={{xs:'column', sm:'row'}} justifyContent={'space-between'}>
                        <Tabs value={selectedTab} onChange={onChange}>
                            <Tab value={"deposit"} label={translate('words.deposit')} />
                            <Tab value={"withdraw"} label={translate('words.withdraw')} />
                        </Tabs>
                        <Stack direction="row" gap={1} pt={2} alignItems = {'center'}>
                            <Typography variant={'body2'}>
                                {translate('words.order-type')}
                            </Typography>
                            <Button variant = 'contained' size = "small" sx = {{py:1}}>{translate('words.fiduciary')}</Button>
                            <Button variant = 'outlined' size = "small"  sx = {{py:1}}>{translate('words.crypto')}</Button>
                            
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}