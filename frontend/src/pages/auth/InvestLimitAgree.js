import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import LimitInvestAgree from "../../components/app/LimitInvestAgree";
import { GradientButtonStyle } from "../../components/AppStyledComponent";
import Label from "../../components/Label";
import Page from "../../components/Page";
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
    const { themeStretch } = useSettings();
    const { translate } = useLocales();
    const ref = useRef();
    const navigate = useNavigate();

    const onNext = () => {
        if (ref.current.getPageState) {
            navigate('/auth/agree-term');
        }
    }
    const onCancel = () => {
        navigate('/auth/register');
    }
    return (
        <Page title="Agree Investment limitation">
            <Container maxWidth={themeStretch ? '100%' : "xl"}>

                <Stack gap={2} padding={4}>
                    <Card>
                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center">
                                <IconButton onClick={onCancel}>
                                    <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
                                </IconButton>
                                <Typography variant="h5">{translate('t.Back')}</Typography>
                            </Stack>
                            <Divider />
                            <LimitInvestAgree ref={ref}>
                                <LimitInvestToolbar translate={translate} onNext={onNext} onCancel={onCancel} />
                            </LimitInvestAgree>
                        </CardContent>
                    </Card>

                </Stack>

            </Container>
        </Page>
    )
}