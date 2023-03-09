import { Card, CardContent, CardHeader, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import LastestTransactionTable from "../../../components/tables/trading-token/LastestTransactionTable";
import MyOrderTable from "../../../components/tables/trading-token/MyOrderTable";
import OrderBookTable from "../../../components/tables/trading-token/OrderBookTable";
import OrderHistoryTable from "../../../components/tables/trading-token/OrderHistoryTable";
import useLocales from "../../../hooks/useLocales";

export default function TokenProjectDetail({ token }) {
    const { translate } = useLocales();
    const [selectedTab, setSelectedTab] = useState('order');
    return (
        <Stack gap={2}>
            <Typography variant={'h6'} mt={1}>
                {translate('t.Project Details 🔍')}

            </Typography>
            <Tabs onChange={(e, n) => setSelectedTab(n)} value={selectedTab}>
                <Tab label={translate('t.Order Book')} value={'order'} />
                <Tab label={translate('t.My Order')} value={'my'} />
                <Tab label={translate('t.Historic')} value={'history'} />
            </Tabs>
            <Stack>
                {selectedTab === 'order' &&
                    <Stack direction={{ sm: 'column', md: 'row' }} gap={2}>
                        <Card sx={{ flexGrow: 1 }}>
                            <CardHeader title={translate('t.Order Book')} />
                            <CardContent>
                                <OrderBookTable />
                            </CardContent>
                        </Card>
                        <Card sx={{ flexGrow: 1 }}>
                            <CardHeader title={translate('t.Lastes Transactions')} />
                            <CardContent>
                                <LastestTransactionTable />
                            </CardContent>
                        </Card>
                    </Stack>

                }
                {selectedTab === 'my' &&
                    <Stack gap={2}>
                        <Card>
                            <CardHeader title={translate('t.My Order')} />
                            <CardContent>
                                <MyOrderTable />
                            </CardContent>
                        </Card>

                    </Stack>

                }
                {selectedTab === 'history' &&
                    <Stack gap={2}>
                        <Card>
                            <CardHeader title={translate('t.History')} />
                            <CardContent>
                                <OrderHistoryTable />
                            </CardContent>
                        </Card>

                    </Stack>
                }
            </Stack>
        </Stack>
    )
}