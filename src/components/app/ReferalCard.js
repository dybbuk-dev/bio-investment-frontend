import PropTypes from 'prop-types';
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { GradientButtonStyle } from "../AppStyledComponent";


ReferalCard.propTypes = {
    callback: PropTypes.func,
    mode: PropTypes.object,
}

export default function ReferalCard({ mode, callback }) {
    return (
        <Card>
            <CardContent >
                <Stack justifyContent={'space-between'}  gap={4}>
                    <Typography sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace:"nowrap"
                    }}>
                        {mode?.title}
                    </Typography>
                    <Typography>
                        {mode?.price}
                    </Typography>
                    <GradientButtonStyle disabled={mode?.enabled}>
                        {mode?.action}
                    </GradientButtonStyle>
                </Stack>
            </CardContent>
        </Card>
    )
}