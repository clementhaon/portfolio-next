'use client'
import React, {useEffect, useRef, useState, RefObject} from 'react';
import {ColorModeContext} from '../styles/Theme';
import {Avatar, Box} from "@mui/material";
import { BsToggles } from 'react-icons/bs';
import Settings from './Settings';
import gsap from 'gsap';


export default function Header() {

    const [openSettings, setOpenSettings] = useState<boolean>(false);
    const [position, setPosition] = useState<boolean>(false);
    const settingsRef: RefObject<HTMLDivElement> = useRef(null);
    const { mode } = React.useContext(ColorModeContext);

    useEffect(() => {

        //Centered position with screen height
        const clientHeight = window.innerHeight;
        const centerY = clientHeight / 2;
        const avatarHeight = 250;
        const textContainerHeight = 100;
        const totalHeight = avatarHeight + textContainerHeight;
        const ensembleTop = centerY - totalHeight / 2.5;
        const textContainerTop = ensembleTop + (avatarHeight / 1.5);
        const avatar = document.getElementById('avatar-position');
        if (avatar) {
            avatar.style.maxHeight = `${avatarHeight}px`;
            avatar.style.top = `${ensembleTop}px`;
        }

        //Set text gsap
        const text = "Clément HAON, développeur full stack";
        const container = document.getElementById('text-container');
        setPosition(true);
        if (container) {
            container.innerHTML = '';
            container.style.top = `${textContainerTop}px`;
            text.split('').forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.opacity = "0";
                span.style.fontWeight = "600";
                span.style.fontSize = '48px';
                container.appendChild(span);

                gsap.to(span, {
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.1,
                    onComplete: () => {
                        if (index === text.length - 1) {
                            console.log('Animation complète');
                        }
                    }
                });
            });
        }

    }, []);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // console.log(event.target.className)
            let isPathElement = event.target.className.baseVal === 'svg-settings';
            if (event.target.className.baseVal === '' ||event.target.classList.contains('svg-settings') ) isPathElement = true;
            // console.log(isPathElement)
            // console.log(openSettings)
            if (isPathElement && !openSettings) {
                // console.log('premier if')
                setOpenSettings(true);
            } else if ((!settingsRef.current || !settingsRef.current.contains(event.target as Node)) && (!isPathElement || (isPathElement && openSettings))) {
                // console.log('second if')
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
            <div style={{position:"relative", width:'100%', height:'100vh'}}>
                {position ?
                    (
                        <>
                            <Avatar
                                sx={{ width:"100%", height:'auto', aspectRatio:"1/1", maxWidth:250, position:"absolute", left:'50%', transform:'translate(-50%, -50%)'}}
                                className={`${mode === "dark" ?  "shadow-light" :  "shadow-dark"}`}
                                id="avatar-position"
                                src={`${mode === "dark" ?  "/avatar-min.png" :  "/avatar_light-min.png"}`}
                            />
                            <div id="text-container" style={{ width:"100%", height:'auto', maxWidth:600, position:"absolute",left: '50%', transform: 'translateX(-50%)', textAlign:'center'}}/>
                        </>
                    ) :
                    (
                        <>
                            <Avatar
                                sx={{ display:'none'}}
                                className={`${mode === "dark" ?  "shadow-light" :  "shadow-dark"}`}
                                id="avatar-position"
                                src={`${mode === "dark" ?  "/avatar-min.png" :  "/avatar_light-min.png"}`}
                            />
                            <div id="text-container" style={{ display:'none'}}/>
                        </>
                    )
                }
            </div>
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

