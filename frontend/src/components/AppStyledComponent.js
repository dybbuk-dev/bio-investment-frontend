import { alpha, Button, TextField, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientButtonStyle = styled(Button)(({ theme, disabled, }) => ({
    borderRadius: 8,
    padding: '10px',
    border: 'none',
    color: disabled ? '#ffffffa7' : 'white',

    background: disabled ? '#EFF8F3' : 'linear-gradient(296.69deg, #3D3393 8.3%, #2B76B9 35.59%, #2CACD1 63.24%, #35EB93 91.67%)',


}));

const IOSSwitchStyled = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
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
    borderRadius: 8,
    minHeight: 48,
    borderWidth: '1px',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 2,
    alignItems: 'center',
    borderColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
}));

export {
    LabelIconStyled,
    GradientButtonStyle,
    BackgroundInputFieldStyled,
    BackgroundLabelStyled,
    IOSSwitchStyled,
}