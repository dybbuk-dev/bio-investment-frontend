import { IconButton, Stack, TextField } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { BackgroundInputFieldStyled } from "../AppStyledComponent";



export default function AmountChooser({handleMinus = ()=>{}, handleAdd = ()=>{}}) {
    return (
        <Stack direction="row" alignItems={'center'}>
            <IconButton onClick={handleMinus} sx = {{width:48, height:48}}>
                <RemoveIcon />
            </IconButton>
            <BackgroundInputFieldStyled size="small" sx={{ width: 84,}} type = "number" />
            <IconButton onClick = {handleAdd} sx = {{width:48, height:48}}>
                <AddIcon />
            </IconButton>
        </Stack>
    )
}