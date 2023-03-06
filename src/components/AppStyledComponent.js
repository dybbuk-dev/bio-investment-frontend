import { alpha, styled, Button, TextField } from "@mui/material";

const GradientButtonStyle = styled(Button)(({ theme, disabled, }) => ({
    borderRadius: 8,
    padding: '10px',
    border: 'none',
    color: disabled ? '#ffffffa7' : 'white',
    background: 'linear-gradient(296.69deg, #3D3393 8.3%, #2B76B9 35.59%, #2CACD1 63.24%, #35EB93 91.67%)',


}));
const LabelIconStyled = styled('div')(({ theme }) => ({
    width: 96,
    height: 24,
    display: 'flex',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.success.main,
    backgroundColor: alpha(theme.palette.success.main, 0.16),
}));

const BackgroundInputFieldStyled = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
}));

const BackgroundLabelStyled = styled('div')(({ theme }) => ({
    borderRadius:8,
    minHeight:48,
    borderWidth:'1px',
    borderStyle:'solid',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    padding:2,
    alignItems:'center',
    borderColor:theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
}));

export {
    LabelIconStyled,
    GradientButtonStyle,
    BackgroundInputFieldStyled,
    BackgroundLabelStyled
}