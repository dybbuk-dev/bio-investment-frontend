import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import Scrollbar from "../../../components/Scrollbar";
import useLocales from "../../../hooks/useLocales";

export default function TermAndCondition() {
    const { translate } = useLocales();
    return (
        <Stack>
            <Card>
                <CardHeader title={translate('profile.term')} subheader={translate('profile.term-desc')} />
                <CardContent>
                    <Scrollbar sx = {{maxHeight:500}}>
                        <Box component={'p'} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis vulputate ut sodales etiam aliquet quis enim et nisi. Orci id in duis bibendum odio a proin justo accumsan. Pellentesque viverra id blandit egestas tempor, tristique porttitor faucibus. Quisque pretium arcu lacinia sed volutpat. Suspendisse arcu mattis iaculis consequat. Dui mauris turpis pellentesque morbi bibendum. Sit cursus egestas cras mauris viverra ut. Tristique et id egestas vestibulum habitant lectus integer mattis nisi. Turpis viverra egestas nullam lacinia elit lacus scelerisque tristique. Odio dignissim nibh tincidunt eu iaculis. Pellentesque nisl habitant ut iaculis enim, ut non. Fringilla mollis magnis amet quis.
                            Sit nec malesuada amet ipsum eget. Pellentesque nunc, hac a arcu quis blandit pretium viverra et. Ut sit fringilla et, proin ac, mauris. Diam pulvinar a elementum cras eleifend morbi. Urna quam eu, sit posuere commodo. Risus ipsum morbi ultrices felis dolor non. Dictum egestas magnis est aliquam. Maecenas vitae, amet dui pulvinar massa arcu enim faucibus.
                            In porta sit quis enim, libero donec non lectus. Ullamcorper lobortis ornare porttitor pharetra, arcu. Quis euismod amet morbi enim, tincidunt nibh facilisis. Tortor nulla auctor morbi odio id lorem. Sagittis, vulputate integer convallis tortor vitae, montes, eget. Nam eget quis cursus tortor ac at sagittis, congue. Turpis massa adipiscing sit laoreet id quam nisi elementum, eu. Facilisi laoreet ornare tellus purus ac. Metus blandit vitae fringilla feugiat magna adipiscing facilisis. Ut amet consequat pharetra, sit imperdiet purus lacus, commodo. Tempor sit lacus, nulla viverra nunc, sit.
                            Commodo metus, mauris a netus arcu lectus. Dui turpis dui nulla in. Suspendisse volutpat tristique in lorem consectetur vel tristique ut. Vel nulla egestas tempus, cursus. Nulla adipiscing enim fusce morbi. Est sapien, nisl amet netus ullamcorper turpis aliquam, blandit. Massa non lobortis non nunc id posuere aenean velit habitasse. In malesuada semper in hendrerit vel. Nisi, faucibus rhoncus tellus aliquet proin arcu odio enim. Diam venenatis, ullamcorper posuere augue semper. Non eu consectetur lacinia aliquet gravida morbi at. Mollis facilisis vitae, tempus, scelerisque.
                            Turpis sed accumsan feugiat massa lobortis pellentesque. Sit gravida nisi odio euismod sit aenean.
                        </Box>
                    </Scrollbar>
                </CardContent>
            </Card>
        </Stack>
    )
}