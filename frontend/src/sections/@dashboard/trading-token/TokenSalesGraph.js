import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ApexChart from "react-apexcharts";

import useLocales from "../../../hooks/useLocales";

export default function TokenSalesGraph({ token }) {
    const { translate } = useLocales();
    const [selectedMode, setSelectedMode] = useState('1');
    const data = {
        options: {
            chart: {
                id: 'token-sale-graph',
                 
            },
            xaxis: {
                categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']
            },
            // stroke: {
            //     curve: 'smooth',
            // }
        },

        series: [{
            name: 'sales',
            data: [100, 140, 200, 300, 210, 270, 300, 250]
        }]
    }
    return (
        <Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} gap={2} mb={2}>
                <Stack direction="row" alignItems={'flex-end'}>

                    <Typography variant="h6">Sales Graphic 📈</Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                    <Tabs value={selectedMode} onChange={(e, n) => setSelectedMode(n)}>
                        <Tab value='1' label={'24H'} />
                        <Tab value='7' label={'7D'} />
                        <Tab value='15' label={'15D'} />
                        <Tab value='30' label={'1M'} />
                        <Tab value='365' label={'1Y'} />
                    </Tabs>
                </Stack>

            </Stack>
            <Card>

                <CardContent>
                    <Stack>


                        <ApexChart
                            options={data.options}
                            series={data.series}
                            type="area"
                            width="100%"
                            height="400"
                        />
                    </Stack>
                </CardContent>
            </Card>
        </Stack>

    )
}