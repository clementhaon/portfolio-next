'use client'
import React, {useEffect, useState} from 'react';;
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {ColorModeContext} from "../styles/Theme";
import Techno from './Techno';
import About from './About';
import Experience from "./Experience";
import {ColorModeContextType} from '../types/theme';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function CenteredTabs() {
    const [value, setValue] = useState(0);
    const { mode } = React.useContext<ColorModeContextType>(ColorModeContext);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                // Si la touche de droite est pressée, augmentez la valeur de l'onglet actif
                setValue((prevValue) => (prevValue + 1) % numberOfTabs);
            } else if (event.key === 'ArrowLeft') {
                // Si la touche de gauche est pressée, diminuez la valeur de l'onglet actif
                setValue((prevValue) => (prevValue - 1 + numberOfTabs) % numberOfTabs);
            }
        };

        // Ajoutez un écouteur d'événement pour la touche de droite et la touche de gauche
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Retirez l'écouteur d'événement lorsqu'un composant est démonté
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [value]); // Déclenchez l'effet lorsque la valeur de l'onglet actif change

    const numberOfTabs = 3;

    return (

        <Box sx={{ width: '100%', bgcolor: 'background.paper', scrollSnapAlign:'start'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    selectionFollowsFocus
                    className={`selected-tabs-${mode === 'dark' ? 'dark': 'light'}`}
                    aria-label="basic tabs example"
                >

                    <Tab className={`selected-tab-${mode === 'dark' ? 'dark': 'light'}`} label="Technos" {...a11yProps(0)}/>
                    <Tab className={`selected-tab-${mode === 'dark' ? 'dark': 'light'}`} label="Projets" {...a11yProps(1)}/>
                    <Tab className={`selected-tab-${mode === 'dark' ? 'dark': 'light'}`} label="À propos" {...a11yProps(2)}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Techno/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Experience/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <About/>
            </CustomTabPanel>
        </Box>
    );
}