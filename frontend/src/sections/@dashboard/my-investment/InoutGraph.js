import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import ApexChart from "react-apexcharts";

import useLocales from "../../../hooks/useLocales";

export default function InoutGraph() {
    const { translate } = useLocales();
    const data = {
        options: {
            chart: {
                id: 'inout-graph'
            },
            xaxis: {
                categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']
            },
            stroke: {
                curve: 'smooth',
            }
        },

        series: [{
            name: 'income',
            data: [100, 140, 200, 300, 210, 270, 300, 250]
        }, { name: 'expense', data: [130, 120, 210, 260, 230, 250, 400, 280] }]
    }
    return (
        <Card>
            <CardHeader title={translate('t.Comparison of Income x Expenses')} />
            <CardContent>
                <Stack>
                    <Stack direction="row" justifyContent={'space-between'}>
                        <Stack direction="row" >
                            <Icon icon="material-symbols:trending-up" color="primary.main" />
                            <Typography>4% more in 2022</Typography>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            Income, Expenses
                        </Stack>

                    </Stack>
                    <Stack>
                        <ApexChart
                            options={data.options}
                            series={data.series}
                            type="line"
                            width="100%"
                            height="300"
                        />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}