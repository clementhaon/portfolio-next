import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import {ColorModeContext} from "../styles/Theme";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import Switch from "@mui/material/Switch";


const Widget = styled('div')({
    borderRadius: 16,
    width: 250,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backdropFilter: 'blur(40px)',
    border: '0.3px solid #828282',
    backgroundColor: 'rgb(39, 42, 44, 0.5)',
    color:'#fff',
});
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


export default function Settings() {
    const { mode, toggleColorMode } = React.useContext(ColorModeContext);
    const [paused, setPaused] = React.useState(false);

    const mainIconColor = '#fff';
    const lightIconColor ='rgba(255,255,255,0.4)';
    return (
        <Box sx={{ overflow: 'hidden', position:'fixed', top:'90px', right:'24px' }}>
            <Widget>
                <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'10px 10px 0 10px'}}>
                    <Box sx={{ backgroundColor:'rgb(39, 42, 44, 0.6)', width:'100%', border: '0.3px solid #828282', display:'flex', justifyContent:'center', alignItems:'center', borderRadius: "16px",}}>
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 1 }}
                                    checked={mode === 'dark'}
                                    onClick={toggleColorMode}

                                />
                            }
                            label="Apparence"
                        />
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', padding:'10px'}}>
                    <Box sx={{ backgroundColor:'rgb(39, 42, 44, 0.6)', width:'100%', border: '0.3px solid #828282', display:'flex', justifyContent:'center', alignItems:'center', borderRadius: "26px",}}>
                        <FormControl sx={{padding:2}}>
                            <p style={{margin:0, padding:0,color:'#fff'}} id="column-radio-buttons-group-label">Langue</p>
                            <RadioGroup
                                defaultValue="Fr"
                                aria-labelledby="column-radio-buttons-group-label"
                                name="column-radio-buttons-group"
                            >
                                <FormControlLabel value="Fr" control={<Radio sx={{color:'#fff'}} />} label="Français" />
                                <FormControlLabel disabled value="En" control={<Radio sx={{color:'#fff'}}/>} label="English" />
                                <FormControlLabel disabled value="De" control={<Radio sx={{color:'#fff'}} />} label="Deutsch" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Box>
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        display: 'flex',*/}
                {/*        alignItems: 'center',*/}
                {/*        justifyContent: 'center',*/}
                {/*        mt: -1,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <IconButton aria-label="previous song">*/}
                {/*        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />*/}
                {/*    </IconButton>*/}
                {/*    <IconButton*/}
                {/*        aria-label={paused ? 'play' : 'pause'}*/}
                {/*        onClick={() => setPaused(!paused)}*/}
                {/*    >*/}
                {/*        {paused ? (*/}
                {/*            <PlayArrowRounded*/}
                {/*                sx={{ fontSize: '3rem' }}*/}
                {/*                htmlColor={mainIconColor}*/}
                {/*            />*/}
                {/*        ) : (*/}
                {/*            <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />*/}
                {/*        )}*/}
                {/*    </IconButton>*/}
                {/*    <IconButton aria-label="next song">*/}
                {/*        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />*/}
                {/*    </IconButton>*/}
                {/*</Box>*/}
                {/*<Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">*/}
                {/*    <VolumeDownRounded htmlColor={lightIconColor} />*/}
                {/*    <Slider*/}
                {/*        aria-label="Volume"*/}
                {/*        defaultValue={30}*/}
                {/*        sx={{*/}
                {/*            color:'#fff',*/}
                {/*            '& .MuiSlider-track': {*/}
                {/*                border: 'none',*/}
                {/*            },*/}
                {/*            '& .MuiSlider-thumb': {*/}
                {/*                width: 24,*/}
                {/*                height: 24,*/}
                {/*                backgroundColor: '#fff',*/}
                {/*                '&:before': {*/}
                {/*                    boxShadow: '0 4px 8px rgba(0,0,0)',*/}
                {/*                },*/}
                {/*                '&:hover, &.Mui-focusVisible, &.Mui-active': {*/}
                {/*                    boxShadow: 'none',*/}
                {/*                },*/}
                {/*            },*/}
                {/*        }}*/}
                {/*    />*/}
                {/*    <VolumeUpRounded htmlColor={lightIconColor} />*/}
                {/*</Stack>*/}
            </Widget>
        </Box>
    );
}