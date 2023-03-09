import { Icon } from "@iconify/react";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Card, CardContent, Grid, ImageList, ImageListItem, Radio, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Image from "../../../components/Image";
import useLocales from "../../../hooks/useLocales";
import { tokens } from "../../../_mock/_tokens";
import useResponsive from '../../../hooks/useResponsive';


const timelines = [
    {
        date: 'Mid of Q4 2021',
        data: 'With solid participation in the grain market, the cereal company controlled by the Fictor Group has extensive operational experience in the purchase and sale of Commodities (corn, sorghum, coffee, soybeans, etc.) for the domestic market. It mainly serves the poultry, beef and animal feed industries. With over eight years of operation.',
        image: '/tokens/token-1.png'
    },
    {
        date: 'Mid of Q4 2021',
        data: 'With solid participation in the grain market, the cereal company controlled by the Fictor Group has extensive operational experience in the purchase and sale of Commodities (corn, sorghum, coffee, soybeans, etc.) for the domestic market. It mainly serves the poultry, beef and animal feed industries. With over eight years of operation.',
        image: '/tokens/token-1.png'
    },
    {
        date: 'Mid of Q4 2021',
        data: 'With solid participation in the grain market, the cereal company controlled by the Fictor Group has extensive operational experience in the purchase and sale of Commodities (corn, sorghum, coffee, soybeans, etc.) for the domestic market. It mainly serves the poultry, beef and animal feed industries. With over eight years of operation.',
        image: '/tokens/token-1.png'
    },
    {
        date: 'Mid of Q4 2021',
        data: 'With solid participation in the grain market, the cereal company controlled by the Fictor Group has extensive operational experience in the purchase and sale of Commodities (corn, sorghum, coffee, soybeans, etc.) for the domestic market. It mainly serves the poultry, beef and animal feed industries. With over eight years of operation.',
        image: '/tokens/token-1.png'
    }
]
const socials = [
    {
        icon: 'logos:facebook',
        name: 'Facebook',
        url: '/Solar plus',
    },
    {
        icon: 'logos:youtube-icon',
        name: 'Youtube',
        url: '/Solar plus',
    },
    {
        icon: 'logos:twitter',
        name: 'Twitter',
        url: '/Solar plus',
    },
    {
        icon: 'skill-icons:instagram',
        name: 'Instagram',
        url: '/Solar plus',
    }
    ,
    {
        icon: 'uiw:global',
        name: 'Website',
        url: 'www.solarplus.com',
    }
]
export default function MyInvestTokenInfo() {
    const [currentTab, setCurrentTab] = useState('company-image');
    const { translate } = useLocales();
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    const mdUp = useResponsive('up', 'md');
    return (
        <Card>
            <CardContent>
                <Stack mb={1}>
                    <Tabs variant="scrollable"
                        onChange={(e, n) => setCurrentTab(n)} value={currentTab} scrollButtons={'auto'}>
                        <Tab value={'company-image'} label={translate('t.company-image')} />
                        <Tab value={'loadmap'} label={translate('t.roadmap')} />
                        <Tab value={'website'} label={translate('t.website')} />
                    </Tabs>
                </Stack>
                <Stack>
                    {currentTab === 'company-image' &&
                        <ImageList cols={3} >
                            {tokens?.map((item, index) => (
                                <ImageListItem key={index} sx={{ padding: { md: 1 } }}>
                                    <Image src={item.image} sx={{ borderRadius: 1 }} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    }
                    {currentTab === "loadmap" &&
                        <Stack>
                            <Typography variant="h6">{translate('t.Accelerated growth')}</Typography>

                            <Typography>{translate('t.With solid participation in the grain market, the cereal company controlled by the Fictor Group has extensive operational experience in the purchase and sale of Commodities (corn, sorghum, coffee, soybeans, etc.) for the domestic market. It mainly serves the poultry, beef and animal feed industries. With over eight years of operation.')}</Typography>

                            <Timeline position={mdUp ? 'alternate' : 'right'} sx={{
                                [`& .MuiTimelineItem-root:before`]: {
                                    flex: mdUp ? 1 : 0,
                                    display: !mdUp && 'none'
                                },
                            }}>
                                {timelines?.map((timeline, index) => (
                                    <TimelineItem key={index}>
                                        {mdUp &&
                                            <TimelineOppositeContent
                                                sx={{ m: 'auto 0' }}
                                                // align={index%2===0?'right':'inherit'}
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                <Image src={timeline.image} ratio={'16/9'} sx={{ borderRadius: 1 }} alt='' />

                                            </TimelineOppositeContent>
                                        }
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ width: 4, background: 'linear-gradient(to right, #4388DD, #2ACC61, #4388DD)', opacity: 0.1 }} />
                                            {/* <TimelineDot> */}
                                            <Radio checked />
                                            {/* </TimelineDot> */}
                                            <TimelineConnector sx={{ width: 4, background: 'linear-gradient(to right, #4388DD, #2ACC61, #4388DD)', opacity: 0.1 }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            {!mdUp &&
                                                <Image src={timeline.image} ratio={'16/9'} sx={{ borderRadius: 1 }} alt='' />

                                            }
                                            <Typography variant="h6" component="span">
                                                {timeline.date}
                                            </Typography>
                                            <Typography>{timeline.data}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Stack>

                    }
                    {currentTab === "website" &&
                        <Stack direction={{ md: 'row' }} alignItems={'center'} >
                            <Stack sx={{ width: 200, height: 200 }}>
                                <Image src="/logo/company_logo.png" alt="" />
                            </Stack>
                            <Grid container>
                                {socials?.map((social, index) => (
                                    <Grid item xs={12} sm={6} padding={1} key={index}>
                                        <Box sx={{ backgroundColor, borderRadius: 1 }} padding={2}>
                                            <Stack direction="row" gap={2} alignItems={'center'}>
                                                <Box sx={{ width: 26 }}>
                                                    <Icon icon={social.icon} width={24} />
                                                </Box>

                                                <Stack>
                                                    <Typography color="text.secondary">{social.name}</Typography>
                                                    <Typography variant="subtitle1">{social.url}</Typography>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                ))}

                            </Grid>
                        </Stack>
                    }
                </Stack>
            </CardContent>

        </Card>

    )
}