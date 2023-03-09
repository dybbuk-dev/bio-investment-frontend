import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardHeader, Checkbox, Container, Divider, FormControlLabel, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import LimitInvestAgree from "../../components/app/LimitInvestAgree";
import { GradientButtonStyle } from "../../components/AppStyledComponent";
import Label from "../../components/Label";
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
import useLocales from "../../hooks/useLocales";
import useSettings from "../../hooks/useSettings";
import { fNumber } from "../../utils/formatNumber";

const LimitInvestToolbar = ({ onNext = () => { }, onCancel = () => { }, translate }) => {
    return (
        <Stack>
            <Divider sx={{ mb: 2, }} />
            <Stack direction="row" gap={2} justifyContent={'flex-end'}>
                <Button sx={{ width: 160 }} variant={'outlined'}>{translate('words.back')}</Button>
                <GradientButtonStyle sx={{ width: 160 }} onClick={onNext}>{translate('words.next')}</GradientButtonStyle>
            </Stack>
        </Stack>
    )
}


export default function InvestLimitAgree() {
    const { id } = useParams();
    const theme = useTheme();
    const backgroundColor = theme.palette.mode === 'light'?'grey.200':'grey.800';
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    const ref = useRef();
    const navigate = useNavigate();

    const onNext = () => {
        if (ref.current.getPageState) {
            navigate('/auth/login');
        }
    }
    const onCancel = () => {
        navigate('/auth/agree-investment');
    }
    return (
        <Page title="Agree Investment limitation">
            <Container maxWidth={themeStretch ? '100%' : "xl"}>

                <Stack gap={2} padding={4}>
                    <Card>
                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center" >
                                <IconButton onClick = {onCancel}>
                                    <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
                                </IconButton>
                                <Typography variant="h5">{translate('t.Back')}</Typography>
                            </Stack>
                            <Divider />
                            <Stack alignItems={'center'} mb={2} gap={2}>
                                <Typography variant="h5" maxWidth={600}>
                                    {translate('t.AGREEMENT FOR THE PROVISION OF INTERMEDIATION SERVICES FOR INVESTMENT AND OTHER COVENANTS')}
                                </Typography>
                                <Typography variant="body2" maxWidth={600}>
                                    {translate('t.This is your platform terms of use consensus agreement.')}
                                </Typography>
                            </Stack>
                            <Scrollbar sx={{ maxHeight: 300 }} mb={2}>
                                <Stack component={'p'} mb={2} sx = {{backgroundColor}} padding = {2}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis vulputate ut sodales etiam aliquet quis enim et nisi. Orci id in duis bibendum odio a proin justo accumsan. Pellentesque viverra id blandit egestas tempor, tristique porttitor faucibus. Quisque pretium arcu lacinia sed volutpat. Suspendisse arcu mattis iaculis consequat. Dui mauris turpis pellentesque morbi bibendum. Sit cursus egestas cras mauris viverra ut. Tristique et id egestas vestibulum habitant lectus integer mattis nisi. Turpis viverra egestas nullam lacinia elit lacus scelerisque tristique. Odio dignissim nibh tincidunt eu iaculis. Pellentesque nisl habitant ut iaculis enim, ut non. Fringilla mollis magnis amet quis.
                                    Sit nec malesuada amet ipsum eget. Pellentesque nunc, hac a arcu quis blandit pretium viverra et. Ut sit fringilla et, proin ac, mauris. Diam pulvinar a elementum cras eleifend morbi. Urna quam eu, sit posuere commodo. Risus ipsum morbi ultrices felis dolor non. Dictum egestas magnis est aliquam. Maecenas vitae, amet dui pulvinar massa arcu enim faucibus.
                                    In porta sit quis enim, libero donec non lectus. Ullamcorper lobortis ornare porttitor pharetra, arcu. Quis euismod amet morbi enim, tincidunt nibh facilisis. Tortor nulla auctor morbi odio id lorem. Sagittis, vulputate integer convallis tortor vitae, montes, eget. Nam eget quis cursus tortor ac at sagittis, congue. Turpis massa adipiscing sit laoreet id quam nisi elementum, eu. Facilisi laoreet ornare tellus purus ac. Metus blandit vitae fringilla feugiat magna adipiscing facilisis. Ut amet consequat pharetra, sit imperdiet purus lacus, commodo. Tempor sit lacus, nulla viverra nunc, sit.
                                    Commodo metus, mauris a netus arcu lectus. Dui turpis dui nulla in. Suspendisse volutpat tristique in lorem consectetur vel tristique ut. Vel nulla egestas tempus, cursus. Nulla adipiscing enim fusce morbi. Est sapien, nisl amet netus ullamcorper turpis aliquam, blandit. Massa non lobortis non nunc id posuere aenean velit habitasse. In malesuada semper in hendrerit vel. Nisi, faucibus rhoncus tellus aliquet proin arcu odio enim. Diam venenatis, ullamcorper posuere augue semper. Non eu consectetur lacinia aliquet gravida morbi at. Mollis facilisis vitae, tempus, scelerisque.
                                    Turpis sed accumsan feugiat massa lobortis pellentesque. Sit gravida nisi odio euismod sit aenean.
                                </Stack>
                            </Scrollbar>
                            <Divider sx = {{mb:2}}/>
                            <FormControlLabel control={<Checkbox />} label={translate("t.I declare, for all legal purposes, I agree and express my adhesion to the entire content of the contract for the provision of services of intermediation of investments and other covenants, as well as subsequent amendments.")} sx = {{mb:2}} />
                            <LimitInvestToolbar translate={translate} onNext={onNext} onCancel={onCancel} />

                        </CardContent>
                    </Card>

                </Stack>

            </Container>
        </Page>
    )
}