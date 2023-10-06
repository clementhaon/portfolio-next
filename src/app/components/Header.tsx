'use client'
import React, {useEffect, useRef, useState} from 'react';
import {ColorModeContext} from '../styles/Theme';
import {Box} from "@mui/material";
import { BsToggles } from 'react-icons/bs';
import Settings from './Settings';

export default function Header() {

    const [openSettings, setOpenSettings] = useState<boolean>(false);
    const settingsRef = useRef(null);
    const { mode } = React.useContext(ColorModeContext);


    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(event.target.className)
            let isPathElement = event.target.className.baseVal === 'svg-settings';
            if (event.target.className.baseVal === '' ||event.target.classList.contains('svg-settings') ) isPathElement = true;
            console.log(isPathElement)
            console.log(openSettings)
            if (isPathElement && !openSettings) {
                console.log('premier if')
                setOpenSettings(true);
            } else if ((!settingsRef.current || !settingsRef.current.contains(event.target)) && (!isPathElement || (isPathElement && openSettings))) {
                console.log('second if')
                setOpenSettings(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openSettings]);
    return (
        <Box className={`${mode === 'dark' ? 'dark':'light'}-background`}>
            <Box className="flex-end-row">
                <Box
                    className="icon-container svg-settings"
                    style={{backgroundColor: `${mode === 'dark' ? '#2d2d2d':'#fff'}`}}
                >
                    <BsToggles
                        className={'svg-settings'}
                        size={30}
                    />
                </Box>
                <div>
                    <div ref={settingsRef} className={`settings-container ${openSettings ? 'open' : 'closed'}`}>
                        {openSettings && <Settings />}
                    </div>
                </div>
            </Box>
        </Box>

    );
}

