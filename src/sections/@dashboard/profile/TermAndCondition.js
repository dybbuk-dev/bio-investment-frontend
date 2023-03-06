import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import Scrollbar from "../../../components/Scrollbar";
import useLocales from "../../../hooks/useLocales";

export default function TermAndCondition(){
    const {translate} = useLocales();
    return(
        <Stack>
            <Card>
                <CardHeader title ={translate('profile.term')} subheader = {translate('profile.term-desc')}/>
                <CardContent>
                    <Scrollbar>
                        <Box component={'p'}>
                            Terms and conditions here
                        </Box>
                    </Scrollbar>
                </CardContent>
            </Card>
        </Stack>
    )
}