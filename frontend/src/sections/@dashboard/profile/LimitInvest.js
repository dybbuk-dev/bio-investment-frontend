import { Button, Card, CardContent, Divider, Stack } from "@mui/material";
import { useRef } from "react";
import { GradientButtonStyle } from "../../../components/AppStyledComponent";
import LimitInvestAgree from "../../../components/app/LimitInvestAgree";
import useLocales from "../../../hooks/useLocales";

const LimitInvestToolbar = ({ onNext = () => { }, onCancel = () => { }, translate }) => {
    return (
        <Stack>
            <Divider sx={{ mb: 2, }} />
            <Stack direction="row" gap={2} justifyContent={'flex-end'}>
                <Button sx={{ width: 160 }} variant={'outlined'}>{translate('words.cancle')}</Button>
                <GradientButtonStyle sx={{ width: 160 }} onClick = {onNext}>{translate('words.save')}</GradientButtonStyle>
            </Stack>
        </Stack>
    )
}
export default function LimitInvest() {
    const ref = useRef();
    const {translate} = useLocales();
    const onNext = () => {
        if(ref.current.getPageState){
            console.log(ref.current.getPageState());
        }
    }
    const onCancel = () => {

    }
    return (
        <Stack>
            <Card>
                <CardContent>
                    <LimitInvestAgree ref={ref}>
                        <LimitInvestToolbar translate = {translate} onNext={onNext} onCancel={onCancel} />
                    </LimitInvestAgree>

                </CardContent>
            </Card>
        </Stack>
    )
}