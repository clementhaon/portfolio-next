'use client'
import React, {ReactNode} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, PaletteMode} from '@mui/material';
import {ColorModeContextType} from '../types/theme';
import { ThemeOptions, PaletteOptions } from '@mui/material/styles';


export const ColorModeContext = React.createContext<ColorModeContextType>({
    mode: 'dark',
    toggleColorMode: () => {},
});
interface ToggleColorModeProps {
    children: ReactNode; // Définissez le type de children comme ReactNode
}
const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {    const [mode, setMode] = React.useState('light');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const lightPalette: PaletteOptions = {
        mode:mode as PaletteMode,
        background: {
            default: '#fff',
        },
    };

    const darkPalette: PaletteOptions = {
        mode:mode as PaletteMode,
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

    const themeOptions: ThemeOptions = {
        palette: mode === 'light' ? lightPalette : darkPalette,
        components: {MuiTabs : mode === 'light' ? darkComponent : lightComponent}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
export default ToggleColorMode;

