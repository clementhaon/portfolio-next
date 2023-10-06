'use client'
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = React.createContext(undefined);

export default function ToggleColorMode({ children }) {
    const [mode, setMode] = React.useState('dark');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const lightPalette = {
        mode:mode,
        background: {
            default: '#fff',
        },
    };

    const darkPalette = {
        mode:mode,
        background: {
            default: '#080808',
        },
    };
    const lightComponent = {
        styleOverrides: {
            indicator: {
                backgroundImage: 'linear-gradient(90deg, #479eec 0%, #cd40f5 49%, #f0607b 100%)',
            },
        },
    };

    const darkComponent = {
        styleOverrides: {
            indicator: {
                backgroundImage: 'linear-gradient(90deg, #ecc847 0%, #84f540 49%, #60f0e5 100%)',
            }
        },

    };

    const themeOptions = {
        palette: mode === 'light' ? lightPalette : darkPalette,
        components: {MuiTabs : mode === 'light' ? darkComponent : lightComponent}
    };

    const theme = React.useMemo(() => createTheme(themeOptions), [mode]);

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
