import { Icon } from "@iconify/react";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";

export default function RouterTitle({ routerName = "Router Name" }) {
    const isTablet = useResponsive('up', 'md');
    const theme = useTheme();
    return (
        <Stack direction="row" gap={1} alignItems={'center'}>
            {isTablet &&
                <>
                    <IconButton>
                        <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
                    </IconButton>
                    <Typography variable="h4" color = {theme.palette.text.primary}>
                        {routerName}
                    </Typography>
                </>
            }

        </Stack>
    )
}