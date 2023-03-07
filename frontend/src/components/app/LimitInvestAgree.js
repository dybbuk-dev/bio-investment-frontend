import { Checkbox, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import useLocales from "../../hooks/useLocales";
import { FormProvider, RHFRadioGroup, RHFTextField } from "../hook-form";
import Iconify from "../Iconify";


function _LimitInvestAgree(props, ref) {
    const { translate } = useLocales();
    const [pageState, setPageState] = useState({
        investMode: 0,
        gross: 0,
        investOtherCheck: true,
        investOtherAmount: 0,
        declareCheck: false,
    });
    const getPageState = () => pageState;

    useImperativeHandle(ref, () => ({
        getPageState,

    }));
    return (

        <Paper>
            <Stack gap={4} padding={2}>
                <Stack >
                    <Typography variant="subtitle1">{translate('profile.invest-limit')}</Typography>
                    <Typography variant="body2">{translate('profile.invest-limit-title')}</Typography>
                </Stack>
                <Stack gap={2}>
                    <Typography variant="body2" sx={{ mb: 2 }}>{translate('profile.invest-limit-desc')}</Typography>
                    <RadioGroup value={pageState.investMode} onChange={(evt, nv) => setPageState({ ...pageState, investMode: nv })}>
                        <FormControlLabel sx={{ mb: 1 }} control={<Radio value={0} />} label={translate('profile.invest-mode-0')} />

                        <FormControlLabel sx={{ mb: 1 }} control={<Radio value={1} />} label={translate('profile.invest-mode-1')} />
                        {`${pageState.investMode}` === `1` &&
                            <Stack ml={2}>
                                <Typography variant="body2">{translate('profile.invest-mode-1-label')}</Typography>
                                <TextField value={pageState.gross} onChange={(evt) => setPageState({ ...pageState, gross: evt.target.value })} />
                                <Typography sx={{ alignItems: 'center', display: 'flex', mb: 2 }}><Iconify icon="mdi:information-variant-circle-outline" />{translate('profile.invest-limit-gross-desc')}</Typography>
                            </Stack>
                        }

                        <FormControlLabel control={<Radio value={2} />} mb={1} label={translate('profile.invest-mode-2')} />

                    </RadioGroup>
                    <FormControlLabel label={translate('profile.invest-other')} control={<Checkbox checked={pageState.investOtherCheck} />} value={pageState.investOtherCheck} onChange={(evt) => setPageState({ ...pageState, investOtherCheck: evt.target.checked })} />
                    {pageState.investOtherCheck &&
                        <Stack ml={2}>
                            <Typography variant="body2">{translate('profile.invest-other-label')}</Typography>
                            <TextField value={pageState.investOtherAmount} onChange={(evt) => setPageState({ ...pageState, investOtherAmount: evt.target.value })} sx={{ mb: 2 }} />

                        </Stack>
                    }
                    <Stack>
                        <Typography variant="subtitle2" sx={{ mb: 2 }}>{translate('profile.invest-limit-footer-1')}</Typography>
                        <Typography variant="subtitle2" sx={{ mb: 2 }}>{translate('profile.invest-limit-footer-2')}</Typography>
                    </Stack>
                    <FormControlLabel label={translate('profile.invest-declare')} control={<Checkbox checked={pageState.declareCheck} />} value={pageState.declareCheck} onChange={(evt) => setPageState({ ...pageState, declareCheck: evt.target.checked })} sx={{ mb: 2 }} />
                    {props.children}
                </Stack>
            </Stack>
        </Paper >

    )
}

const LimitInvestAgree = forwardRef(_LimitInvestAgree);

export default LimitInvestAgree;