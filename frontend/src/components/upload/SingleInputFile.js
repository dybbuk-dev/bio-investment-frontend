import { Icon } from "@iconify/react";
import { useState } from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";


export default function SingleInputFile() {
    const theme = useTheme();
    const [selectedFile, setSelectedFile] = useState('');
    const backgroundColor = theme.palette.mode === 'light' ? 'grey.200' : 'grey.800';
    return (
        <Stack borderRadius={1} border={1} borderColor="text.secondary"
            direction="row"
        >
            <Button component="label"
                sx={{ backgroundColor,color:"text.secondary",paddingX:4 }}
                
            >
                <Icon icon="material-symbols:attach-file-add" />
                <Typography >Upload File</Typography>

                <input type="file" hidden />
            </Button>
            <Typography>
                {selectedFile}
            </Typography>

        </Stack>
    )
}